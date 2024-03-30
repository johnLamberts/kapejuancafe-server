import getImageExtension from "~/utils/getImageExtension";

describe("Testing to see if Jest works", () => {
  describe("given two plus two", () => {
    it("should return 4", () => {
      const totalSum = 2 + 2;
      expect(totalSum).toBe(4);
    });
  });

  describe("given true === true", () => {
    it("should return true", () => {
      expect(true).toBe(true);
    });
  });
});

describe("utils", () => {
  describe("getImageExtension", () => {
    describe('given the mimetype "image/png"', () => {
      it("should return .png", () => {
        expect(getImageExtension("image/png")).toMatch(/.png/);
      });
    });
  });
});
