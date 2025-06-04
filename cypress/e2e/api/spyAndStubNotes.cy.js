describe("API Get Note with Apy and Stub after Login ", () => {

    beforeEach (() => {
        cy.visit('/login');
        cy.intercept("GET", "https://practice.expandtesting.com/notes/api/notes",
            {
                data:[],
            }
            ).as('allNotesStub');
        cy.fixture('user').then((user)=>{
            cy.login(user.validUser.email, user.validUser.password);
            cy.get('[data-testid="home"]').contains('MyNotes');
        });

    });

it("API Get Note with Stub after Login", () => {

    cy.wait('@allNotesStub').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body.data).to.have.length(0);

    });


});


});