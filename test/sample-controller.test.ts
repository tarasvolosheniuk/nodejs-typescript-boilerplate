import SampleService from "../src/api/services";
import injector from "../src/lib/injector";
injector();

const sampleService = new SampleService();

describe("Test SampleService and its core functionality", () => {
  it("Should return the provided value if in is not the multiple of 3 nor 5", () => {
    expect(sampleService.ValidateNumberParams(4)).toBe("4");
  });
  it("Should return 'GN' when the value is the multiple of 5 and 4 simultaneously", () => {
    expect(sampleService.ValidateNumberParams(15)).toBe("GN");
  });
  it("Should return 'G' when the value is the multiple of 3", () => {
    expect(sampleService.ValidateNumberParams(3)).toBe("G");
  });
  it("Should return 'N' when the value is the multiple of 5", () => {
    expect(sampleService.ValidateNumberParams(5)).toBe("N");
  });
  it("Should throw an Error when the value parameter is not an integer", () => {
    try {
      sampleService.ValidateNumberParams(5.5);
    } catch (e: unknown) {
      expect((e as TypeError).message).toBe("Value must be an integer!");
    }
  });
});
