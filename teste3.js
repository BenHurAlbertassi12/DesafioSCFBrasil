const data = require("./fakeData");

module.exports = function (req, res) {
    const name = req.query.name;

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            data.splice(i, 1); // Remove o usuário da lista
            break; // Encerra o loop após encontrar o usuário
        }
    }

    res.send("success");
};
