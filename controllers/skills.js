const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function update(req, res) {
    console.log('-------------------------')
    console.log(req.body, ' <--- req body')
    console.log('-------------------------')
    Skill.update(req.body);
    res.redirect(`/skills/${req.params.id}`)
}

function edit(req, res) {
    const skillEdit = Skill.getOne(req.params.id);
    res.render('skills/edit', {skill: skillEdit})
}

function index(req, res) {
    // console.log(req.test, '<Your req')
    const allSkills = Skill.getAll()
    res.render('skills/index', {
    skills: allSkills,
    time: req.time
    });
  }

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    // console.log('New skills will be here')
    res.render('skills/new');

}

function create(req,res) {
    // console.log(req.body);
    Skill.create(req.body);
    res.redirect('skills');
}

function deleteSkill(req, res) {
    // console.log("Delete stuff")
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}