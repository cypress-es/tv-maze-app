describe('Admin', () => {
  it('no mostrar comentarios', () => {
    cy.intercept({
      url: '/comments',
      method: 'GET',
    }, []).as('commentList');
    cy.visit('/admin');
    cy.wait('@commentList');
    cy.get('[data-cy=no-comments-message]').should('contain', 'No comments');
  });

  it('renderizar y borrar comentarios', () => {
    cy.intercept({
      url: '/comments',
      method: 'GET',
    }, {
      fixture: 'app-tests/comment-after-post.json',
    }).as('commentList');
    cy.visit('/admin');
    cy.wait('@commentList');
    cy.intercept({
      url: '/comments/1',
      method: 'DELETE',
    }, {
      statusCode: 200,
    }).as('removeComment');
    cy.get('[data-cy=admin-delete-comment]').click();
    cy.wait('@removeComment');
    cy.get('[data-cy=no-comments-message]').should('contain', 'No comments');
  });
});
