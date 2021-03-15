module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
};
const devskills = [
	{ text: "HTML", done: true },
	{ text: "CSS", done: true },
	{ text: "SASS", done: true },
	{ text: "JavaScript", done: true },
	{ text: "jQuery", done: true },
	{ text: "Responsive Design", done: true },
	{ text: "Browser Developer Tools", done: true },
	{ text: "Command Line", done: true },
];
function getAll(id) {
	return devskills;
}

function create(devskill) {
	devskills.push(devskill);
}

function getOne(id) {
	return devskills[id];
}

function deleteOne(id){
	devskills.splice(id, 1);
}
