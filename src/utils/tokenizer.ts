import crypto from "crypto";
import fs from "fs";
import path from "path";
import { database } from "./database";

export const generateToken = () => {
  return crypto.randomBytes(16).toString("hex");
};

export const tokenize = (data: string): string => {
  const token = generateToken();
  database.set(token, data);
  return token;
};

export const detokenize = (data: string): string => {
  console.log(database);

  return database.get(data) || "invalid token";
};
