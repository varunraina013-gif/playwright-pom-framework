export class payment {
    constructor(page) {
        this.page = page;
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvc = page.getByRole('textbox', { name: 'ex.' });
        this.expiryMonth = page.getByRole('textbox', { name: 'MM' });
        this.expiryYear = page.getByRole('textbox', { name: 'YYYY' });
        this.payAndConfirmOrder = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.home = page.locator('//a[text()="Continue"]')
    }

    async enter_the_payment_details(cardname, cardnumber, cvc, expirymonth, expiryyear) {
        await this.nameOnCard.fill('cardname')
        await this.cardNumber.fill('cardnumber')
        await this.cvc.fill('cvc')
        await this.expiryMonth.fill('expirymonth')
        await this.expiryYear.fill('expiryyear')
    }

    async pay() {
        await this.payAndConfirmOrder.click()
    }

    async home_button() {

        await this.home.click();
    }

}