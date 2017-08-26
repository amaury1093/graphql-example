import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
 
const myGraphQLSchema = {};// ... define or import your schema here! 
const PORT = 3000;
 
const app = express();
 
// BodyParser is needed just for POST. 
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
 
app.listen(PORT, () => console.log(`App listening on localhost:${PORT}`));
