import express, { Request, Response } from "express";
const router = express.Router();

import { TransmittedData } from "./models/token";
import { tokenize, detokenize } from "../utils/tokenizer";
import { CustomError } from "./models/error";
import fs from "fs";
import path from "path";
import { isAuthorized } from "../middlewares/auth";
import { database } from "../utils/database";

router.post(
  "/tokenize",
  isAuthorized,
  (req: Request, res: Response<TransmittedData | CustomError>) => {
    try {
      const payload: TransmittedData = req.body;

      const {
        data: { fullName, idNumber, creditCard },
      } = payload;

      const tokens = {
        fullName: tokenize(fullName),
        idNumber: tokenize(idNumber),
        creditCard: tokenize(creditCard),
      };

      const dbArray = Array.from(database);

      const dbArrayJson = JSON.stringify(dbArray, null, 2);

      fs.writeFileSync(
        path.join(__dirname, "../../data/tokenMap.json"),
        dbArrayJson,
        "utf8"
      );

      res.status(201).send({
        id: payload.id,
        data: tokens,
      });
    } catch (error) {
      res.status(400).send({
        code: "Bad Request",
        message: "The submitted data was uncorrect",
      });
    }
  }
);

router.post(
  "/detokenize",
  isAuthorized,
  (req: Request, res: Response<TransmittedData | CustomError>) => {
    const payload: TransmittedData = req.body;

    try {
      const {
        data: { fullName, idNumber, creditCard },
      } = payload;

      res.status(201).send({
        id: payload.id,
        data: {
          fullName: detokenize(fullName),
          idNumber: detokenize(idNumber),
          creditCard: detokenize(creditCard),
        },
      });
    } catch (error) {
      res.status(400).send({
        code: "Bad Request",
        message: "The submitted data was uncorrect",
      });
    }
  }
);

module.exports = router;
