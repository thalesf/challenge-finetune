import faker from 'faker';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render with initial state', () => {
    cy.getByTestId('add-new-button').should('be.visible');
    cy.contains('Name').should('be.visible')
    cy.contains('Amount').should('be.visible')
    cy.contains('Type').should('be.visible')
    cy.contains('Choose a date').should('be.visible')
  })

  it('should fail and show errors when submit an empty form', () => {
    cy.getByTestId('add-new-button').click();
    cy.getByTestId('register-button').click();
    cy.contains(/Name is required/i).should('be.visible').should('have.length',1)
    cy.contains(/Amount is required/i).should('be.visible').should('have.length', 1)
    cy.contains(/Item type/i).should('be.visible').should('have.length',1)
  });

  it.only('should show an error when amount provided is smaller than 1', () => {
    cy.getByTestId('add-new-button').click();
    cy.getByTestId('register-button').click();
    cy.getByTestId('name').type(faker.commerce.product());
    cy.getByTestId('amount').type('0');
    cy.getByTestId('type').click();
    cy.getByTestId('type-protein').click();
    cy.getByTestId('register-button').click();
    cy.contains(/Amount should be higher than 0/i).should('be.visible').should('have.length',1)
  });

  it('should create a new protein item', () => {
    cy.getByTestId('add-new-button').click();
    cy.getByTestId('name').type(faker.commerce.product());
    cy.getByTestId('amount').type('100');
    cy.getByTestId('type').click();
    cy.getByTestId('type-protein').click();
    cy.getByTestId('register-button').click();
    cy.getByTestId('close-icon').click();
    cy.getByTestId('table-body-register').find('tr').should('have.length', 1)
  })

  it('should create a new fat item', () => {
    cy.getByTestId('add-new-button').click();
    cy.getByTestId('name').type(faker.commerce.product());
    cy.getByTestId('amount').type('200');
    cy.getByTestId('type').click();
    cy.getByTestId('type-fat').click();
    cy.getByTestId('register-button').click();
    cy.getByTestId('close-icon').click();
    cy.getByTestId('table-body-register').find('tr').should('have.length', 1)
  })

  it('should create a new carbohydrate item', () => {
    cy.getByTestId('add-new-button').click();
    cy.getByTestId('name').type(faker.commerce.product());
    cy.getByTestId('amount').type('200');
    cy.getByTestId('type').click();
    cy.getByTestId('type-carbohydrate').click();
    cy.getByTestId('register-button').click();
    cy.getByTestId('close-icon').click();
    cy.getByTestId('table-body-register').find('tr').should('have.length', 1)
  })
});