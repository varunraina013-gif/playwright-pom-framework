export class logout{

    constructor(page){
        this.page = page
        this.logoutbutton = page.locator('//a[@href="/logout"]')
    }

    async logout_from_website(){
        await this.logoutbutton.click()
    }
}