
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
  })
  it('should display error message when the username and password field then clicking login', () => {
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username is required');
  }) 
  it('should display an error message saying Epic sadface: Username and password do not match any user in this service',()=>{  
    cy.get('#user-name.input_error.form_input').type('rk_test{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('should display an error message saying Epic sadface: Username and password do not match any user in this service',()=>{  
    cy.get('#user-name.input_error.form_input').type('STANDARD_USER{enter}');
    cy.get('#password.input_error.form_input').type('SECRET_SAUCE{enter}');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('should not allow the user to gain access to the inventory',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('locked_out_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
 
  });

  it('should allow a user to be redirected to the landing page when a correct username and password is entered but slower than usual',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('performance_glitch_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
   });

   it('should allow a user to be redirected to the landing page when a correct username and password is entered',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('problem_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
 
  });
   it('should allow a user to be redirected to the landing page when a correct username and password is entered',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('standard_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
 
  });


})