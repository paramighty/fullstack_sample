const express = require("express");
const cors = require("cors");

const countriesRouter = require("./routes/countries.js");
const suggestionsRouter = require("./routes/suggestions.js");
const popularSearches = require("./routes/popular-searches.js");
const searchHistory = require("./routes/search-history.js");
const signup = require("./routes/auth/signup.js");
const login = require("./routes/auth/login.js");
const me = require("./routes/auth/me.js");
const logout = require("./routes/auth/logout.js");

const app = express();
const cookieParser = require("cookie-parser");

app.use(
	cors({
		origin: [
			"http://localhost:3000",
			"https://fullstacksample-production.up.railway.app",
			/\.vercel\.app$/,
		],
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/countries", countriesRouter);
app.use("/api/suggestions", suggestionsRouter);
app.use("/api/popular-searches", popularSearches);
app.use("/api/search-history", searchHistory);
app.use("/api/auth/signup", signup);
app.use("/api/auth/login", login);
app.use("/api/auth/me", me);
app.use("/api/auth/logout", logout);

module.exports = app;
