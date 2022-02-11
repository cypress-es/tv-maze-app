describe('fixture and alias', () => {
  // let input;
  beforeEach(() => {
    // input = cy.get('[data-cy=search-form-input-text]')
    cy.visit('/');
    cy.get('[data-cy=search-form-input-text]').as('filterInput');
    cy.fixture('06-fixtures-alias/input-info').as('filterInfo');
  });

  it('usando fixtures', () => {
    cy.fixture('06-fixtures-alias/input-info')
      .then(data => {
        cy.log(data);
        console.log(data);
        cy.get('[data-cy=search-form-input-text]').type(data.filter);
      });
  });

  it('usando alias', function () {
    cy.get('@filterInput').type(this.filterInfo.filter);
    cy.get('@filterInfo')
      .then(filterInfo => {
        cy.get('@filterInput')
          .clear()
          .type(filterInfo.filter);
      });
  });
});
