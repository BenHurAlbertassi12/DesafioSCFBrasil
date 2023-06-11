const deleteUser = require('./teste3');
const data = require('./fakeData');

describe('deleteUser', () => {
    beforeEach(() => {
        // Limpar a lista de dados antes de cada teste
        data.length = 0;
        data.push({ name: 'Usuário 1' });
        data.push({ name: 'Usuário 2' });
        data.push({ name: 'Usuário 3' });
    });

    it('deve remover o usuário correspondente e enviar "success" como resposta', () => {
        const req = {
            query: {
                name: 'Usuário 2',
            },
        };
        const res = {
            send: jest.fn(),
        };

        deleteUser(req, res);

        expect(data).toEqual([
            { name: 'Usuário 1' },
            null,
            { name: 'Usuário 3' },
        ]);
        expect(res.send).toHaveBeenCalledWith('success');
    });

    it('deve enviar "success" como resposta mesmo se o usuário não for encontrado', () => {
        const req = {
            query: {
                name: 'Usuário 4',
            },
        };
        const res = {
            send: jest.fn(),
        };

        deleteUser(req, res);

        expect(data).toEqual([
            { name: 'Usuário 1' },
            { name: 'Usuário 2' },
            { name: 'Usuário 3' },
        ]);
        expect(res.send).toHaveBeenCalledWith('success');
    });
});
