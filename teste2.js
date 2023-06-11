const data = require("./fakeData");

module.exports = function (req, res) {
    const name = req.body.name;
    const job = req.body.job;

    const existingUser = data.find((user) => user.name === name);

    if (existingUser) {
        return res.status(400).send("Usuário já cadastrado.");
    }

    const newUser = {
        name: name,
        job: job,
    };

    data.push(newUser);

    res.send(newUser);
};
