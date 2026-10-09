export class checkout{

    constructor(page){
        this.page = page;
        this.first_name = page.getByPlaceholder('First Name');
        this.last_name = page.getByPlaceholder('Last Name');
        this.zipcode = page.getByPlaceholder('Zip/Postal Code');
        this.press_continue =page.locator('#continue');
        this.continue_finish =page.locator('#finish');
        this.backTohomepage =page.locator('#back-to-products');

    }
    async checkout_details(name,lastname,number){
        await this.first_name.fill(name);
        await this.last_name.fill(lastname);
        await this.zipcode.fill(number);
        await this.press_continue.click();
    }
    async finish_checkout(){
        await this.continue_finish.click();
    }
    async goback_to_homepage(){
       await this.backTohomepage.click();
    }
}