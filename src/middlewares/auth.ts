import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isAuthorized = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("Not authorized");

  const secret: string = process.env.SECRET ? process.env.SECRET : "";

  jwt.verify(token, secret, (err, data) => {
    if (err) {
      return res.status(403).send("Access denied");
    }
    console.log(data);
    next();
  });
};
