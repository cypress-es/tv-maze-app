describe('"cy.intercept" lesson', () => {
  it('Interceptando request', () => {
    // cy.intercept('https://api.tvmaze.com')
    // cy.intercept('GET', 'https://api.tvmaze.com')
    cy.intercept({
      url: 'https://api.tvmaze.com/shows',
      method: 'GET',
    }).as('showsList');
    cy.visit('/');
    cy.wait('@showsList');
    cy.get('[data-cy=list-item]').should('have.length', 240);
  });

  it('stub route', () => {
    cy.intercept({
      url: 'https://api.tvmaze.com/shows',
      method: 'GET',
    }, []).as('showsList');
    cy.visit('/');
    cy.wait('@showsList');
    cy.get('[data-cy=homepage-no-results]')
      .should('exist')
      .should('be.visible');
  });

  it('stub route con fixture', () => {
    cy.intercept({
      url: 'https://api.tvmaze.com/shows',
      method: 'GET',
    }, {
      fixture: '07-network-requests/empty-list.json',
    }).as('showsList');
    cy.visit('/');
    cy.wait('@showsList');
    cy.get('[data-cy=homepage-no-results]')
      .should('exist')
      .should('be.visible');
  });

  it('stub with error status', () => {
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
});
