# network requests

En mi opinión, una de las partes más importantes a conocer de cypress. Vamos a aprender a usar `cy.intercept` (antiguamente `cy.route`) para poder capturar las request que se hacen en nuestra aplicación.

Esto es muy útil ya que nos permite tener mayor control de lo que pasa en nuestra app, evitar errores flaky en nuestros tests y poder simular estados de nuestra aplicación.

## Interceptando API

Podemos únicamente interceptar una request. Esto nos vale para poder controlar cuando un API termina de responder.

```js
cy.intercept({
  url: 'https://api.tvmaze.com/shows',
  method: 'GET',
}).as('showsList');
cy.visit('/');
cy.wait('@showsList');
cy.get('[data-cy=list-item]').should('have.length', 240);
```

## Stub a response

Podemos modificar la respuesta y por lo tanto evitar llamar a la API. Esto puede valernos para evitar gastar la cuota de un API externa o para tener mayor control de lo que vamos a recibir en el frontend.

```js
cy.intercept({
  url: 'https://api.tvmaze.com/shows',
  method: 'GET',
}, []).as('showsList');
cy.visit('/');
cy.wait('@showsList');
cy.get('[data-cy=homepage-no-results]')
  .should('exist')
  .should('be.visible');
```

## stub statusCode

También podemos cambiar el status de la respuesta para simular errores que el API no nos puede dar en un entorno de dev.

```js
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
```
