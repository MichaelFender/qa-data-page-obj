const {Builder, Capabilities, By, until} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const clickEmployee = require('../testAssets/clickEmployee')
const verifyEmployee = require('../testAssets/verifying')
const oldEmployees = require('../testAssets/oldEmployees')

beforeEach(async () => {
    await driver.get('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    await driver.wait(until.elementLocated(By.css('#noEmployee')))
})

afterAll(async () => {
    await driver.quit()
})

describe("Data Driven Employee Manager Tests", () =>{
    it("Can verify the old employees", async ()=> {
    await clickEmployee(driver, oldEmployees[0].name)
    await verifyEmployee(driver, oldEmployees[0].name, oldEmployees[0].phone, oldEmployees[0].title)
    })
})

// let clickEmployee = async (empName) => {
//     let emp = By.xpath(`//li[text()="${empName}"]`)

//     let employee = await driver.findElement(emp)

//     await employee.click

//     let empText = await driver.findElement(By.css('#employeeTitle')).getText()

//     expect(empText).toBe(empName)
// }

// test("Employee Test", async () => {
//     await driver.get('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
// })

module.exports = [
    {
        name: "Bernice Ortiz",
        phone: "4824931093",
        title: "CEO"
    },
    {
        name: "Marnie Barnett",
        phone: "3094812387",
        title: "CTO"
    },
    {
        name: "Phillip Weaver",
        phone: "7459831843",
        title: "Manager"
    },
    {
        name: "Teresa Osborne",
        phone: "3841238745",
        title: "Director of Engineering"
    }
]