const Student = require('../app/student');
const assert = require('assert');

describe('Create test', () => {
	it('create a user in DB', () => {
		const sam = new Student({name: "Sam"});
		sam.save()
			.then( () => {
				assert(!sam.isNew);
			})
			.catch( (error) => {
				console.log(error);
			})
	});
});

