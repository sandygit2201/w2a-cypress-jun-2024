describe("api requests", () => {
  it.skip("GET request", () => {
    cy.request("https://reqres.in/api/users/2").then((res) => {
      cy.log("Status::" + res.status);
      cy.log("Body::" + JSON.stringify(res.body));
      cy.log("duration::" + res.duration);
      cy.log("Headers::" + JSON.stringify(res.headers));
    });
  });

  it.skip("post req", () => {
    cy.fixture("api/register.json").then((reqBody) => {
      cy.request({
        url: "https://reqres.in/api/register",
        method: "POST",
        body: reqBody,
      }).then((res) => {
        let reqURL = "https://reqres.in/api/users/" + res.body.id;
        cy.request(reqURL).then((res) => {
          expect(res.status).to.eq(200);
          cy.log("Status::" + res.status);
          cy.log("Body::" + JSON.stringify(res.body));
          cy.log("duration::" + res.duration);
          cy.log("Headers::" + JSON.stringify(res.headers));
        });
      });
    });
  });

  it.skip("post req", () => {
    cy.fixture("api/register.json").then((reqBody) => {
      cy.request({
        url: "https://reqres.in/api/register",
        method: "POST",
        body: reqBody,
      }).as("newUser");
    });

    cy.get("@newUser").then((userResponse) => {
      let reqURL = "https://reqres.in/api/users/" + userResponse.body.id;
      cy.request(reqURL).then((res) => {
        expect(res.status).to.eq(200);
        cy.log("Status::" + res.status);
        cy.log("Body::" + JSON.stringify(res.body));
        cy.log("duration::" + res.duration);
        cy.log("Headers::" + JSON.stringify(res.headers));
      });
    });
  });

  it.skip("get user info", () => {
    cy.get("@newUser").then((userResponse) => {
      let reqURL = "https://reqres.in/api/users/" + userResponse.body.id;
      cy.request(reqURL).then((res) => {
        expect(res.status).to.eq(200);
        cy.log("Status::" + res.status);
        cy.log("Body::" + JSON.stringify(res.body));
        cy.log("duration::" + res.duration);
        cy.log("Headers::" + JSON.stringify(res.headers));
      });
    });
  });

  it.only("validate response body", () => {
    let reqData = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    let expectedResponse = { id: 4, token: "QpwL5tke4Pnpja7X4" };
    cy.request({
      url: "https://reqres.in/api/register",
      method: "POST",
      body: reqData,
    }).then((res) => {
      expect(res.body).to.deep.eq(expectedResponse)
      expect(res.body.id).to.eq(4)
    });
  });
});
