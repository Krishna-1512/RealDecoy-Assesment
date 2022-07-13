describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
  })
  // This test Suite focuses on the addition and removal of items using the inventory page. 
  //First we need to navigate to the inventory page by successfully logging in
  it('should allow a user to be redirected to the landing page when a correct username and password is entered',()=>{  
    cy.visit('https://www.saucedemo.com'); 
    cy.get('#user-name.input_error.form_input').type('standard_user{enter}');
    cy.get('#password.input_error.form_input').type('secret_sauce{enter}');
    cy.get('#login-button').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');

    //Sauce-labs-backpack was viewed using both the image that was present and the link that was highlighted in red.
    // The bagpack was also added to the cart using the inventory page.  
    cy.get('#item_4_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=4');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.go('back')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    // bicycle light was viewed using both the image that was present and the link that was highlighted in red.
    //The bicycle light was also added to the cart using the inventory page
    cy.get('#item_0_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=0');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.go('back')
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    //Tshirt was viewed using both the image that was present and the link that was highlighted in red.
    // The Tshirt was also added to the cart using the inventory page
    cy.get('#item_1_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=1');
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.go('back')
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    // Jacket was viewed using both the image that was present and the link that was highlighted in red.
    // The jacket was also added to the cart using the inventory page
    cy.get('#item_5_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=5');
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.go('back')
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    
    // Onesie was viewed using both the image that was present and the link that was highlighted in red.
    // The onsie was also added to the cart using the inventory page
    cy.get('#item_2_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=2');
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.go('back')
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    // All things red-t-shirt was viewed using both the image that was present and the link that was highlighted in red.
    // All things red-t-shirt was also added to the cart using the inventory page
    cy.get('#item_3_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=3');
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.go('back')
    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    
    // Removing all items 
    //The backpack was removed from the cart using the inventory screen successfully
    cy.get('#item_4_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=4');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.go('back')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    /// The bicycle lights was removed from the cart using the inventory screen successfully
    cy.get('#item_0_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=0');
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.go('back')
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    
    //The Tshirt was removed from the cart using the inventory screen successfully 
    cy.get('#item_1_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=1');
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.go('back')
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    //The Jacket was removed from the cart using the inventory screen successfully
    cy.get('#item_5_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=5');
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    cy.go('back')
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    
    // The onesie was removed from the cart using the inventory screen successfully
    cy.get('#item_2_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=2');
    cy.get('[data-test="remove-sauce-labs-onesie"]').click()
    cy.go('back')
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    
    // The Test all things red-t-shirt was removed from the cart using the inventory screen successfully
    cy.get('#item_3_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=3');
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
    cy.go('back')
    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()


    // In this scenario, all items were added to the cart back to back to see if the system could manage.  
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

    // In this scenario, all items were removed from the cart back to back to see if the system could manage.  
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="remove-sauce-labs-onesie"]').click()
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
  });
 
  
})