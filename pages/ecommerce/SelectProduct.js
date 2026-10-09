export class SelectProduct {
    constructor(page) {
        this.page = page;
        this.click_product = page.locator('//a[@href="/product_details/2"]');
        this.quanity = page.locator('#quantity');
        this.add_to_cart = page.locator('//button[@type="button"]');
        this.continue_shopping = page.getByText('Continue Shopping');
        this.view_cart = page.locator('(//a[@href="/view_cart"])[1]');
        this.proceed_to_checkout = page.locator('//a[text()="Proceed To Checkout"]');
        this.place_the_order = page.locator('//a[text()="Place Order"]')

    }

    async selected_product() {
        await this.click_product.click();
        await this.quanity.click();
        await this.add_to_cart.click();
        await this.continue_shopping.click();
    }

    async cart_to_checkout() {
        await this.view_cart.click();
        await this.proceed_to_checkout.click();
    }

    async click_placeorder() {
        await this.place_the_order.click();
    }
    
    
    
}


