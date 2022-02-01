# commands

Cypress te permite cambiar sus propios comandos y crear los tuyos propios. Esto es muy útil para no repetir código o hacer simple alguna funcionalidad.

```js
Cypress.Commands.add(name, callbackFn)
Cypress.Commands.add(name, options, callbackFn)
Cypress.Commands.overwrite(name, callbackFn)
```

## Ejemplos

```js
Cypress.Commands.add('completeCommentForm', (author, message) => {
  cy.get('[data-cy=comment-form-author]').type(author);
  cy.get('[data-cy=comment-form-text').type(message);
});

Cypress.Commands.add('setLocalStorage', (key, value) => {
  cy.get('html').then(() => {
    window.localStorage.setItem(key, value);
  });
});
```
