import { Container } from "typedi";
import SampleUtils from "../utils";
import SampleService from "../api/services";
import Logger from "./logger";

const initializeDI = () => {
  try {
    const utils = new SampleUtils();
    Container.set("utils", utils);

    const sampleService = new SampleService();
    Container.set("SampleService", sampleService);

    Logger.info("DI Container initialized");
  } catch (e: unknown) {
    Logger.error(e as Error);
    throw e;
  }
};

export default initializeDI;
