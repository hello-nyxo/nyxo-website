describe("app", () => {
  it("works", () => {
    cy.visit("/")
    cy.findByText(/contact/i).click()
  })
})
