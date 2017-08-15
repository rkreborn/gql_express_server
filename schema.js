import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers'

const typeDefs = `
type User {
	id: Int
	firstName: String
	lastName: String
	orders: [Order]
}
type Item {
	id: Int
	name: String
	price: Float
}
type Order {
	id: Int
	user: User
	items: [Item]
}
type Query {
	user(firstName: String): User
	item(name: String): Item
	order(id: Int): Order
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;