/**
 * Programın döndürdüğü değer ile beklenen değeri karşılaştırır.
 * İki taraf da JSON değeridir. Ondalıklı sayılarda küçük farklar (1e-6) kabul edilir.
 */

const EPSILON = 1e-6;

export function valuesEqual(actual: unknown, expected: unknown): boolean {
  if (typeof actual === "number" && typeof expected === "number") {
    if (Number.isInteger(actual) && Number.isInteger(expected)) return actual === expected;
    return Math.abs(actual - expected) <= EPSILON * Math.max(1, Math.abs(actual), Math.abs(expected));
  }
  if (Array.isArray(actual) && Array.isArray(expected)) {
    return actual.length === expected.length && actual.every((item, index) => valuesEqual(item, expected[index]));
  }
  if (actual && expected && typeof actual === "object" && typeof expected === "object") {
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);
    return (
      actualKeys.length === expectedKeys.length &&
      expectedKeys.every((key) =>
        valuesEqual((actual as Record<string, unknown>)[key], (expected as Record<string, unknown>)[key]),
      )
    );
  }
  return actual === expected;
}
