import express from "express";
import cors from "cors";
import countriesRouter from "./routes/countries.js";
import "dotenv/config";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
console.log("2. About to load countries router");
app.use("/api/countries", countriesRouter);

app
	.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	})
	.on("error", (err) => {
		console.error("Server error:", err);
	});
