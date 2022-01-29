describe('basic commands examples', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('selectors', () => {
    // cy.get('Navbar_container__0ThlM');

    // si el selector no existe cypress lo busca durante 4s
    // cy.get('not_found_selector');

    // selector
    cy.get('[data-cy=navbar]');
    cy.get('[data-cy=navbar-logo]');
    cy.get('[data-cy=navbar-title]');
    cy.get('[data-cy=list-item]');
  });

  it('aserciones', () => {
    cy.get('[data-cy=navbar]').should('exist');
    cy.get('[data-cy=navbar-logo]').should('exist');
    cy.get('[data-cy=navbar-title]').should('contain', 'TV Maze');
    cy.get('[data-cy=list-item]').should('have.length', 240);
  });

  it('eventos click y type', () => {
    // bad practice
    // cy.get('#searchShow');
    cy.get('[data-cy=search-form-input-text]').type('Orphan');
    cy.get('[data-cy=search-form-input-text]').clear();
    cy.get('[data-cy=search-form-filter-button]').click();
    cy.get('[data-cy=search-form-input-text]').type('Orphan blacc{backspace}k{selectall}{backspace}Bitten', {
      delay: 200
    });
    // No en todos los casos podemos usar "data-cy"
    cy.get('.status-select__control').should('be.visible');
    cy.get('.type-select__control').should('be.visible');
    cy.get('[data-cy=search-form-submit-button]').click();
    cy.get('[data-cy=list-item]').should('have.length', 10);
  });
});
