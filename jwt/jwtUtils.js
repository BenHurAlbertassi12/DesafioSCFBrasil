const jwt = require('jsonwebtoken');

const secretKey = 'sua_chave_secreta_aqui';

function gerarToken(usuario) {
    const payload = {
        id: usuario.id,
        nome: usuario.nome,
        permissao: usuario.permissao
    };

    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verificarToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null; // Token inválido
    }
}

module.exports = {
    gerarToken,
    verificarToken
};
