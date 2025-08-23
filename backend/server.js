require("dotenv").config();
const app = require("./app.js");

const PORT = 8080;

app
	.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	})
	.on("error", (err) => {
		console.error("Server error:", err);
	});
