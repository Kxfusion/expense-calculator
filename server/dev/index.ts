import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { calculateMoneyOwedController } from "./api/v1/controllers/calculate-money-owed-controller";
import { initializeSwagger } from "./lib/initialize-swagger";

const app = express();

app.listen("4040", () => console.log("Listening on port 4040"));

app.use(cors({ origin: "http://localhost:4200" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initializeSwagger(app);
calculateMoneyOwedController(app);
