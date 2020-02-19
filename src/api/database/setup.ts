var Datastore = require('nedb');
const passengersDatastore = new Datastore({ filename: './data/passengers.db', autoload: true });
passengersDatastore.ensureIndex({ fieldName: 'id', unique: true});

export default passengersDatastore;