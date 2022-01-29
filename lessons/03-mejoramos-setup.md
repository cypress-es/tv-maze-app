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

Ahora vamos a integrar tanto los tests como la ejecución de la app (start and server) en un mismo comando `start:tests`. Para ello tenemos que instalar esta [dependencia](https://www.npmjs.com/package/start-server-and-test) como dependencia de desarrollo.


```
npm i start-server-and-test --save-dev
```

Luego solo tenemos que añadir este script:

```json
"start:tests": "cross-env start-server-and-test start http://localhost:3000 server http://localhost:4000 cy:open",
```

*nota*: A mi me gusta añadir la variable de entorno `BROWSER=none` en la ejecución de la app para no tener no abra el browser siempre que ejecuto el comando. El browser lo abriremos con cypress.

El comando de star, quedaría de la siguiente manera.

```json
"start": "cross-env BROWSER=none react-scripts start",
```
