import initializeDI from "./injector";
import agenda from "./agenda";
import Logger from "./logger";
import { JobAttributesData } from "agenda";

/**
 * DI Container
 * @description Initialize DI Container
 */
initializeDI();

/**
 * Cron Job Scheduling
 * @description Check if agenda is working, in case you have provided DB connections string
 */
agenda.define("check_agenda_status", (job: JobAttributesData): void => {
  Logger.info("Agenda is working!", job.attrs.data);
});

(async function () {
  await agenda.start();

  await agenda.every("5 seconds", "check_agenda_status");
})();
