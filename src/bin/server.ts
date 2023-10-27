import app from "..";
import Logger from "../lib/logger";
import { createExpressServer } from "routing-controllers";
import SampleController from "../api/controllers";

const port = process.env.PORT || 3000;

const server = createExpressServer({
  controllers: [SampleController],
  defaults: {
    nullResultCode: 404,

    undefinedResultCode: 204,

    paramOptions: {
      required: true,
    },
    ...app,
  },
});

const onError = (error: NodeJS.ErrnoException): void => {
  Logger.error(error);
};

Logger.info(`
  ⚡️ Node Server mode: ${process.env.NODE_ENV}
  ⚡️ Version: ${process.env.VERSION}
  ⚡️ Listening on port: ${port}
  ⚡️ Author: ${process.env.GIT_URL}
  ⚡️ Hire Me: ${process.env.LINKED_URL}
`);

server.listen(port);
server.on("error", onError);
