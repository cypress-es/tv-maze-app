# comandos básicos

En esta sección vamos a ver algunos de los comandos básicos que nos da cypress para interactuar con nuestra app y para empezar a escribir nuestros tests.

## Selectores

Una parte muy importante para poder escribir nuestros test es poder interactuar con los elementos de la aplicación. Para ello usaremos los [selectores de cypress](https://docs.cypress.io/api/commands/get) (`cy.get`).

*Nota* es importante usar como buena práctica atributos `data-*`. [Link](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)

## aserciones

Cypress ofrece varias posibilidades de [aserciones](https://docs.cypress.io/guides/references/assertions#Common-Assertions). BDD, TDD, chai-jquery, sinon-chai y luego las comunes que son las que usaremos en el curso.

```js
cy.get('[data-cy=navbar]').should('exist');
cy.get('[data-cy=navbar-logo]').should('exist');
cy.get('[data-cy=navbar-title]').should('contain', 'TV Maze');;
cy.get('[data-cy=list-item]').should('have.length', 240);
```

## eventos

Cypress nos permite forzar eventos como el click, o el type.

Para el comando `cy.type` tenemos muchos caracteres especiales que podemos consultar en su [documentación oficial](https://docs.cypress.io/api/commands/type#Arguments).

```js
cy.get('[data-cy=search-form-input-text]').type('Orphan');
cy.get('[data-cy=search-form-input-text]').clear();
cy.get('[data-cy=search-form-input-text]').type('Orphan blacc{backspace}k{selectall}{backspace}Bitten', {
  delay: 200
});
```

Para el comando `cy.click` es importante recordar que tenemos que seleccionar un elemento antes con `cy.get`.

El código añadido a este bloque sería el siguiente:

```js
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
```