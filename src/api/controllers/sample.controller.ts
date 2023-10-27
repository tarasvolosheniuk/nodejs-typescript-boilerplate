import { Response } from "express";
import Container from "typedi";
import SampleService from "../services";
import { Controller, Param, Res, Get, UseBefore } from "routing-controllers";
import validateNumberParam from "../middlewares/validate-number-sample";
@Controller()
export default class SampleController {
  sampleService: SampleService;

  constructor() {
    this.sampleService = Container.get("SampleService");
  }

  @Get("/:value")
  @UseBefore(validateNumberParam)
  DefaultRoute(@Param("value") value: number, @Res() response: Response) {
    const result = this.sampleService.ValidateNumberParams(value);
    return response.json({ result }).send();
  }
}
