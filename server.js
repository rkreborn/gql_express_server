import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

import schema from './schema';

const app = express();
const PORT = 9000;

//app.use('/', (req, res) => res.send("Hello worldddd"));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => console.log(`Server listeining on ${PORT}.`));
