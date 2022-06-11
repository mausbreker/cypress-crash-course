/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("should showcase error if information is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("sgdsf")
        cy.get("[data-cy='accomplishment-input']").type("dfhsfgh")
        cy.get(".Accomplishment-btn").click()
        cy.get(".Accomplishment-error-container").should("be.visible")
    })

    it("should display'This Accomplisment was Successfully Submitted' if all information is input", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("sgdsf")
        cy.get("[data-cy='accomplishment-input']").type("dfhsfgh")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.get(".Accomplishment-btn").click()
        cy.get(".Accomplishment-img").should("be.visible")
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
        cy.get("button.Accomplishment-btn").should("be.visible")
    })

    it("should display empty input fields when clicking the 'Go Back' button", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("sgdsf")
        cy.get("[data-cy='accomplishment-input']").type("dfhsfgh")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.get(".Accomplishment-btn").click()
        cy.get("button.Accomplishment-btn").click()
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked")
    })
    
})