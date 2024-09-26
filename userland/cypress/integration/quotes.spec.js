

describe('Quotes App', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailIn = () => cy.get('input[name=email]');
    const passIn = () => cy.get('input[name=password]');
    const serviceInput = () => cy.get('input[name=terms]');
    const pepIn = () => cy.get('input[id="pep"]');
    const dewIn = () => cy.get('input[id="dew"]');
    const submitBtn = () => cy.get('button');
    


    describe('Filling out the input and cancelling', () => {
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        it('can type in the inputs', () =>{
            nameInput()
            .should('have.value', '')
            .type('test')
            .should('have.value', 'test');
            emailIn()
            .should('have.value', '')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
            passIn()
            .should('have.value', '')
            .type('test12345')
            .should('have.value', 'test12345');
            pepIn()
            .click()
            dewIn()
            .click()
            serviceInput()
            .click()
            .should('have.value', 'on')
            submitBtn()
            .click()
        })
    })
})