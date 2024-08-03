import Ajv from "ajv";

describe("compare json schema using AJV", () => {
  it("GET request", () => {
    // cy.request("https://reqres.in/api/users/2").then((res) => {
    //   cy.log("Status::" + res.status);
    //   cy.log("Body::" + JSON.stringify(res.body));
    //   cy.log("duration::" + res.duration);
    //   cy.log("Headers::" + JSON.stringify(res.headers));

      let response = {
        id: "2",
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      };

      const schema = {
        type: "object",
        properties: {
          id: { type: ["integer","string"] },
          email: { type: "string" },
          last_name: { type: "string" },
          first_name:{type:"string"},
          avatar: { type: "string" }
        },
        required: ["id", "email", "last_name", "avatar"],
        additionalProperties: false,
      };

      const ajv = new Ajv();

      const validate = ajv.compile(schema);
      const valid = validate(response);
      cy.log("Valid::"+valid)
      if (!valid) cy.log(JSON.stringify(validate.errors));
    });
  });

