export class product_review {

    constructor(page) {
        this.page = page ;
        this.product_1 = page.getByText('Sauce Labs Onesie');
        this.addTocart = page.getByText('Add to cart');
        this.backToproducts = page.locator('#back-to-products');
        this.product_2 = page.locator('//div[text()="Sauce Labs Bolt T-Shirt"]');
        this.addTocart_2 = page.locator('//button[text()="Add to cart"]');
        this.view_cart = page.locator('//a[@class="shopping_cart_link"]');
        this.checkout = page.locator('//button[text()="Checkout"]');
    
    }


    async select_the_1st_product(){
        await this.product_1.click();
    }

    async select_the_1st_product_continue() {
        await this.addTocart.click();
        await this.backToproducts.click();
    }

    async select_the_2nd_product(){
        await this.product_2.click();
    }
    async select_the_2nd_product_continue(){
        await this.addTocart_2.click();
        await this.view_cart.click();
        await this.checkout.click();
    }

}
