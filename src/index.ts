import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

import posts from "./posts";
import auth from "./auth";

const app = new Hono();

app.use("*", prettyJSON());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/posts", posts);
app.route("/auth", auth);

export default app;
