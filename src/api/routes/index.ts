import { Router } from "express";
import appRouter from "./app/app.route";
import _ from "lodash";

const router = Router();

const devRoutes = [
  {
    path: "/documentation",
    route: appRouter,
  },
  {
    path: "/typedoc",
    route: appRouter,
  },
];

// const protectedRoutes = []

const unprotectedRoutes = [
  {
    path: "/",
    route: appRouter,
  },
];

_.forEach(unprotectedRoutes, (route) => {
  //   router.use(apiV1RateLimiter);
  router.use(route.path, route.route);
});

if (process.env.NODE_ENV === "development") {
  _.forEach(devRoutes, (route) => {
    // apiV1Router.use(devlopmentApiLimiter);
    router.use(route.path, route.route);
  });
}

// _.forEach(protectedRoutes, (route) => {
//   //   router.use(apiV1RateLimiter);
//   router.use(route.path, route.route);
// });
// ...

export default router;
