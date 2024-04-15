import { Application, ErrorRequestHandler, RequestHandler } from "express";

export const applyMiddleware = (
  middlewareWrappers: RequestHandler[] | ErrorRequestHandler[],
  app: Application
) => {
  middlewareWrappers.forEach((wrapper) => {
    app.use(wrapper);
  });
};

export const applyRoutes = (
  routes: (app: Application) => void,
  app: Application
) => {
  routes(app);
};
