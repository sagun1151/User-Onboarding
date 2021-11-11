describe('User onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const signupInput = () => cy.get('button[id="signUp"]');
    const firstInput = () => cy.get('input[name=first_name]');
    const lastInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const serviceInput = () => cy.get('input[name=service]');
    const randomInput = () => cy.get('input[name=random]');

    it('make sure test work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })
    it('are the elements showing', () => {
        signupInput().should('exist');
        firstInput().should('exist');
        lastInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        serviceInput().should('exist');
        randomInput().should('not.exist');
    })

    describe('Filling out inputs, checking box , and signing up', () => {
        it('can go to website', () => {
            cy.url().should('include', 'localhost');
        })
        it('sign up button should be disabled', () => {
            signupInput().should('be.disabled');
        })
        it('can type into inputs and sign up button isnt disabled', () => {
            firstInput()
                .should('have.value', '')
                .type('sagun')
                .should('have.value', 'sagun');

            lastInput()
                .should('have.value', '')
                .type('shrestha')
                .should('have.value', 'shrestha');

            emailInput()
                .should('have.value', '')
                .type('ss@gmail.com')
                .should('have.value', 'ss@gmail.com');

            passwordInput()
                .should('have.value', '')
                .type('abc123')
                .should('have.value', 'abc123');
            
            serviceInput().check()
                .should('be.checked');
            
            signupInput().should('not.be.disabled');
        })

        it('adds a new user', () => {
            firstInput().type('sagun');
            lastInput().type('shrestha');
            emailInput().type('ss@gmail.com');
            passwordInput().type('abc123');
            serviceInput().check();
            signupInput().click();
            cy.contains('sagun').should('exist');
        })
        it('checks if input is not correct email type', () => {
            emailInput().type('ss');
            passwordInput().type('ss')
            cy.contains('address').should('exist');
            cy.contains('characters').should('exist');
        })
        it('if an input is left empty', () => {
            firstInput().type('sagun');
            lastInput().type('shrestha');
            emailInput().type('ss@gmail.com');
            passwordInput().type('abc123');
            signupInput().should('be.disabled');
        })


    })




})