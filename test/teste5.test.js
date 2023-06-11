const getUserCount = require("../teste5");

// Mock para fakeData
jest.mock("../fakeData", () => [
    { name: "John" },
    { name: "John" },
    { name: "Bob" },
]);

// Mock para req e res
const req = { query: { name: "John" } };
const res = { send: jest.fn() };

describe("Teste do arquivo teste5", () => {
    test("Deve retornar o número correto de vezes que o usuário foi lido no teste1", () => {
        getUserCount(req, res);
        expect(res.send).toHaveBeenCalledWith("Usuário John foi lido 2 vezes no teste1.");
    });

    test("Deve retornar 0 quando o usuário não for encontrado no teste1", () => {
        req.query.name = "Alice";
        getUserCount(req, res);
        expect(res.send).toHaveBeenCalledWith("Usuário Alice foi lido 0 vezes no teste1.");
    });
});
