describe('home page', () => {

beforeEach(() =>{
  cy.visit('/');
})

context('Should display the correct title using different method', () =>{
  
  it('Should displaiy the correct title using contains', () => {
    cy.get('.fw-bold.lh-1').contains('Welcome to Notes App');
  });

  it('Should displaiy the correct title using should', () => {
      cy.get('.fw-bold.lh-1').should('contain', 'Welcome to Notes App')
  });
  
});

context.skip('navigation test', () =>{
  it('should navigate to the login page when clicking the login button', ()=>{
    cy.get('[data-testid="open-login-view"]').find('a').contains('Login').click();
    cy.url().should('include', '/login');
    cy.get('form').should('be.visible');
  })
  it('should navigate to the create account page when clicking the create an account button', () => {
    cy.get('[data-testid="open-register-view"]').click();
    cy.url().should('include', '/register');
    cy.get('form').should('be.visible');
  })

});


});