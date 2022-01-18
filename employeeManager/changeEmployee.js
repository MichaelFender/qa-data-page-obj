const {By, until} = require('selenium-webdriver')

module.exports = async (driver, name, phone, title) => {
    let nameInput = await driver.findElement(By.css('[name = "nameEntry]'))

    await nameInput.clear()
    await nameInput.sendKeys(name)

    let phoneInput = await driver.findElement(By.css('[name = "phoneEntry]'));

    await phoneInput.clear()
    await phoneInput.sendKeys(phone)

    let titleInput = await driver.findElement(By.css('[name = "titleEntry]'));

    await titleInput.clear()
    await titleInput.sendKeys(title)

    await driver.findElement(By.css('#saveBtn')).click()

    let nameText = await driver.findElement(By.css('#employeeTitle')).getText()

    expect(nameText).toBe(name)
}