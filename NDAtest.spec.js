describe("Test 1", () => {
  it("Tests the functionality a simple NDA agreement.", () => {
    cy.visit(" ");
    cy.get(".icon > .fa-check").click();
    cy.get(".button:nth-child(2)").click();
    cy.get(".is-success > span > span").click();

    cy.get(".itemField:nth-child(2) .input").click();
    cy.get(".itemField:nth-child(2) .input").type("Leanne");
    cy.get(".itemField:nth-child(3) .input").type("Test");
    cy.get("#email-area .input").click();
    cy.get(".itemField:nth-child(4) .input").type("leanne@leanne.studio");
    cy.get(".fa-text").click();
    cy.wait(500);
    cy.get(".vue-signature-pad--body--canvas").click({ force: true });
    cy.get("#typingSignature").type("Testing");
    cy.get(".is-primary > span > span").click();
    cy.wait(10000);
    cy.get("#title").contains("Completed!").should("be.visible");
  });
});
