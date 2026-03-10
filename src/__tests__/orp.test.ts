import { describe, expect, test } from "bun:test";
import { midIndex } from "../utils/orp";

describe("midIndex", () => {
  test("returns 2 for 'hello' (5 chars)", () => {
    expect(midIndex("hello")).toBe(2);
  });

  test("returns 1 for 'test' (4 chars)", () => {
    expect(midIndex("test")).toBe(1);
  });

  test("returns 0 for single character", () => {
    expect(midIndex("a")).toBe(0);
  });

  test("returns 0 for empty string", () => {
    expect(midIndex("")).toBe(0);
  });
});
