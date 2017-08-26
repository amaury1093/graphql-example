import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';

import routes from './app/routes';
const myGraphQLSchema = {}; // ... define or import your schema here!

const app = express();

// Middlewares
app.use(bodyParser.json());

// Mount REST on /api
app.use('/api', routes);

// Mount GraphQL on /graphql
app.use('/graphql', graphqlExpress({ schema: myGraphQLSchema }));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
