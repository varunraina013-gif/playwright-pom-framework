import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { SelectProduct } from '../../pages/SelectProduct';
import {payment}from '../../pages/payment';
import {logout} from '../../pages/logout';

test.beforeEach('login to website', async ({ page }) => {

    // test.slow()

    const login = new LoginPage(page);

    await login.goto();

    await login.login('Varunraina13@gmail.com', 'New@employee13');

    await expect(page.locator('//img[@alt="Website for automation practice"]')).toBeVisible();
})


test('book a  product ', async ({ page }) => {

    // test.slow()

    const wselectProduct = new SelectProduct(page);

    const carddetails = new payment(page);

    await wselectProduct.selected_product();

    await wselectProduct.cart_to_checkout();

    await expect(page.locator('//h2[text()="Address Details"]')).toBeVisible();

    await wselectProduct.click_placeorder();

    await expect(page).toHaveURL('https://automationexercise.com/payment');
    
    await carddetails.enter_the_payment_details( 'varun','123456788765','123','12','2026');
    
    await carddetails.pay();
    
    await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
    
    await carddetails.home_button();

    await expect(page).toHaveURL('https://automationexercise.com/');

});

test.afterEach('logout from page', async({page}) =>{

    const exit = new logout(page);
    
    await exit.logout_from_website();

});



