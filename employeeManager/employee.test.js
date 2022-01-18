const {Builder, Capabilities, By, until} =  require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

let clickEmployee = async (empName) => {
    
    let emp = By.xpath('//li[text() = ${empName}"]')
    
    let employee = await driver.findElement(emp)

    await employee.click()

    let empText = await driver.findElement(By.css('#employeeTitle')).getText()

    expect(empText).toBe(empName)
}

test("Employee Test", async () => {
    await driver.get("https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html");
})