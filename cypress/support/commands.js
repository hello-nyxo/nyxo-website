import "@testing-library/cypress"

// got the error: `cy.visit(...).getByText is not a function`
// this is the solution: `import "@testing-library/cypress/add-commands"`
import "@testing-library/cypress/add-commands"
