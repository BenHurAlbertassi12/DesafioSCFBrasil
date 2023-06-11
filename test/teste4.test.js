const updateUser = require('../teste4'); 
test('Atualiza os dados de um usuário específico', () => {
    const req = {
        query: { id: '1' },
        body: { name: 'Novo Nome', job: 'Nova Profissão' }
    };

    const res = {
        send: jest.fn()
    };

    updateUser(req, res);

    expect(res.send).toHaveBeenCalledWith({
        id: 1,
        name: 'Novo Nome',
        job: 'Nova Profissão'
    });
});

test('Retorna uma resposta de erro quando o usuário não é encontrado', () => {
    const req = {
        query: { id: '99' },
        body: { name: 'Novo Nome', job: 'Nova Profissão' }
    };

    const res = {
        status: jest.fn(() => res),
        send: jest.fn()
    };

    updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Usuário não encontrado');
});
