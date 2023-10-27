export interface ISampleService {
  ValidateNumberParams(
    request: Express.Request,
    response: Express.Response,
  ): Promise<void>;
}
