import {test,expect} from '@playwright/test'
test('test1', async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator(`#label a`).click()
    await page.locator(`.x-panel-header a`).nth(1).click()
     await page.locator(`#left-content-column li a`).nth(1).click()
      await page.locator(`#createLeadForm_companyName`).fill('Test')

      await page.locator(`#createLeadForm_firstName`).fill('Test')
      await page.locator(`#createLeadForm_lastName`).fill('Test')
      await page.locator(`#createLeadForm_personalTitle`).fill('Mrs')
      await page.locator(`#createLeadForm_generalProfTitle`).fill('Dr')
       await page.locator(`#createLeadForm_annualRevenue`).fill('12300')
        await page.locator(`#createLeadForm_departmentName`).fill('Testing')
         await page.locator(`[name='submitButton']`).click()
         const title=await page.locator(`#sectionHeaderTitle_leads`).innerText()
         console.log(title)
         console.log(await page.title())

       
})

test('Create Lead', async({page})=>{
    await page.goto('https://login.salesforce.com')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator(`.slds-icon-waffle`).click()
    
    await page.locator(`p.slds-truncate`).nth(6).click()
    await page.locator(`[title="Leads"]`).click()
     await page.locator(`[title="New"]`).first().click()
 await page.locator(`[aria-label="Salutation"]`).first().click()
 
await page.getByText('Mr.', { exact: true }).click();
await page.locator(`[name="lastName"]`).fill('Monika');
await page.locator(`[name="Company"]`).fill('Monika Company');
await page.locator(`[name="SaveEdit"]`).click();
  await expect(page.locator(`[name='primaryField']`)).toBeVisible()    
})

test('Edit Lead', async({page})=>{
    await page.goto('https://login.salesforce.com')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.getByText(`App Launcher`).first().click()
    await page.getByRole('button',{name: "View All Applications"}).first().click()
    await page.getByText('Individuals').click()
     

       
})
