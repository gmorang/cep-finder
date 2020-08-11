import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import rootQuery from './modules/rootQuery';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...rootQuery,
    },
  }),
});
