import supertest from "supertest";

const URL = "http://localhost:3001";

describe("GET/employee", () => {
  it("shoud return 200", async () => {
    const response = await supertest(URL).get("/api/employees");
    expect(response.statusCode).toBe(200);
  });
  it("should return employe", async () => {
    const response = await supertest(URL).get("/api/employees");
    expect(response.body.length >= 1).toBe(true);
  });
});

describe("POST/employee", () => {
  const employeeData = {
    first_name: "Ayomiii",
    last_name: "Perera",
    email: "ayotest@gmail.com",
    number: "+94767654354",
    gender: "M",
    photo: "picture disply",
  };
  afterAll(async () => {
    const response = await supertest(URL).get("/api/employees");
    const lastItem = response.body[response.body.length - 1];
    await supertest(URL).delete(`/api/emplyees/${lastItem._id}`);
  });
  it("should add an employe to DB", async () => {
    const response = await supertest(URL)
      .post("/api/employees")
      .send(employeeData);
    expect(response.statusCode).toBe(201);
  });
});

describe("PUT/employee", () => {
  const employeeData = {
    first_name: "Ayomiii",
    last_name: "Perera",
    email: "ayotest@gmail.com",
    number: "+94767654354",
    gender: "M",
    photo: "picture disply",
  };
  beforeAll(async () => {
    await supertest(URL).post("/api/employees").send(employeeData);
  });
  afterAll(async () => {
    const response = await supertest(URL).get("/api/employees");
    const lastItem = response.body[response.body.length - 1];
    await supertest(URL).delete(`/api/emploees/${lastItem._id}`);
  });
  it("should update item if it exists", async () => {
    const newResponse = await supertest(URL).get("/api/employees");
    const lastItem = newResponse.body[newResponse.body.length - 1];
    const response = await supertest(URL)
      .put(`/api/employees/${lastItem._id}`)
      .send({
        gender: "F",
      });
    expect(response.statusCode).toBe(200);
  });
});

// describe("DELELE/employee", () => {
//   const employeeData = {    
//     first_name: "Ayomiii",
//     last_name: "Perera",
//     email: "ayotest@gmail.com",
//     number: "+94767654354",
//     gender: "M",
//     photo: "picture disply",
//   };
//   beforeAll(async () => {
//     await supertest(URL).post("/api/employes").send(employeeData);
//   });
//   it("should delete one item", async () => {
//     const newResponse = await supertest(URL).get("/api/employees");
//     console.log(newResponse);
//     const lastItem = newResponse.body[newResponse.body.length - 1];
//     const response = await supertest(URL).delete(`/api/emploees/${lastItem._id}`);
//     const employee = newResponse.body;
//     const exists = employee.find((employe:any) => {
//         lastItem._id == employe._id;
//     });
//     expect(exists).toBe(undefined);
//   });
// });