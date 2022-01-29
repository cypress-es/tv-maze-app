# cypress-hello-world

Borramos los ejemplos de `cypress/integration` y creamos un nuevo test (`hello-world.spec.js`).

```js
describe('First cypress commands', () => {
  it('should render the homepage', () => {
    cy.visit('http://localhost:3000');
  });
});
```

Recordemos que cypress usa [mocha](https://mochajs.org/) y por eso usamos las palabras reservadas `describe` e `it`.

Para este primer ejemplo usamos el comando [cy.visit](https://docs.cypress.io/api/commands/visit) el cual nos permite visitar un dominio.
