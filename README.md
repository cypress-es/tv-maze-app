# TV-maze cypress course

This is a project for cypress' [Keepcodings](https://keepcoding.io/) course. Here you can find all the lessons of the course separated by tag.

## How to run the app

This application was created with [CRA](https://reactjs.org/docs/create-a-new-react-app.html) and [json-server](https://github.com/typicode/json-server). It is a basic tv show list app where you can find tv shows and add some comments. We are using [TV-maze API](https://www.tvmaze.com/api) content, and json-server as a local server to store comments, and delete them.

### `npm run setup`

This script will create the `db.json` script for the `json-server` script.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

This command will run a server in the port 4000 with these endpoints:

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
