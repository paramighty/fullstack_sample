const express = require("express");
const cors = require("cors");

const countriesRouter = require("./routes/countries.js");
const suggestionsRouter = require("./routes/suggestions.js");
const popularSearches = require("./routes/popular-searches.js");
const app = express();

app.use(
	cors({
		origin: [
			"http://localhost:3000",
			"https://fullstacksample-production.up.railway.app",
			/\.vercel\.app$/,
		],
	})
);
app.use(express.json());

app.use("/api/countries", countriesRouter);
app.use("/api/suggestions", suggestionsRouter);
app.use("/api/popular-searches", popularSearches);

module.exports = app;
