import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";

const app = new Hono();

app.use(
  "/*",
  basicAuth({
    username: "riccha",
    password: "riccha",
  })
);

app.get("auth-page", (c) => {
  return c.text("Yout are authorized!!!!!!!!!!!!!!");
});

export default app;
