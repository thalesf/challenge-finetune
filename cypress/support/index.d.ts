declare namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line no-unused-vars
      getByTestId: (id:string) =>Chainable<Element>
    }
  }
  