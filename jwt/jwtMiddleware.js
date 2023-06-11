const { verificarToken } = require('./jwtUtils');

function middlewarePermissao(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Token não fornecido');
    }

    const payload = verificarToken(token);

    if (!payload) {
        return res.status(401).send('Token inválido');
    }

    // Verificar as permissões do usuário
    if (payload.permissao !== 'admin') {
        return res.status(403).send('Acesso não autorizado');
    }

    // Permissões válidas, avançar para a próxima rota
    next();
}

module.exports = middlewarePermissao;
