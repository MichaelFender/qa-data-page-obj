const {By} = require('selenium-webdriver')

module.exports = async (driver, empName) => {

let emp = By.xpath('//li[text() = ${empName}"]');

let employee = await driver.findElement(emp);

await employee.click();

let empText = await driver.findElement(By.css("#employeeTitle")).getText();

expect(empText).toBe(empName);
}