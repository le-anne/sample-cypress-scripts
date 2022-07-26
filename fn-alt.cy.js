describe("Visit online store", () => {
  it("passes", () => {
    cy.visit("https://www.fashionnova.com/collections/dresses");
    cy.wait(5000);
    cy.get("img").each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
      cy.wait(5000);
    });
  });
});
