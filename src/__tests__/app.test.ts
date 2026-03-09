import { describe, expect, test } from "bun:test";

describe("app modules", () => {
  test("HomeScreen imports without throwing", () => {
    expect(() => require("../screens/HomeScreen")).not.toThrow();
  });

  test("ReaderScreen imports without throwing", () => {
    expect(() => require("../screens/ReaderScreen")).not.toThrow();
  });
});
