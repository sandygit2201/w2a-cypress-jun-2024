describe("Share data between tests", () => {
  it.skip("validate response body", () => {
    let reqData = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    cy.request({
      url: "https://reqres.in/api/register",
      method: "POST",
      body: reqData,
    }).then((res) => {
      Cypress.env("token", res.body.token);
    });
  });

  it.skip("retreive data from another test", () => {
    let expectedResponse = { id: 4, token: "QpwL5tke4Pnpja7X4" };

    expect(Cypress.env("token")).to.eq(expectedResponse.token);
  });

  it('set runtime data',()=>{

    cy.task('setMyUniqueId',"abcde")

  })

  it('get runtime data',()=>{

    cy.task('getMyUniqueId').then(tokenValue=>{

        cy.log("Token value::"+tokenValue)

    })

  })
});
