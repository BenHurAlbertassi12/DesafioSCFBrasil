const { getUser, getUsers } = require('../teste1');
const data = require('../fakeData');

describe('getUser', () => {
    it('deve retornar o usuário com o nome fornecido', () => {
        const req = {
            query: {
                name: 'João Oliveira',
            },
        };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        const next = jest.fn();

        getUser(req, res, next);

        expect(res.send).toHaveBeenCalledWith(data[0]);
        expect(res.status).not.toHaveBeenCalled();
    });

    it('deve enviar uma resposta de usuário não encontrado se o usuário não for encontrado', () => {
        const req = {
            query: {
                name: 'NomeInvalido',
            },
        };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        const next = jest.fn();

        getUser(req, res, next);

        expect(res.send).toHaveBeenCalledWith('Usuário não encontrado');
        expect(res.status).toHaveBeenCalledWith(404);
    });
});

describe('getUsers', () => {
    it('deve enviar todos os usuários', () => {
        const req = {};
        const res = {
            send: jest.fn(),
        };
        const next = jest.fn();

        getUsers(req, res, next);

        expect(res.send).toHaveBeenCalledWith(data);
    });
});
