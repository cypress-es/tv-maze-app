# Cypress config

En esta sección veremos donde cypress gestiona su [configuración](https://docs.cypress.io/guides/references/configuration#cypress-json).

Esto todo sucede en el archivo `cypress.json` al ejecutar por primera vez `cypress open`.

Este archivo tiene muchas propiedades que están documentadas en la doc [oficial de cypress](https://docs.cypress.io/guides/references/configuration#Options)

Nosotros solo mostraremos algunas. Recordar que al ejecutar la app de cypress en la pestaña de settings se pueden ver todas las opciones y hay un link a la documentación.

### baseUrl

Importante ponerlo al principio para evitar repetir el dominio en todos los `cy.visit` de neustros tests.

```json
"baseUrl": "http://localhost:3000"
```

### viewportWidth & viewportHeight

Vamos a configurar por defecto nuestra app para que se vea como un móvil.

```json
"viewportWidth": 375,
"viewportHeight": 812
```
