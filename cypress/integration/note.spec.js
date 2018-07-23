describe('Testing budget tracker app with full-CRUD operations', () => {
  it('should run through an end-to-end crud operation on the app', () => {
    cy.visit('/');
    cy.get('a').contains('Dashboard').click();
    cy.url().should('include', '/dashboard');

    cy.get('input[data-cy=title]')
      .clear()
      .type('apples');
    
    cy.get('input[data-cy=price]')
      .clear()
      .type(10);
    
    cy.get('form[data-cy=expense-form]').submit();

    cy.get('button[data-cy=expense-item-btn]').contains('Update').click();

    cy.get('[data-cy=modal] input[data-cy=title]')
      .clear()
      .type('updated apples');

    cy.get('[data-cy=modal] input[data-cy=price]')
      .clear()
      .type('updated apples')
      .should('have.value', '');
    
    cy.get('[data-cy=modal] input[data-cy=price]')
      .clear()
      .type(20)
      .should('have.value', '20');

    cy.get('[data-cy=modal] form[data-cy=expense-form]').submit();

  });
});
