var data = require("./fakeData");

module.exports = function (req, res) {
    var id = req.query.id;

    const user = data.find((d) => d.id === parseInt(id));

    if (user) {
        user.name = req.body.name;
        user.job = req.body.job;

        res.send(user);
    } else {
        res.status(404).send("Usuário não encontrado");
    }
};
