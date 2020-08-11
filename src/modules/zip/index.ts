import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';

import ZipType from './ZipType';
import { getZip } from './ZipResolver';

export const queries = {
  zip: {
    type: GraphQLList(ZipType),
    resolve: getZip,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'ZipInput',
          fields: {
            zip: {
              type: GraphQLString,
            }
          },
        }),
      },
    },
  },
};
