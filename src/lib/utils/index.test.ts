import { ErrorInfo } from "react";
import { describe, expect, it, vi } from "vitest";
import { capitalize, cn, isImgUrl, logError, pluralize } from ".";

describe("utils", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      expect(cn("class1", "class2")).toBe("class1 class2");
      expect(cn("class1", false && "class2")).toBe("class1");
      expect(cn("class1", undefined, "class2")).toBe("class1 class2");
    });
  });

  describe("capitalize", () => {
    it("should capitalize the first letter of a string", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("world")).toBe("World");
    });

    it("should return undefined for an empty string", () => {
      expect(capitalize("")).toBeUndefined();
    });
  });

  describe("isImgUrl", () => {
    it("should return true for valid image URLs", () => {
      expect(isImgUrl("http://example.com/image.jpg")).toBe(true);
      expect(isImgUrl("https://example.com/image.png")).toBe(true);
    });

    it("should return false for invalid image URLs", () => {
      expect(isImgUrl("http://example.com/image.txt")).toBe(false);
      expect(isImgUrl("https://example.com/image")).toBe(false);
    });
  });

  describe("pluralize", () => {
    it("should pluralize a word correctly", () => {
      expect(pluralize("apple", 1)).toBe("apple");
      expect(pluralize("apple", 2)).toBe("apples");
    });
  });

  describe("logError", () => {
    it("should log error correctly", () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      const error = new Error("Test error");
      const errorInfo: ErrorInfo = { componentStack: "Test stack" };

      logError("Test error message", error, errorInfo);

      expect(consoleErrorSpy).toHaveBeenCalledWith("Test error message", error, errorInfo);
      consoleErrorSpy.mockRestore();
    });
  });
});
