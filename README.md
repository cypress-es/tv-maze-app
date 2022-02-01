# TV-maze cypress course

Este es un proyecto de cypress para el curso de [Keepcodings](https://keepcoding.io/). A continuación está el índice con los contenidos de los diferentes módulos.

## lessons

- [02-cypress-hello-world](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/02-cypress-hello-world.md)
- [03-mejoramos-setup](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/03-mejoramos-setup.md)
- [04-cypress-config](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/04-cypress-config.md)
- [05-comandos-basicos](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/05-comandos-basicos.md)
- [06-fixtures-alias](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/06-fixtures-alias.md)
- [07-network-requests](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/07-network-requests.md)
- [09-commands](https://github.com/cypress-es/tv-maze-app/blob/main/lessons/09-commands.md)

---

## How to run the app

La aplicación está creada con [CRA](https://reactjs.org/docs/create-a-new-react-app.html) y [json-server](https://github.com/typicode/json-server). Consiste en una app de shows de televisión en la que se puede filtrar y añadir comentarios. Estamos usando [TV-maze API]() para los datos y json-server como servidor local para la gestión de comentarios.

### `npm run setup`

Este script crea el archivo `db.json` para el `json-server` script.

### `npm start`

Ejecuta la app en modo development.\
Abrir [http://localhost:3000](http://localhost:3000) para ver la app en el navegador.

La página se recargará con cada cambio.\

### `npm run server`

Este comando ejecutará el servidor en el puerto 4000 con estos endpoints:

```
# retrieve all comments
GET /comments
# delete one comment
DELETE /comments/:id
# retrieve one show comment
GET /shows/:id/comments
# create comment
POST /comments
```

---

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more about [cypress](https://www.cypress.io/) in the official docs page. I would recommend the [best practices website](https://docs.cypress.io/guides/references/best-practices) to improve your cypress code.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
