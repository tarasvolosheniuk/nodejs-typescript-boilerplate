import Container, { Service } from "typedi";
import { ISampleService, ISampleUtils } from "../../interfaces";

@Service("SampleService")
export default class SampleService implements ISampleService {
  private utils: ISampleUtils;
  constructor() {
    this.utils = Container.get("utils");
  }
  ValidateNumberParams = (value: number): string => {
    if (!Number.isInteger(value)) throw TypeError("Value must be an integer!");

    let result = "";

    if (this.utils.isMultipleOf3(value)) result = "G";
    if (this.utils.isMultipleOf5(value)) result = result + "N";
    if (result === "") result = value.toString();

    return result;
  };
}
