import { test, expect } from '@playwright/test';
import { login } from '../../pages/swag_labs/login';
import {product_review} from '../../pages/swag_labs/product_review';
import{checkout} from '../../pages/swag_labs/checkout';
import{logout} from '../../pages/swag_labs/logout';


test.beforeEach('login to the webpage', async ({ page }) => {

    const loginwebi = new login(page);
    await loginwebi.login_website();
    await loginwebi.login_to_the_page('standard_user','secret_sauce');
});
 
test('select a product', async ({ page }) => {

    const products_view = new product_review(page); 

    await products_view.select_the_1st_product();
    await expect(page.locator('.inventory_details_price')).toBeVisible();
    await products_view.select_the_1st_product_continue();
    await products_view.select_the_2nd_product();
    await expect(page.locator('//div[@class="inventory_details_price"]')).toBeVisible();
    await products_view.select_the_2nd_product_continue();
    await expect(page.locator('//span[text()="Checkout: Your Information"]')).toBeVisible();
    
    const cartprocess = new checkout(page);
    
    await cartprocess.checkout_details('Varun','Raina','560001');
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await cartprocess.finish_checkout();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await cartprocess.goback_to_homepage();


});

test.afterEach('logout from the page', async ({ page }) => { 
    
    const exit = new logout(page);
    await exit.logout_from_the_website();
    await expect(page).toHaveURL('https://www.saucedemo.com/');

}) 