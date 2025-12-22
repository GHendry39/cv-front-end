/// <reference types="Cypress" />
describe("CV Visitor Count", () => {
  it("checks visitor_count update", () => {
    // Visit the site to get the initial value of visitor count
    cy.visit("/site/");
    // Wait for back end call to complete
    cy.wait(1000);
    // Get the initial value of visitor count
    cy.get("#counter").then(($counter) => {
      const current_visitor_count = parseInt($counter.text());
      //Re-visit the site to update visitor count
      cy.visit("/site/");
      cy.wait(1000);
      cy.get("#counter").then((new_counter) => {
        const new_visitor_count = parseInt(new_counter.text());
        //Confirm that visitor count has been incremented
        expect(new_visitor_count).to.eq(current_visitor_count + 1);
      });
    });
  });
});
