const low = require('lowdb');
// instantiate db
const db = low('./db.json');

// default
db.defaults({ places: [], users[], locations[]}).write();

const Places = {};

/*
	@func getItems
	@desc gets all todos
*/
Places.getItems = () => {
	return db.get('places').value();
}

/*
	@func createItem
	@desc creates a new todo
*/

Places.createItem = (itemToCreate) => {
	db.get('places').push({
		id: Date.now(),
		data: itemToCreate,
	}).write();
}


module.exports = placesManager
