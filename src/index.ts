import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";

dotenv.config();

const app: express.Application = express();

// Cookie policy variables
const COOKIE_MAX_AGE: string | number =
  process.env.COOKIE_MAX_AGE || 1000 * 60 * 60 * 24;
const SECRET = <string>process.env.SESSION_SECRET;

// Set security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),
);

// Parse request body
app.use(express.json());

// Parse cookie
app.use(cookieParser());

app.use(
  session({
    cookie: {
      maxAge: <number>COOKIE_MAX_AGE,
      httpOnly: true,
      sameSite: "lax",
    },
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    /* Store session in mongodb */
    // store: mongoStore,
    unset: "destroy",
  }),
);

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // Allow CORS
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow passing session cookie from browser
  }),
);

/**
 * Headers configuration
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL); // Set needed Client URL
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  console.log(req.url, req.params);
  next();
});

app.all("*", () => {
  throw new Error("Route not found");
});

export default app;
