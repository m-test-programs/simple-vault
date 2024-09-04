import crypto from "crypto";
import fs from "fs";
import path from "path";
import { database } from "./database";
import { DetokenizeData } from "../routes/models/token";

export const generateToken = () => {
  return crypto.randomBytes(16).toString("hex");
};

export const tokenize = (data: string): string => {
  const token = generateToken();
  database.set(token, data);
  return token;
};

export const detokenize = (data: string): DetokenizeData => {
  return {
    value: database.get(data) || "",
    found: database.get(data) ? true : false,
  };
};
