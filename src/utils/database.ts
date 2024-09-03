import fs from "fs";
import path from "path";

export const database: Map<string, string> = new Map(
  JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../data/tokenMap.json"), "utf8")
  )
);
