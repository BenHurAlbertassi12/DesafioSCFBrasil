const addUser = require('./teste2');
const data = require('./fakeData');

describe('addUser', () => {
    beforeEach(() => {
        // Limpar a lista de dados antes de cada teste
        data.length = 0;
    });

    it('deve adicionar um novo usuário à lista de dados e enviar o novo usuário como resposta', () => {
        const req = {
            body: {
                name: 'Novo Usuário',
                job: 'Desenvolvedor',
            },
        };
        const res = {
            send: jest.fn(),
        };

        addUser(req, res);

        expect(data).toContainEqual(req.body);
        expect(res.send).toHaveBeenCalledWith(req.body);
    });

    it('deve enviar uma resposta de "Usuário já cadastrado" se o usuário já existir', () => {
        const existingUser = {
            name: 'Usuário Existente',
            job: 'Analista',
        };
        const req = {
            body: existingUser,
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        // Adiciona o usuário existente à lista de dados antes do teste
        data.push(existingUser);

        addUser(req, res);

        expect(data).toContainEqual(existingUser);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith('Usuário já cadastrado.');
    });
});
