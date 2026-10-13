// TryFinally judge — Java driver kütüphanesi.
//
// Konteynerin içinde Main.java ile birlikte derlenir. stdin'den test listesini
// (JSON) okur, her test için kullanıcının Solution metodunu çağırır ve
// "@@JUDGE@@ {json}" satırları basar.

import java.io.ByteArrayOutputStream;
import java.io.FileDescriptor;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public final class JudgeIO {
    private static final String MARK = "@@JUDGE@@";

    private JudgeIO() {}

    /** Main.java'nın her test için çağırdığı fonksiyon: argümanları alır, sonucun JSON metnini döner. */
    public interface Call {
        String apply(List<Object> args) throws Throwable;
    }

    // ------------------------------------------------------------------
    // Test döngüsü
    // ------------------------------------------------------------------
    public static void run(Call call) throws Exception {
        String input = new String(System.in.readAllBytes(), StandardCharsets.UTF_8);
        List<Object> tests = asList(parse(input));
        PrintStream real = new PrintStream(new FileOutputStream(FileDescriptor.out), true, StandardCharsets.UTF_8);

        for (Object rawTest : tests) {
            @SuppressWarnings("unchecked")
            Map<String, Object> test = (Map<String, Object>) rawTest;
            String id = asString(test.get("id"));
            real.print("\n" + MARK + " {\"event\":\"start\",\"id\":" + toJson(id) + "}\n");
            real.flush();

            ByteArrayOutputStream captured = new ByteArrayOutputStream();
            PrintStream previous = System.out;
            System.setOut(new PrintStream(captured, true, StandardCharsets.UTF_8));
            StringBuilder event = new StringBuilder("{\"event\":\"result\",\"id\":").append(toJson(id));
            long started = System.nanoTime();
            try {
                String output = call.apply(asList(test.get("input")));
                event.append(",\"ok\":true,\"output\":").append(output);
            } catch (Throwable error) {
                String kind = error instanceof OutOfMemoryError ? "memory"
                        : error instanceof StackOverflowError ? "stack" : "exception";
                event.append(",\"ok\":false,\"error\":").append(toJson(describe(error)))
                        .append(",\"errorKind\":").append(toJson(kind));
            } finally {
                System.out.flush();
                System.setOut(previous);
            }
            double timeMs = (System.nanoTime() - started) / 1_000_000.0;
            event.append(",\"timeMs\":").append(toJson(timeMs))
                    .append(",\"stdout\":").append(toJson(captured.toString(StandardCharsets.UTF_8)))
                    .append("}");
            real.print("\n" + MARK + " " + event + "\n");
            real.flush();
        }
    }

    /** LeetCode benzeri hata metni: istisna + sadece kullanıcının Solution satırları. */
    private static String describe(Throwable error) {
        StringBuilder text = new StringBuilder(error.toString());
        for (StackTraceElement frame : error.getStackTrace()) {
            String owner = frame.getClassName();
            if (owner.equals("Solution") || owner.startsWith("Solution$")) {
                text.append("\n    at ").append(frame);
            }
        }
        return text.toString();
    }

    // ------------------------------------------------------------------
    // JSON -> Java
    // ------------------------------------------------------------------
    public static int asInt(Object value) { return ((Number) value).intValue(); }
    public static long asLong(Object value) { return ((Number) value).longValue(); }
    public static double asDouble(Object value) { return ((Number) value).doubleValue(); }
    public static boolean asBool(Object value) { return (Boolean) value; }
    public static String asString(Object value) { return (String) value; }

    @SuppressWarnings("unchecked")
    public static List<Object> asList(Object value) { return (List<Object>) value; }

    public static boolean[] asBoolArray(Object value) {
        List<Object> items = asList(value);
        boolean[] result = new boolean[items.size()];
        for (int i = 0; i < result.length; i++) result[i] = asBool(items.get(i));
        return result;
    }

    // ------------------------------------------------------------------
    // Java -> JSON metni
    // ------------------------------------------------------------------
    public static String toJson(Object value) {
        if (value == null) return "null";
        if (value instanceof String s) return quote(s);
        if (value instanceof Character c) return quote(String.valueOf(c));
        if (value instanceof Boolean b) return b ? "true" : "false";
        if (value instanceof Double || value instanceof Float) {
            double d = ((Number) value).doubleValue();
            return Double.isFinite(d) ? String.valueOf(d) : "null";
        }
        if (value instanceof Number n) return String.valueOf(n.longValue());
        if (value instanceof int[] a) { List<Object> l = new ArrayList<>(); for (int x : a) l.add(x); return toJson(l); }
        if (value instanceof long[] a) { List<Object> l = new ArrayList<>(); for (long x : a) l.add(x); return toJson(l); }
        if (value instanceof double[] a) { List<Object> l = new ArrayList<>(); for (double x : a) l.add(x); return toJson(l); }
        if (value instanceof boolean[] a) { List<Object> l = new ArrayList<>(); for (boolean x : a) l.add(x); return toJson(l); }
        if (value instanceof char[] a) { List<Object> l = new ArrayList<>(); for (char x : a) l.add(x); return toJson(l); }
        if (value instanceof Object[] a) return toJson(java.util.Arrays.asList(a));
        if (value instanceof Collection<?> items) {
            StringBuilder out = new StringBuilder("[");
            boolean first = true;
            for (Object item : items) {
                if (!first) out.append(',');
                out.append(toJson(item));
                first = false;
            }
            return out.append(']').toString();
        }
        throw new IllegalArgumentException(value.getClass().getSimpleName() + " tipi JSON'a çevrilemiyor");
    }

    private static String quote(String s) {
        StringBuilder out = new StringBuilder("\"");
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
                case '"' -> out.append("\\\"");
                case '\\' -> out.append("\\\\");
                case '\n' -> out.append("\\n");
                case '\r' -> out.append("\\r");
                case '\t' -> out.append("\\t");
                default -> {
                    if (c < 0x20) out.append(String.format("\\u%04x", (int) c));
                    else out.append(c);
                }
            }
        }
        return out.append('"').toString();
    }

    // ------------------------------------------------------------------
    // Küçük JSON okuyucu: Long, Double, Boolean, String, List, Map, null
    // ------------------------------------------------------------------
    public static Object parse(String source) {
        int[] pos = {0};
        Object value = parseValue(source, pos);
        skipSpace(source, pos);
        if (pos[0] != source.length()) throw new IllegalStateException("judge: JSON okunamadı");
        return value;
    }

    private static void skipSpace(String s, int[] pos) {
        while (pos[0] < s.length() && Character.isWhitespace(s.charAt(pos[0]))) pos[0]++;
    }

    private static Object parseValue(String s, int[] pos) {
        skipSpace(s, pos);
        char c = s.charAt(pos[0]);
        if (c == '[') {
            pos[0]++;
            List<Object> items = new ArrayList<>();
            skipSpace(s, pos);
            if (s.charAt(pos[0]) == ']') { pos[0]++; return items; }
            while (true) {
                items.add(parseValue(s, pos));
                skipSpace(s, pos);
                char next = s.charAt(pos[0]++);
                if (next == ']') return items;
                if (next != ',') throw new IllegalStateException("judge: JSON dizi hatası");
            }
        }
        if (c == '{') {
            pos[0]++;
            Map<String, Object> fields = new LinkedHashMap<>();
            skipSpace(s, pos);
            if (s.charAt(pos[0]) == '}') { pos[0]++; return fields; }
            while (true) {
                skipSpace(s, pos);
                String key = parseString(s, pos);
                skipSpace(s, pos);
                if (s.charAt(pos[0]++) != ':') throw new IllegalStateException("judge: JSON nesne hatası");
                fields.put(key, parseValue(s, pos));
                skipSpace(s, pos);
                char next = s.charAt(pos[0]++);
                if (next == '}') return fields;
                if (next != ',') throw new IllegalStateException("judge: JSON nesne hatası");
            }
        }
        if (c == '"') return parseString(s, pos);
        if (s.startsWith("true", pos[0])) { pos[0] += 4; return Boolean.TRUE; }
        if (s.startsWith("false", pos[0])) { pos[0] += 5; return Boolean.FALSE; }
        if (s.startsWith("null", pos[0])) { pos[0] += 4; return null; }
        int start = pos[0];
        while (pos[0] < s.length() && "+-0123456789.eE".indexOf(s.charAt(pos[0])) >= 0) pos[0]++;
        String number = s.substring(start, pos[0]);
        if (number.isEmpty()) throw new IllegalStateException("judge: JSON sayı hatası");
        if (number.contains(".") || number.contains("e") || number.contains("E")) return Double.parseDouble(number);
        return Long.parseLong(number);
    }

    private static String parseString(String s, int[] pos) {
        if (s.charAt(pos[0]) != '"') throw new IllegalStateException("judge: JSON metin hatası");
        pos[0]++;
        StringBuilder out = new StringBuilder();
        while (s.charAt(pos[0]) != '"') {
            char c = s.charAt(pos[0]++);
            if (c != '\\') { out.append(c); continue; }
            char e = s.charAt(pos[0]++);
            switch (e) {
                case 'b' -> out.append('\b');
                case 'f' -> out.append('\f');
                case 'n' -> out.append('\n');
                case 'r' -> out.append('\r');
                case 't' -> out.append('\t');
                case 'u' -> { out.append((char) Integer.parseInt(s.substring(pos[0], pos[0] + 4), 16)); pos[0] += 4; }
                default -> out.append(e);
            }
        }
        pos[0]++;
        return out.toString();
    }
}
