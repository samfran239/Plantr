const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('Gardener', {
	name: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	}
});

const Plot = db.define('Plot', {
	size: {
		type: Sequelize.INTEGER
	},
	shaded: {
		type: Sequelize.BOOLEAN
	}
});

const Vegetable = db.define('Vegetable', {
	name: {
		type: Sequelize.STRING
	},
	color: {
		type: Sequelize.STRING
	},
	planted_on: {
		type: Sequelize.DATE
	}
});

Plot.belongsTo(Gardener, { as: 'gardener' });
//Gardener.hasOne(Plot) already has relationship to gardener

Vegetable.belongsToMany(Plot, { through: 'veggie_plot' });
Plot.belongsToMany(Vegetable, { through: 'veggie_plot' });

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });

module.exports = { db, Vegetable, Plot, Gardener };
