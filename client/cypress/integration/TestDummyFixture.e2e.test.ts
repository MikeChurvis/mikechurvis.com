import { describe, it, beforeEach, cy, expect } from "local-cypress"

describe("The test fixture page for the Test Dummy component", () => {
  beforeEach(() => {
    cy.visit('/test-fixtures/test-dummy')
  })

  it("Has an interactive TestDummy component", () => {
    cy.get('h1').contains('Count = 0')
    cy.get('button').contains('Add').click()
    cy.get('h1').contains('Count = 1')
  })
})