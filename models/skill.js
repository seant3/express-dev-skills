const skills = [
    {id: 910, skill: 'Webserver', level: 'adequate'},
    {id: 145, skill: 'CSS', level: 'Hire someone else'},
    {id: 204, skill: 'JS', level: 'Meh'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function update() {
    
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skill.level = 'TBD';
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}