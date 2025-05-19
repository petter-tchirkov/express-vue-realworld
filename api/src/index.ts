import type { Application } from "express";

import cors from "cors";
import express from "express";

import root from "./routes/";
import { PORT } from "./secrets";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/", root);
app.listen(3000, () => console.log("server started", PORT));
