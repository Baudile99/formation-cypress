//const { expect } = require("chai");

describe('API of account creation', () => {


  const apiUrl = 'https://practice.expandtesting.com/notes/api/users/register';
  it('should scceffully create an account ', () => {
const uniqueEmail = `testuser+${Date.now()}@gmail.com`;
  cy.request({
      method: 'POST',
      url: apiUrl,
      body:{
        name:'Test User1',
        email: uniqueEmail,
        password: 'Password123',
        confirm_password: 'Password123',
      },
    }).then((reponse) =>{
      expect(reponse.status).to.eq(201);
      expect(reponse.body).to.have.property('message','User account created successfully');

    });
    
  });

  it('should return an error for an already used email adress ', () => {
    const existEmail = 'honore871@gmail.com';
    cy.request({
      method: 'POST',
      url: apiUrl,
      body:{
        name: 'Bobo',
        email : existEmail,
        password: 'Password123',
        confirm_password: 'Password123',

      },
      failOnStatusCode : false 
    }).then((reponse) => {
      expect(reponse.status).to.eq(409);
      expect(reponse.body).to.have.property('message','An account already exists with the same email address');
    });
  });
});
