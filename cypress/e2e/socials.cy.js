describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
  })
  // This test Suite focuses on the addition and removal of items using the inventory page. 
  it('should allow a user to be redirected to the landing page when a correct username and password is entered',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('standard_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');

    //Twitter
    cy.get('.social_twitter > a').click()
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
    //Facebook
    cy.get('.social_facebook > a').click()
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
    //LinkedIn
    cy.get('.social_linkedin > a').click()
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
  })
  });