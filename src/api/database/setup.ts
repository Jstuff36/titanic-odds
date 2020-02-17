var Datastore = require('nedb');
const passengersDatastore = new Datastore({ filename: './data/passengers.db', autoload: true });

export default passengersDatastore;