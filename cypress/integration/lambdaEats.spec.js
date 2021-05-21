describe("Basic Functionality", () => {
  it("checks sanity", () => {
    expect(true).to.equal(true);
  });
  it("loads the page", () => {
    cy.visit("http://localhost:3000");
  });
});
describe("Router Functionality", () => {
  it("Navigates to home", () => {
    cy.contains("Home").click();
    cy.location("href").should("eq", "http://localhost:3000/");
  });
  it("Navigates to help", () => {
    cy.contains("Help").click();
    cy.url().should("eq", "http://localhost:3000/help");
  });
  it("Navigates to home from help", () => {
    cy.contains("Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("Navigates to pizza", () => {
    cy.get("a#order-pizza").click();
    cy.url().should("eq", "http://localhost:3000/pizza");
  });
});
describe("Form Functionality", () => {
  it("Types in name", () => {
    cy.get("input#name-input")
      .type("My name is Ethan")
      .should("have.value", "My name is Ethan");
  });
  it("Types in special", () => {
    cy.get("input#special-text")
      .type("Please wedge the pizza through my mail slot")
      .should("have.value", "Please wedge the pizza through my mail slot");
  });
  it("Checks that you can have multiple toppings", () => {
    cy.get("input[type=checkbox]")
      .each(elem => elem.click()); // for some reason this works without cy.wrap, and faster too!
    cy.get("input[type=checkbox]")
      .each(elem => cy.wrap(elem).should("be.checked"));
  });
  it("Selects a size", () => {
    cy.get("select#size-dropdown")
      .select("Small")
      .should("have.value", "small");
  });
  it("Checks that submit is still disabled", () => {
    cy.get("button#order-button")
      .should("be.disabled");
  });
  it("Chooses a sauce", () => {
    cy.get("input[type=radio]")
      .each(elem => {
        elem.click();
      });
    cy.get("input[value='spinach alfredo']")
      .should("be.checked");
  });
  it("Submits the order", () => {
    cy.get("button#order-button")
      .click(); // I don't know how to check that it submitted correctly without the stretch
  });
});
