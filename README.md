# graphql-example
GraphQL Example project for Toptal blog article: https://www.toptal.com/api-development/graphql-vs-rest-tutorial#utilize-unreal-developers-today

Getting Started
---

```sh
git clone https://github.com/amaurymartiny/graphql-example
cd graphql-example
npm install
npm run dev
```

You should be able to see the app running at http://localhost:3000.

Information
---

- The `models` folder contains the three models: User, Project and Task. They are created using the `sequelize` ORM.
- The `rest` folder contains the logic to create the associated `/api/users`, `/api/projects` and `/api/tasks` endpoints.
- The `graphql` folder contains the schema and resolvers for GraphQL.
- `db.sqlite` contains the database.
- `index.js` starts the Express server.

Demo
---

This example project is hosted on Heroku.

- The rest endpoints can be viewed here
  - http://graphql-example.herokuapp.com/api/users
  - http://graphql-example.herokuapp.com/api/projects
  - http://graphql-example.herokuapp.com/api/tasks
- The GraphQL endpoint is http://graphql-example.herokuapp.com/graphql, and a GraphiQL interface is mounted [here]( http://graphql-example.herokuapp.com/graphiql).
