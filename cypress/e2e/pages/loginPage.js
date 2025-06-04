class loginPage {

    visit() {
        cy.visit('/login');
    }
    get emailInput() {
        return cy.get('[data-testid="login-email"]');
    }

    get passwordInput() {
        return cy.get('[data-testid="login-password"]');
    }

    get submitButton() {
        return cy.get('[data-testid="login-submit"]');
    }

    verifErrorMesgForEmail() {
        return cy.get(':nth-child(1) > .invalid-feedback').should('be.visible').and('contain', 'Email address is invalid');
    }

    verifErrorMesgForPassword() {
        return cy.get(':nth-child(2) > .invalid-feedback').should('be.visible').and('contain', 'Password is required');
    }

    verifAlertMessage() {
        return cy.get('[data-testid="alert-message"]').should('be.visible');
    }

    verifHomePage() {
        return cy.get('[data-testid="home"]').contains('MyNotes');
    }

    login(email, password) {
        this.emailInput.type(email);
        if (password){
            this.passwordInput.type(password);
        }
        this.submitButton.click();
            

    }

}
export default new loginPage ;