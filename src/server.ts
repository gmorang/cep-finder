import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import schema from './schema';

const server = new ApolloServer({ playground: process.env.NODE_ENV === 'development', schema });

export default server;
