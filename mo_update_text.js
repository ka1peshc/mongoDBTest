const Student = require('../app/student');
const assert = require('assert');

describe("Update test", () => {
	let updater;

	beforeEach(done => {
		updater = new Student({name:"Updater"});
		updater.save().then( () => done())
	});

	it("set n save test", () => {
		updater.set("name","UpUpdater");
		updater.save.then( () => Student.find({}))
			.then(student => {
				assert(student[0].name !== "Updater");
			});
	});
});