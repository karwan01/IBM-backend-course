const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");
const Employee = require("../src/models/employee");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Employee API", () => {
  it("should create a new employee", async () => {
    const res = await request(app).post("/api/employees").send({
      emp_name: "John Doe",
      age: 30,
      location: "New York",
      email: "john.doe@example.com",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });

  it("should fetch all employees", async () => {
    const res = await request(app).get("/api/employees");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
