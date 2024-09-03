import express, { Request, Response } from "express";
import { User } from "./models/user";
import jwt from "jsonwebtoken";
import { isAuthorized } from "../middlewares/auth";

const router = express.Router();

router.post("/authenticate", (req: Request, res: Response<string>) => {
  const { username, password }: User = req.body;

  const storedUsername = process.env.USER_NAME;
  const storedPassword = process.env.USER_PWD;

  const secret: string = process.env.SECRET ? process.env.SECRET : "";

  if (username === storedUsername && password === storedPassword) {
    const token = jwt.sign({ username }, secret, {
      expiresIn: "10m",
    });

    res.status(201).send(token);
  } else {
    res.status(401).send("Not authorized");
  }
});

module.exports = router;
