/// <reference types="cypress" />


describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with get", () => {
        // Get all elements by tag name
        cy.get("button");

        // Get all elements by class name
        cy.get(".btn-with-class");

        // Get all elements with specific class
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

        // Get all elements by id
        cy.get("#btn-with-id");

        // Get all elements by specific attribute
        cy.get("[type='submit']");

        // Get all elements by tag name and class
        cy.get("button.Elements-btn");

        // Get all elements by tag name and class and id
        cy.get("button.Elements-btn#btn-with-id");
    })

    it("locating elements with contains", () => {
        // Get element by text
        cy.contains("Unique Text");

        // Get element with selector
        cy.contains("[type='submit']", "Not Unique Text");

        // Get element
        cy.get("[type='submit']").contains("Not Unique Text");
    })

    it("locating elements with find", () => {
        cy.get("#form-1").find(".btn-1");
    })
})