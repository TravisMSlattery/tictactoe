describe("Test if the Text exist on HomePage", () => {
  it("test", () => {

    cy.visit("/");
    cy.get(".unittest").contains('Passed!');
    
  });
});