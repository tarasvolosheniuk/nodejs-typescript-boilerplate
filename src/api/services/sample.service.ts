import Container, { Service } from "typedi";
import Express from "express";
import { ISampleService, ISampleUtils } from "../../interfaces";

@Service("SampleService")
export default class SampleService implements ISampleService {
  private utils: ISampleUtils;
  constructor() {
    this.utils = Container.get("utils");
  }
  ValidateNumberParams = async (
    request: Express.Request,
    response: Express.Response,
  ): Promise<void> => {
    let result = "";
    const { value } = request.params;
    const intValue = Number(value);

    if (this.utils.isMultipleOf3(intValue)) result = "G";
    if (this.utils.isMultipleOf5(intValue)) result = result + "N";
    if (result === "") result = value;

    response.status(200).json({ result });
  };
}
