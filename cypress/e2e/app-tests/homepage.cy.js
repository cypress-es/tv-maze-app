describe('Homepage tests', () => {
  it('should render error statuses', () => {
    cy.intercept({
      url: 'https://api.tvmaze.com/shows',
      method: 'GET',
    }, []).as('showsList');
    cy.visit('/');
    cy.wait('@showsList');
    cy.get('[data-cy=homepage-no-results]')
      .should('exist')
      .should('be.visible');

    cy.intercept({
      url: 'https://api.tvmaze.com/shows',
      method: 'GET',
    },
    {
      statusCode: 500,
    }).as('showsList');
    cy.visit('/');
    cy.wait('@showsList');
    cy.get('[data-cy=homepage-error]')
      .should('exist')
      .should('be.visible');
  });

  describe('Homepage success tests', () => {
    beforeEach(() => {
      cy.intercept({
        url: 'https://api.tvmaze.com/shows',
        method: 'GET',
      }, {
        fixture: 'app-tests/full-show-list.json',
      }).as('showsList');
      cy.visit('/');
      cy.wait('@showsList');
    });

    it('should render homepage with text filters', () => {
      cy.get('[data-cy=list-item]').should('have.length', 239);
      cy.get('[data-cy=list-item]').eq(0).contains('Under the Dome');
  
  
      cy.intercept({
        url: 'https://api.tvmaze.com/search/shows?q=Bitten',
        method: 'GET',
      }, {
        fixture: 'app-tests/show-list-with-filter.json',
      }).as('showsListFiltered');
      cy.get('[data-cy=search-form-input-text]').type('Bitten{enter}');
      cy.wait('@showsListFiltered');
      cy.get('[data-cy=list-item]').should('have.length', 10);
      cy.get('[data-cy=list-item]').eq(0).contains('Bitten');
    });
  
    it('should render homepage with select filters', () => {
      cy.get('[data-cy=search-form-filter-button]').click();
      cy.get('.type-select__control').click();
      cy.get('.type-select__option').eq(2).click();
      cy.get('.status-select__control').click();
      cy.get('.status-select__option').eq(1).click();
      cy.get('[data-cy=search-form-submit-button]').click();
      cy.get('[data-cy=list-item]').should('have.length', 6);
      cy.get('[data-cy=list-item]').first().contains('The Simpsons');

      cy.get('[data-cy=search-form-filter-button]').click();
      cy.wait('@showsList');
      cy.get('[data-cy=list-item]').should('have.length', 239);
    });
  });
});
