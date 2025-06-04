describe('Creation and Verification of Note', () => {

  beforeEach(() => {
    cy.visit('/login')
    cy.fixture('user').then((user)=>{
    cy.login(user.validUser.email, user.validUser.password);
    cy.get('[data-testid="home"]').contains('MyNotes');
    });

  cy.get('[data-testid="notes-list"]').then($body => {
    if($body.find('[data-testid="note-card"]').length > 0 ) {
      cy.get('[data-testid="note-card"]').each(($el) => {
        cy.wrap($el).find('[data-testid="note-delete"]').click().get('[data-testid="note-delete-confirm"]').click();
      });
    }
  });

  cy.get('[data-testid="add-new-note"]').click();
  cy.get('[data-testid="note-category"]').as('categoryHome')

  }); 
  
  it('Creates a note in the Home category and checks its presense in Home and All tabs  ', () => {
    cy.get('@categoryHome').select('Home');
    cy.get('[data-testid="note-completed"]').check();
    cy.get('[data-testid="note-title"]').type('Home Note Title');
    cy.get('[data-testid="note-description"]').type('This is a note for the Home category');
    cy.get('[data-testid="note-submit"]').click();

    cy.get('[data-testid="category-all"]').click();
    cy.contains('Home Note Title').should('exist');


    cy.get('[data-testid="category-home"]').click();
    cy.contains('Home Note Title').should('exist');
    cy.contains('This is a note for the Home category').should('exist');

    cy.get('[data-testid="toggle-note-switch"]').should("have.css", "background-color", "rgb(0, 0, 255)");
});



 it('Creates a note in the Home category and checks its presense in Home and All tabs  ', () => {

  cy.get('@categoryHome').select('Home');
    cy.get('[data-testid="note-title"]').type('Home Note Title Without Completion');
    cy.get('[data-testid="note-description"]').type('This is a note for the Home category without checking the completed checkbox');
    cy.get('[data-testid="note-submit"]').click();

    cy.get('[data-testid="category-all"]').click();
    cy.contains('Home Note Title').should('exist');


    cy.get('[data-testid="category-home"]').click();
    cy.contains('Home Note Title Without Completion').should('exist');
    cy.contains('This is a note for the Home category without checking the completed checkbox').should('exist');

    cy.get('[data-testid="toggle-note-switch"]').should("have.css", "background-color", "rgba(0, 0, 0, 0)");




});

});