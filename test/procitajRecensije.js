const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();

/* As a customer, 
I would like to read all reviwes from previous customers
because I want be sure if I want to buy some product */

// Test: Read reviews
describe("Read product reviews", () => {

    // Testfall
  context("When I navigate to the product page", () => {

    it("should display all product reviews", async () => {
      const driver = await new Builder().forBrowser('firefox').build();
      
      try {
        // Gå till butiken
        await driver.get('https://magento.softwaretestingboard.com/');

        // Search the product
        await driver.wait(until.elementLocated(By.id('search')), 10000);
        await driver.findElement(By.id('search')).sendKeys('bag', Key.RETURN);
        
        // Wait for the reviews section to load
        await driver.wait(until.elementLocated(By.css('a[href="https://magento.softwaretestingboard.com/push-it-messenger-bag.html#reviews"]')), 10000);
        await driver.findElement(By.css('a[href="https://magento.softwaretestingboard.com/push-it-messenger-bag.html#reviews"]')).click();
       
        // Wait for 2 sec
        await driver.sleep(2000);

        // Find all review comments
        const reviewComments = await driver.findElements(By.css('a[href="https://magento.softwaretestingboard.com/push-it-messenger-bag.html#reviews"]'));


      } catch (error) {
        console.log(error);
      } finally {
        await driver.quit();
      }
    });
});
});
