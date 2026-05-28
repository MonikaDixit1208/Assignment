import {test,expect} from '@playwright/test'
test('Create Lead', async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
     await page.locator(`//p[text()="Sales"]`).click()
      await page.locator(`//span[text()="Leads"]`).first().click()

      await page.locator(`//div[@title="New"]`).click()
      await page.locator(`//button[@aria-label="Salutation"]`).click()
      await page.locator(`//span[text()="Mrs."]`).click()
      await page.locator(`//input[@name="lastName"]`).fill('Monika')
      await page.locator(`//input[@name="Company"]`).fill('Company Name')
       await page.locator(`//button[@name="SaveEdit"]`).click()
     await expect(page.locator(`//span[contains(.,"was saved")]`)).toBeVisible()
        

       
})

test('Edit Lead', async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
     await page.locator(`//p[text()="Sales"]`).click()
      await page.locator(`//span[text()="Leads"]`).first().click()

      await page.locator(`//a[@title='Monika']`).click()
      await page.locator(`//button[@name='Edit']`).click()
      await page.locator(`//input[@name="Company"]`).clear()
      await page.locator(`//input[@name="Company"]`).fill('New Company Name')
       await page.locator(`//button[@name="SaveEdit"]`).click()
        await expect(page.locator(`//span[contains(.,"was saved")]`)).toBeVisible()
        

       
})

test('Create Individuals', async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
     await page.locator(`//p[text()="Individuals"]`).click()
      await page.locator(`//a[@title='New']`).click()
      await page.locator(`//input[@placeholder="Last Name"]`).fill('Avnish')
         await page.locator(`//button[@title="Save"]`).last().click()
        await expect(page.locator(`//span[text()="monika"]`).last()).toBeVisible()
        
})

test('Edit Individuals', async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
     await page.locator(`//p[text()="Individuals"]`).click()
      
      await page.locator(`//span[text()="Avnish"]`).click()
         await page.locator(`//a[@title="Edit"]`).last().click()
               await page.locator(`//a[contains(text(),"None")]`).first().click()
      await page.locator(`//a[text()="Mr."]`).click() 
            await page.locator(`//input[@placeholder="Last Name"]`).fill('AvnishMonika')
             await page.locator(`//button[@title="Save"]`).last().click()
             await expect(page.locator(`//span[text()="AvnishMonika"]`).last()).toBeVisible()
})

