export const typeDefs = `type Discount {
  discountId: ID!
  discountType: String
  discountRate: Number
}

type Round {
  id: ID!
  date: Date!
  price: Number!
}

type Product {
  id: ID!
  title: String!
  location: String!
  discount: Discount
  roundList: [Round!]!
}

type Query {
  getHotProducts: [Product!]!
}

schema {
  query: Query
  mutation: Mutation
}
`;
