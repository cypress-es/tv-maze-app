describe('detail page', () => {
  it('navigate and render detail page', () => {
    cy.intercept({
      url: 'https://api.tvmaze.com/shows',
      method: 'GET',
    }, {
      fixture: 'app-tests/full-show-list.json',
    }).as('showsList');
    cy.visit('/');
    cy.intercept({
      url: 'https://api.tvmaze.com/shows/4',
      method: 'GET',
    }, {
      fixture: 'app-tests/show-detail.json',
    }).as('showDetail');
    cy.intercept({
      url: '/shows/4/comments',
      method: 'GET',
    }, []).as('commentList');
    cy.get('[data-cy=list-item]').eq(3).click();
    cy.wait(['@showDetail', '@commentList'])
      .then(([{ response }]) => {
        console.log(response);
        cy.get('[data-cy=show-title]')
          .should('be.visible')
          .should('contain', response.body.name);
        cy.get('[data-cy=show-score]')
          .should('be.visible')
          .should('contain', response.body.rating.average);
        cy.get('[data-cy=show-summary]').should('be.visible');
      });
  });

  describe('comments feature', () => {
    beforeEach(() => {
      cy.intercept({
        url: 'https://api.tvmaze.com/shows/4',
        method: 'GET',
      }, {
        fixture: 'app-tests/show-detail.json',
      }).as('showDetail');
      cy.intercept({
        url: '/shows/4/comments',
        method: 'GET',
      }, []).as('commentList');
      cy.visit('/shows/4');
      cy.wait(['@showDetail', '@commentList']);
    });

    it('should create one comment', () => {
      cy.get('[data-cy=comment-form-author]').type('Author name');
      cy.get('[data-cy=comment-form-text').type('Lorem ipsum dolor sit amet');
      cy.intercept({
        url: '/shows/4/comments',
        method: 'GET',
      }, {
        fixture: 'app-tests/comment-after-post.json',
      }).as('commentListAfterPost');
      cy.intercept({
        url: '/shows/4/comments',
        method: 'POST',
      }).as('createComment');
      cy.get('[data-cy=comment-form-submit-button]').click();
      cy.get('@createComment')
        .its('request.body')
        .should(
          'keys',
          ['author', 'text', 'showId', 'date'],
        )
        .then(body => {
          expect(body.author).eql('Author name');
          expect(body.text).eql('Lorem ipsum dolor sit amet');
          expect(body.showId).eql(4);
        });
      cy.wait('@commentListAfterPost');

      cy.reload();
      cy.get('[data-cy=comment-form-author]').should('have.value', 'Author name');
    });

    it('should render comment error message', () => {
      cy.get('[data-cy=comment-form-author]').type('Author name');
      cy.get('[data-cy=comment-form-text').type('Lorem ipsum dolor sit amet');
      cy.intercept({
        url: '/shows/4/comments',
        method: 'POST',
      }, {
        statusCode: 500,
      }).as('createCommentError');
      cy.get('[data-cy=comment-form-submit-button]').click();
      cy.wait('@createCommentError');
      cy.get('[data-cy=comment-error-message]').should('be.visible');
    });
  });
});
