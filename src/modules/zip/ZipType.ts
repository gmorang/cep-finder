import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export default new GraphQLObjectType({
  name: 'ZipType',
  fields: {
    cep: {
      type: GraphQLNonNull(GraphQLString),
    },
    logradouro: {
      type: GraphQLNonNull(GraphQLString),
    },
    bairro: {
      type: GraphQLNonNull(GraphQLString),
    },
    localidade: {
      type: GraphQLNonNull(GraphQLString),
    },
    uf: {
      type: GraphQLNonNull(GraphQLString),
    },
    unidade: {
      type: GraphQLNonNull(GraphQLString),
    },
    ibge: {
      type: GraphQLNonNull(GraphQLString),
    },
    gia: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
