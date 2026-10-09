export class LoginPage {

    constructor(page) {

        this.page = page
        this.Emailaddress_box = page.locator('(//input[@placeholder="Email Address"])[1]')
        this.password_box = page.getByPlaceholder('Password')
        this.yellow_login = page.getByRole('button', { name: 'Login' })

    }

    async goto(){
        await this.page.goto('https://automationexercise.com/login')
    }

    async login(username, password) {
        await this.Emailaddress_box.fill(username)
        await this.password_box.fill(password)
        await this.yellow_login.click()

    }

    
}