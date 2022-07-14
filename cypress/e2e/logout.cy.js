describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
  })
  // This test Suite focuses on logging out
  it('should allow a user to be redirected to the landing page when a correct username and password is entered',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('standard_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
    // Logout 
    //cy.get('.bm-item-list').click()
    // cy.get('.header_label').click()
    // cy.get('#logout.button').click()
    cy.get('#menu_button_container').dblclick();
        //cy.get('.react-burger-menu-bin').click()
    
  })
});