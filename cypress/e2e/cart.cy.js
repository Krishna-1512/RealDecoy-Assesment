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
  // Adding items in order to interact with the Cart page
      ///Clicking add cart for all items simultaneously
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
 // Viewing items in the cart   
    cy.get('.shopping_cart_link').click()

 //Clicking item link shoulld redirect to page with the item
 cy.get('#item_4_title_link > .inventory_item_name').click()
 cy.url().should('contain','https://www.saucedemo.com/inventory-item.html?id=4'); 

  
 // Removing an item from the cart should decrease the cart count
 cy.get('.shopping_cart_link').click()
 cy.get('[data-test="remove-sauce-labs-backpack"]').click()
 // canceling an order
 cy.get('[data-test="checkout"]').click()
 cy.get('#first-name.input_error.form_input').type('Krishna');
 cy.get('#last-name.input_error.form_input').type ('Edwards');
 cy.get('[data-test="postalCode"]').type('876')
 cy.get('[data-test="continue"]').click()

 cy.get('[data-test="cancel"]').click()

// Checking out cart
cy.get('.shopping_cart_link').click()
cy.get('[data-test="checkout"]').click()
cy.get('#first-name.input_error.form_input').type('Krishna');
cy.get('#last-name.input_error.form_input').type ('Edwards');
cy.get('[data-test="postalCode"]').type('876')
cy.get('[data-test="continue"]').click()
cy.get('[data-test="finish"]').click()
cy.url().should('contain','https://www.saucedemo.com/checkout-complete.html');  

    

    
  });

  
    //cy.go('https://www.saucedemo.com/inventory-item.html?id=4');
   
})