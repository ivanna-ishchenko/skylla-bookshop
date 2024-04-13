describe("Book shop", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("Add books to the cart and verify if card is visible", () => {
    cy.get(".book-item").should("have.length.gt", 0);
    cy.get(".cart-item").should("not.exist");
    cy.get(".book-item:first-child button").click();
    cy.get(".cart-item").should("have.length", 1);
  });

  it("Remove a book from the cart", () => {
    cy.get(".book-item:first-child button").click();
    cy.get(".cart-item").should("have.length", 1);
    cy.get(".remove-btn").click();
    cy.get(".cart-item").should("not.exist");
  });

  it("Card is persisted", () => {
    cy.get(".book-item:first-child button").click();
    cy.get(".cart-item").should("have.length", 1);
    cy.reload();
    cy.get(".cart-item").should("have.length", 1);
  });
});
