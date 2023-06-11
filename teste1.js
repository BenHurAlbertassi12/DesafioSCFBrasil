const data = require("./fakeData");

const getUser = (req, res, next) => {
    const name = req.query.name;

    for (let i = 0; i < data.length; i += 1) {
        if (data[i].name === name) {
            res.send(data[i]);
            return; // Terminar a execução do loop após encontrar o usuário
        }
    }

    // Se nenhum usuário for encontrado, envia uma resposta de usuário não encontrado
    res.status(404).send("Usuário não encontrado");
};

const getUsers = (req, res, next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};
