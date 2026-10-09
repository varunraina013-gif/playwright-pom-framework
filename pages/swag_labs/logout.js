export class logout{

    constructor(page){
        this.page = page;
        this.clickmenu = page.locator('(//button[@type="button"])[1]');
        this.logout = page.locator('#logout_sidebar_link');
    }

    async logout_from_the_website(){
        await this.clickmenu.click();
        await this.logout.click();
    }
}
