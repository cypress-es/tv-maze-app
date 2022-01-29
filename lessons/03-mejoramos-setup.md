# mejoramos setup

Vamos a mejorar 2 cosas en este apartado. Como ejecutamos la app y el linter de CRA que nos da error en los tests de cypress.

Primero instalamos la siguiente dependencia:

```
npm install eslint-plugin-cypress --save-dev
```

Después añadimos en el package.json en la key "eslintConfig" las siguientes lineas:

```json
"overrides": [
  { 
    "extends": [
      "plugin:cypress/recommended"
    ],
    "files": [
      "cypress/**/*.js"
    ]
  }
]
```

Ya no nos aparecerá en el editor el error de linter.
