export class login {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.getByPlaceholder('Password');
        this.loginClick = page.locator('#login-button');

    }

    async login_website() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login_to_the_page(usernames, secret_sauce) {
        await this.username.fill(usernames);
        await this.password.fill(secret_sauce);
        await this.loginClick.click();
    }
}