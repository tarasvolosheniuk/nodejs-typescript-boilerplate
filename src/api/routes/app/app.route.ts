import { Router } from "express";
import SampleController from "../../controllers";
import validateNumberParam from "../../middlewares/validate-number-sample";

const appRouter = Router();
const sampleController = new SampleController();

appRouter.get("/:value", validateNumberParam, sampleController.DefaultRoute);

export default appRouter;
