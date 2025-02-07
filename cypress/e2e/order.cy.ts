describe('Order testing', () => {
    const login = () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    };

    const fillCheckoutFormData = () => {
        cy.get('[data-test="firstName"]').type('Max');
        cy.get('[data-test="lastName"]').type('Mustermann');
        cy.get('[data-test="postalCode"]').type('54321');
        cy.get('[data-test="continue"]').click();
    };

    beforeEach(() => {
        login();
    });

    it('Add sauce lab backpack to cart and checkout', () => {
        const addToCartBackpackButton = cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');

        addToCartBackpackButton.should('be.visible');
        addToCartBackpackButton.click();

        // Check if cart element badge is incremented
        const cartBadge = cy.get('[data-test="shopping-cart-badge"]');
        cartBadge.should('contain.text', 1);

        // Check if inventory item button switched to remove
        const removeFromCartBackpackButton = cy.get('[data-test="remove-sauce-labs-backpack"]');

        removeFromCartBackpackButton.should('be.visible');

        // Click cart button link
        cy.get('[data-test="shopping-cart-link"]').click();

        // Check if backpack item is listed on the cart view
        cy.get('[data-test="inventory-item"]').should('be.visible');
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack');

        // Go to checkout by clicking the button
        cy.get('[data-test="checkout"]').click();

        fillCheckoutFormData();

        // Check if user is on checkout summary view
        cy.get('[data-test="payment-info-label"]').should('be.visible');
        cy.get('[data-test="shipping-info-label"]').should('be.visible');
        cy.get('[data-test="total-info-label"]').should('be.visible');

        cy.get('[data-test="finish"]').click();

        // User should be redirected to checkout complete view
        cy.get('[data-test="checkout-complete-container"]').should('be.visible');

        // Go back to home
        cy.get('[data-test="back-to-products"]').click();
        cy.get('[data-test="title"]').should('contain.text', 'Products');
    });
});
