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
    //Checks for sauce-labs-backpack
    cy.get('#item_4_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=4');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.go('back')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    /// bicycle lights
    cy.get('#item_0_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=0');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.go('back')
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    //Tshirt
    cy.get('#item_1_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=1');
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.go('back')
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    // Jacket
    cy.get('#item_5_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=5');
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.go('back')
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    
    // onesie
    cy.get('#item_2_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=2');
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.go('back')
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    // Test all things red t shirt
    cy.get('#item_3_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=3');
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.go('back')
    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    //Sort
    cy.get('[data-test="product_sort_container"]').click

    // Removing all items 
    cy.get('#item_4_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=4');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.go('back')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    /// bicycle lights
    cy.get('#item_0_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=0');
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.go('back')
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    //Tshirt
    cy.get('#item_1_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=1');
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.go('back')
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()

    // Jacket
    cy.get('#item_5_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=5');
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    cy.go('back')
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    
    // onesie
    cy.get('#item_2_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=2');
    cy.get('[data-test="remove-sauce-labs-onesie"]').click()
    cy.go('back')
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()
    // Test all things red t shirt
    cy.get('#item_3_img_link > .inventory_item_img').click();
    cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=3');
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
    cy.go('back')
    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('[data-test="back-to-products"]').click()


    ///Clicking add cart for all items simultaneously
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

    // Removing all items using the remove button on the inventory page
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="remove-sauce-labs-onesie"]').click()
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
  });

  
    //cy.go('https://www.saucedemo.com/inventory-item.html?id=4');
   
})