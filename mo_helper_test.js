const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true});

before( done => {
//on and once are listners to the event.
mongoose.connection
	.once('open', () => {
		//console.log('Connected.')
		done();
	})
	.on('error', () => {
		console.log('Error is ;',error);
	});	
});

beforeEach( done => {
	console.log('drop successful')
	mongoose.connection.collections.students.drop( () => {
		done();
	});
});
