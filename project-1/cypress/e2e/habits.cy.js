/// <reference types="cypress" />


describe("Habit Dashboard", () => {
    beforeEach(() => {
        cy.visit("/habits")
    })

    it("Should display modal when add button is clicked", () => {
        cy.get("#habit-add-btn").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("Should display habit card when new habit is added", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink water")
        cy.contains("Save Changes").click()
        cy.contains("Drink water")
          .should("be.visible")
          .and("have.class", "HabitCard__habit-container")
    })

    it("Should toggle icon when habit card is clicked", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink water")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/check.fa7e5ead.svg']").should("be.visible")
    })

})