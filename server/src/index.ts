import express, { Request, Response } from "express";
import path from "path";
import {
  bodyParserMiddleware,
  loggerMiddleware,
  errorMiddleware,
} from "./middleware";
import { getBooks } from "./controllers";

const port = process.env.PORT || 3000;

const clientBuildPath =
  process.env.CLIENT_BUILD_PATH || path.join(__dirname, "../../client/build");

const app = express();

app.use(errorMiddleware);
app.use(loggerMiddleware);
app.use(bodyParserMiddleware);

app.use(express.static(clientBuildPath));

app.get("/api/books", getBooks);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(clientBuildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
