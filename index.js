import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import routes from './rest/routes';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

// Middlewares
app.use(bodyParser.json());

// Mount REST on /api
app.use('/api', routes);

// Mount GraphQL on /graphql
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers()
});
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
