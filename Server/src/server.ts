import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotnev from "dotenv";
import corsOptions from "./config/corsOptions.config";

const app: Application = express();
const PORT: Number = 8000;

dotnev.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// connect to DB

// connect to route files

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

