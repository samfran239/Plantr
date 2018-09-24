const { db, Vegetable, Plot, Gardener } = require('./models');
const defaultDate = Date.now();

const ourVeggies = [
	{
		name: 'Carrot',
		color: 'Orange',
		planted_on: defaultDate
	},
	{
		name: 'Cucumber',
		color: 'Green',
		planted_on: defaultDate
	},
	{
		name: 'Tomato',
		color: 'Red',
		planted_on: defaultDate
	}
];
db
	.sync({ force: true })
	.then(() => {
		return Promise.all(ourVeggies);
	})
	.then((veggies) => {
		veggies.forEach((veg) => {
			Vegetable.create(veg);
		});
	})
	.then(() => {
		console.log('All Synced Up!');
		//db.close();
	})
	.catch((err) => {
		console.log(err);
		db.close();
	});
