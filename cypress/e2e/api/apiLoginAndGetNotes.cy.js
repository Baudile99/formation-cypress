describe('API login and retrieve notes', () => {

    let authToken;

    beforeEach(() =>{
        cy.request({
        method: "POST",
        url: "https://practice.expandtesting.com/notes/api/users/login",
        body: {
            email:"honore871@gmail.com",
            password:"123456",
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        authToken = response.body.data.token ;
        expect(authToken).to.be.not.be.empty
    });

    });
    
    it ('should retrieve all notes using the tocken', () => {
        cy.request ({
            method: "GET",
            url: "https://practice.expandtesting.com/notes/api/notes",
            headers: {
                "x-auth-token" : authToken , 
            },
        }).then((response) => {
             expect(response.status).to.eq(200);
             expect(response.body.data).to.be.an("array");
    
            });



    });


});