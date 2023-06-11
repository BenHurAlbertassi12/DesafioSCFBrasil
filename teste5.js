const data = require("./fakeData");

module.exports = function (req, res) {
    const name = req.query.name;
    let count = 0;

    for (let i = 0; i < data.length; i += 1) {
        if (data[i].name === name) {
            count += 1;
        }
    }

    res.send("Usuário " + name + " foi lido " + count + " vezes no teste1.");
};
