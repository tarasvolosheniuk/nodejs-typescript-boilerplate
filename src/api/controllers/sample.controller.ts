import { Request, Response } from "express";
import Container, { Service } from "typedi";
import SampleService from "../services";

@Service("transient")
export default class SampleController {
  sampleService: SampleService;

  constructor() {
    this.sampleService = Container.get("SampleService");
  }

  DefaultRoute = (request: Request, response: Response) => {
    this.sampleService.ValidateNumberParams(request, response);
  };
}
