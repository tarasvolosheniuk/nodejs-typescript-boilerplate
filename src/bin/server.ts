import http from "http";
import app from "..";

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);

const onError = (error: NodeJS.ErrnoException): void => {
  console.log(error);
};

const onListening = (): void => {
  console.log(`
	⚡️ Node Server mode: ${process.env.NODE_ENV}
	⚡️ Version: ${process.env.VERSION}
	⚡️ Listening on port: ${port}
	⚡️ Author: ${process.env.GIT_URL}
	⚡️ Hire Me: ${process.env.LINKED_URL}
`);
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
