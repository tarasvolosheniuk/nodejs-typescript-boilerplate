import { ISampleUtils } from "../interfaces";

export default class SampleUtilsClass implements ISampleUtils {
  public isMultipleOf3(nmb: number): boolean {
    return nmb % 3 === 0;
  }

  public isMultipleOf5(nmb: number): boolean {
    return nmb % 5 === 0;
  }
}
