// TryFinally judge — C++ driver kütüphanesi.
//
// Konteynerin içinde derlenir. stdin'den test listesini (JSON) okur, her test için
// kullanıcının Solution metodunu çağırır ve "@@JUDGE@@ {json}" satırları basar.
// Sadece judge'ın desteklediği tipler var: int, long long, double, bool, string
// ve bunların vector'leri (iç içe olabilir).

#ifndef TRYFINALLY_JUDGE_IO_HPP
#define TRYFINALLY_JUDGE_IO_HPP

#include <bits/stdc++.h>

namespace judge {

const char* const MARK = "@@JUDGE@@";

// ---------------------------------------------------------------------------
// Küçük JSON modeli ve okuyucu
// ---------------------------------------------------------------------------
struct Json {
  enum class Type { Null, Bool, Number, String, Array, Object };
  Type type = Type::Null;
  bool boolean = false;
  std::string text;  // Number için ham metin, String için içerik
  std::vector<Json> items;
  std::vector<std::pair<std::string, Json>> fields;

  const Json& at(size_t index) const {
    if (type != Type::Array || index >= items.size()) throw std::runtime_error("judge: eksik fonksiyon argümanı");
    return items[index];
  }
  const Json& get(const std::string& key) const {
    for (const auto& field : fields) {
      if (field.first == key) return field.second;
    }
    throw std::runtime_error("judge: JSON alanı yok: " + key);
  }
};

class Parser {
 public:
  explicit Parser(const std::string& source) : s_(source) {}

  Json parse() {
    Json value = parse_value();
    skip_space();
    if (pos_ != s_.size()) fail("fazladan karakter");
    return value;
  }

 private:
  const std::string& s_;
  size_t pos_ = 0;

  [[noreturn]] void fail(const std::string& why) { throw std::runtime_error("judge: JSON okunamadı (" + why + ")"); }
  void skip_space() {
    while (pos_ < s_.size() && std::isspace(static_cast<unsigned char>(s_[pos_]))) ++pos_;
  }
  bool consume(const char* word) {
    size_t length = std::strlen(word);
    if (s_.compare(pos_, length, word) == 0) {
      pos_ += length;
      return true;
    }
    return false;
  }

  Json parse_value() {
    skip_space();
    if (pos_ >= s_.size()) fail("beklenmeyen son");
    Json value;
    char c = s_[pos_];
    if (c == '[') {
      value.type = Json::Type::Array;
      ++pos_;
      skip_space();
      if (pos_ < s_.size() && s_[pos_] == ']') { ++pos_; return value; }
      while (true) {
        value.items.push_back(parse_value());
        skip_space();
        if (pos_ < s_.size() && s_[pos_] == ',') { ++pos_; continue; }
        if (pos_ < s_.size() && s_[pos_] == ']') { ++pos_; break; }
        fail("dizi");
      }
    } else if (c == '{') {
      value.type = Json::Type::Object;
      ++pos_;
      skip_space();
      if (pos_ < s_.size() && s_[pos_] == '}') { ++pos_; return value; }
      while (true) {
        skip_space();
        std::string key = parse_string();
        skip_space();
        if (pos_ >= s_.size() || s_[pos_] != ':') fail("nesne");
        ++pos_;
        value.fields.emplace_back(key, parse_value());
        skip_space();
        if (pos_ < s_.size() && s_[pos_] == ',') { ++pos_; continue; }
        if (pos_ < s_.size() && s_[pos_] == '}') { ++pos_; break; }
        fail("nesne");
      }
    } else if (c == '"') {
      value.type = Json::Type::String;
      value.text = parse_string();
    } else if (consume("true")) {
      value.type = Json::Type::Bool;
      value.boolean = true;
    } else if (consume("false")) {
      value.type = Json::Type::Bool;
    } else if (consume("null")) {
      value.type = Json::Type::Null;
    } else {
      value.type = Json::Type::Number;
      size_t start = pos_;
      while (pos_ < s_.size() && std::strchr("+-0123456789.eE", s_[pos_]) != nullptr) ++pos_;
      if (start == pos_) fail("sayı");
      value.text = s_.substr(start, pos_ - start);
    }
    return value;
  }

  static void append_utf8(std::string& out, unsigned long code) {
    if (code < 0x80) {
      out += static_cast<char>(code);
    } else if (code < 0x800) {
      out += static_cast<char>(0xC0 | (code >> 6));
      out += static_cast<char>(0x80 | (code & 0x3F));
    } else if (code < 0x10000) {
      out += static_cast<char>(0xE0 | (code >> 12));
      out += static_cast<char>(0x80 | ((code >> 6) & 0x3F));
      out += static_cast<char>(0x80 | (code & 0x3F));
    } else {
      out += static_cast<char>(0xF0 | (code >> 18));
      out += static_cast<char>(0x80 | ((code >> 12) & 0x3F));
      out += static_cast<char>(0x80 | ((code >> 6) & 0x3F));
      out += static_cast<char>(0x80 | (code & 0x3F));
    }
  }

  unsigned long parse_hex4() {
    if (pos_ + 4 > s_.size()) fail("\\u kaçışı");
    unsigned long code = std::stoul(s_.substr(pos_, 4), nullptr, 16);
    pos_ += 4;
    return code;
  }

