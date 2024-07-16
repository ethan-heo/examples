// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from 'path'
import routes from "./routes/route";

dotenv.config({
  path: path.resolve(__dirname, '../env/dev.env')
});

const app: Express = express();
const port = process.env.PORT || 3000;

routes(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});