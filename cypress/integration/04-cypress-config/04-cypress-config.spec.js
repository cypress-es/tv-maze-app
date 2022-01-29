describe('Improving cypress "hello world" test', () => {
  it('should render the homepage using config "baseUrl"', () => {
    cy.visit('/');
  });
});