  std::string parse_string() {
    if (pos_ >= s_.size() || s_[pos_] != '"') fail("metin");
    ++pos_;
    std::string out;
    while (pos_ < s_.size() && s_[pos_] != '"') {
      char c = s_[pos_++];
      if (c != '\\') { out += c; continue; }
      if (pos_ >= s_.size()) fail("kaçış");
      char e = s_[pos_++];
      switch (e) {
        case '"': out += '"'; break;
        case '\\': out += '\\'; break;
        case '/': out += '/'; break;
        case 'b': out += '\b'; break;
        case 'f': out += '\f'; break;
        case 'n': out += '\n'; break;
        case 'r': out += '\r'; break;
        case 't': out += '\t'; break;
        case 'u': {
          unsigned long code = parse_hex4();
          if (code >= 0xD800 && code <= 0xDBFF && s_.compare(pos_, 2, "\\u") == 0) {
            pos_ += 2;
            unsigned long low = parse_hex4();
            code = 0x10000 + ((code - 0xD800) << 10) + (low - 0xDC00);
          }
          append_utf8(out, code);
          break;
        }
        default: fail("kaçış");
      }
    }
    if (pos_ >= s_.size()) fail("kapanmayan metin");
    ++pos_;
    return out;
  }
};

inline Json parse(const std::string& source) { return Parser(source).parse(); }

// ---------------------------------------------------------------------------
// JSON -> C++ tipleri
// ---------------------------------------------------------------------------
template <class T>
struct From;

template <> struct From<int> {
  static int get(const Json& j) { return static_cast<int>(std::stoll(j.text)); }
};
template <> struct From<long> {
  static long get(const Json& j) { return static_cast<long>(std::stoll(j.text)); }
};
template <> struct From<long long> {
  static long long get(const Json& j) { return std::stoll(j.text); }
};
template <> struct From<double> {
  static double get(const Json& j) { return std::stod(j.text); }
};
template <> struct From<bool> {
  static bool get(const Json& j) { return j.boolean; }
};
template <> struct From<std::string> {
  static std::string get(const Json& j) { return j.text; }
};
template <class T> struct From<std::vector<T>> {
  static std::vector<T> get(const Json& j) {
    std::vector<T> values;
    values.reserve(j.items.size());
    for (const auto& item : j.items) values.push_back(From<T>::get(item));
    return values;
  }
};

template <class T>
T from_json(const Json& j) { return From<T>::get(j); }

// ---------------------------------------------------------------------------
// C++ tipleri -> JSON metni
// ---------------------------------------------------------------------------
inline std::string to_json(const std::string& s) {
  std::string out = "\"";
  for (unsigned char c : s) {
    switch (c) {
      case '"': out += "\\\""; break;
      case '\\': out += "\\\\"; break;
      case '\n': out += "\\n"; break;
      case '\r': out += "\\r"; break;
      case '\t': out += "\\t"; break;
      default:
        if (c < 0x20) {
          char buffer[8];
          std::snprintf(buffer, sizeof(buffer), "\\u%04x", c);
          out += buffer;
        } else {
          out += static_cast<char>(c);
        }
    }
  }
  return out + "\"";
}
inline std::string to_json(const char* s) { return to_json(std::string(s)); }
inline std::string to_json(bool b) { return b ? "true" : "false"; }

template <class T, typename std::enable_if<std::is_integral<T>::value && !std::is_same<T, bool>::value, int>::type = 0>
std::string to_json(T value) { return std::to_string(value); }

template <class T, typename std::enable_if<std::is_floating_point<T>::value, int>::type = 0>
std::string to_json(T value) {
  if (!std::isfinite(value)) return "null";
  std::ostringstream out;
  out << std::setprecision(15) << value;
  return out.str();
}

template <class T>
std::string to_json(const std::vector<T>& values) {
  std::string out = "[";
  for (size_t i = 0; i < values.size(); ++i) {
    if (i > 0) out += ",";
    const T value = values[i];  // vector<bool> için de çalışsın diye kopya
    out += to_json(value);
  }
  return out + "]";
}

// ---------------------------------------------------------------------------
// Test döngüsü
// ---------------------------------------------------------------------------
template <class Call>
int run_all(Call call) {
  std::string input((std::istreambuf_iterator<char>(std::cin)), std::istreambuf_iterator<char>());
  Json tests = parse(input);

  std::streambuf* real_buffer = std::cout.rdbuf();
  std::ostream real_out(real_buffer);

  for (const Json& test : tests.items) {
    const std::string id = test.get("id").text;
    real_out << "\n" << MARK << " {\"event\":\"start\",\"id\":" << to_json(id) << "}\n" << std::flush;

    std::ostringstream captured;
    std::cout.rdbuf(captured.rdbuf());
    std::string output, error, kind;
    bool ok = true;
    auto started = std::chrono::steady_clock::now();
    try {
      output = call(test.get("input"));
    } catch (const std::bad_alloc&) {
      ok = false;
      kind = "memory";
      error = "std::bad_alloc: bellek yetersiz";
    } catch (const std::exception& e) {
      ok = false;
      kind = "exception";
      error = std::string("std::exception: ") + e.what();
    } catch (...) {
      ok = false;
      kind = "exception";
      error = "Bilinmeyen bir istisna fırlatıldı";
    }
    double time_ms = std::chrono::duration<double, std::milli>(std::chrono::steady_clock::now() - started).count();
    std::cout.rdbuf(real_buffer);

    real_out << "\n" << MARK << " {\"event\":\"result\",\"id\":" << to_json(id) << ",\"ok\":" << to_json(ok);
    if (ok) {
      real_out << ",\"output\":" << output;
    } else {
      real_out << ",\"error\":" << to_json(error) << ",\"errorKind\":" << to_json(kind);
    }
    real_out << ",\"timeMs\":" << to_json(time_ms) << ",\"stdout\":" << to_json(captured.str()) << "}\n" << std::flush;
  }
  return 0;
}

}  // namespace judge

#endif
