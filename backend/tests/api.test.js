const request = require("supertest");
const app = require("../path/to/your/app");

describe("Countries API", () => {
	test("should return specific data our frontend needs", async () => {
		const response = await request("http://localhost:8080").get(
			"/api/countries/sweden"
		);

		expect(response.status).toBe(200);
		expect(response.body[0].name.common).toBe("Sweden");
	});
});

describe("404 Error", () => {
	test("the client side is refusing to cooperate", async () => {
		const response = await request("http://localhost:8080").get(
			"/api/countries/suiden"
		);

		expect(response.status).toBe(404);
		expect(response.body.error).toBe("Country not found");
	});
});
