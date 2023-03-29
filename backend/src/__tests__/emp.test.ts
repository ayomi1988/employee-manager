import console from "console";
import supertest from "supertest";

const URL = "http://localhost:3001";

describe("GET/employee", () => {
  it("shoud return 200", async () => {
    const response = await supertest(URL).get("/api/employees");
    expect(response.statusCode).toBe(200);
  });
  it("should return employe", async () => {
    const response = await supertest(URL).get("/api/employees");
    expect(response.body.data.length >= 1).toBe(true);
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
    const response:any = await supertest(URL).get("/api/employees");
    const lastItem = response.body.data[response.body.data.length - 1];
    await supertest(URL).delete(`/api/employees/${lastItem._id}`);
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
    gender: "Male",
    photo: "picture disply",
  };
  beforeAll(async () => {
    await supertest(URL).post("/api/employees").send(employeeData);
  });
  afterAll(async () => {
    const response:any = await supertest(URL).get("/api/employees");
   //console.log(response.body.data);
    const lastItem = response.body.data[response.body.data.length - 1];
  //  console.log(lastItem);
    await supertest(URL).delete(`/api/emploees/${lastItem._id}`);
  });
  it("should update item if it exists", async () => {
    const newResponse:any = await supertest(URL).get("/api/employees");
    const lastItem = newResponse.body.data[newResponse.body.data.length - 1];
    const response = await supertest(URL)
      .put(`/api/employees/${lastItem._id}`)
      .send({
        first_name: "Ayomi SS", 
      });
      console.log(response.body.error);
    expect(response.statusCode).toBe(200);
  });
});

describe("DELETE/employee", () => {
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
  it("should delete one item", async () => {
    let newResponse:any = await supertest(URL).get("/api/employees");
    const lastItem = newResponse.body.data[newResponse.body.data.length - 1];
   console.log('xxxx', lastItem._id);
    const response:any = await supertest(URL).delete(`/api/employees/${lastItem._id}`);
    expect(response.statusCode).toBe(200);
  });
});