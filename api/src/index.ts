import type { Application } from "express";

import cors from "cors";
import express from "express";

const app: Application = express();
app.use(cors());

app.get("/", (_, res) => {
  res.send({ message: "huy" });
});

app.listen(3000, () => console.log("server started"));
