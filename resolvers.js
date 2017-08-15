const resolvers = {
	Query: {
		user(root, args){
			return { id: 1, firstName: 'Hello', lastName: 'World' };
		},
	},
	User: {
		orders(user){
			return [
        		{ id: 1, title: 'A post', text: 'Some text', views: 2},
        		{ id: 2, title: 'Another post', text: 'Some other text', views: 200}
			];
		},
	},
	Order: {
		user(order){
			return { id: 1, firstName: 'Hello', lastName: 'World' };
		},
	},
};

export default resolvers;