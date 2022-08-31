describe('Automatizacao dos Cenarios de Teste', () => {
    
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/');
    });

    //Cenario 4
    it('verifica mensagens de validacao', () => {
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.contains('button', 'Cadastre-se para fazer entregas').click();
        cy.contains('span', 'É necessário informar o nome');
        cy.contains('span', 'É necessário informar o CPF');
        cy.contains('span', 'É necessário informar o email');
        cy.contains('span', 'É necessário informar o CEP');
        cy.contains('span', 'É necessário informar o número do endereço');
        cy.contains('span', 'Selecione o método de entrega');
        cy.contains('span', 'Adicione uma foto da sua CNH');
    });

    //Cenario 5
    it('verifica CPF valido', () => {
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="name"').type('Gabrieli');
        cy.get('input[name="cpf"]').type('00000000000');
        cy.contains('button', 'Cadastre-se para fazer entregas').click(); 
        cy.contains('span', 'Oops! CPF inválido'); 
    });

    //Cenario 6
    it('verifica email valido', () => {
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="name"').type('Gabrieli');
        cy.get('input[name="cpf"]').type('12345678910');
        cy.get('input[name="email"').type('user@mailcom');
        cy.contains('button', 'Cadastre-se para fazer entregas').click(); 
        cy.contains('span', 'Oops! Email com formato inválido');

    });

    //Cenario 7
    it('verifica CEP valido', () => {
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="name"').type('Gabrieli');
        cy.get('input[name="cpf"]').type('12345678910');
        cy.get('input[name="email"').type('user@mail.com');
        cy.get('input[name="postalcode"').type('88705-710');
        cy.get('input[type="button"]').click(); (str)=>{
            expect(str).to.equal("Tubarão/SC")
        };
    
    });


});