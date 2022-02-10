import express from "express";
import cors from "cors";
import helmet from "helmet";

const S2B = express();

// application middlewares
S2B.use(express.json());
S2B.use(express.urlencoded({ extended: false }));
S2B.use(helmet());
S2B.use(cors());

S2B.get("/", (req, res) => res.json({ message: "Setup success" }));

S2B.listen(4000, () => console.log("Server is running 🚀"));
