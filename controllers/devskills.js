// require the devskill model
const devskill = require("../models/devskill");

function index(req, res) {
	res.render("devskills/index", {
		devskills: devskill.getAll(),
	});
}

function create(req, res) {
	console.log(req.body);
	req.body.done = false;
	devskill.create(req.body);
	res.redirect("/devskills");
}

function deleteDevskill(req, res) {
	devskill.deleteOne(req.params.id);
	res.redirect("/devskills");
}

function newSkill(req, res)	{
	res.render("devskills/new");
}

function show(req, res) {
	res.render("devskills/show", {
		devskill: devskill.getOne(req.params.id),
		devskillNum: parseInt(req.params.id) + 1,
	});
}

module.exports = {
	index,
	show,
	create,
	new: newSkill,
	delete: deleteDevskill,
};
