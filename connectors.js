import Sequelize from 'sequelize';

let DB = './data/sqlDB';

// DB connection
const sequelize = new Sequelize(null, null, null, {
	dialect: 'sqlite',
	storage: DB,
});

// Checks if DB is up
sequelize
	.authenticate()
	.then(() => console.log(`Connected to ${DB}`))
	.catch((error) => console.error(`Could not connect to ${DB}: `, error));

// Models
const User = sequelize.define('user', {
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true,
		},
	},
})

const Item = sequelize.define('item', {
	name: Sequelize.STRING,
	price: Sequelize.FLOAT(5,2)
})

const Order = sequelize.define('order', {
	date: Sequelize.DATE
})

// Adds relations between models

User.hasMany(Order)
Order.belongsTo(User)
Order.belongsToMany(Item, {through: 'orderItems'})

// Uncomment to initialize the DB
//sequelize.sync({force: true}).then(() => console.log('DB synced'));

/*
User.create({
	firstName: 'adam',
	lastName: 'Wattis',
	email: 'adam@gmail.com'
});
Order.create({
	date: "2016-01-01 00:00:00+00:00"
});
*/
// Uncomment to create some dummy data

/*
User.create({
	firstName: 'John',
	lastName: 'Doe',
	email: 'jdoe@gmail.com'
});
Item.create({
	name: 'Noodles with crap',
	price: 8.99
});
*/
const items = ["Spaghetti", "Hamburger", "Coffee"];

(items) => console.log(item);

// Uncomment for test query
User.findById(1).then((user) => {
	console.log(user)
	return user.addOrder(1);
});
//Order.findById(1).then(order => console.log(order));

