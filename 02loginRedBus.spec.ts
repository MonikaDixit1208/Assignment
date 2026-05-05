import {chromium, firefox, test} from '@playwright/test'

test('Login', async()=>
{
    const browser1=await firefox.launch()
    const context1=await browser1.newContext();
    const page1=await context1.newPage()
    await page1.goto('https://www.redbus.in')
    console.log(`The title of the redbus page and URl is respectively  ${await page1.title()}  and ${ await page1.url()}`)

     const browser2=await chromium.launch({channel:'msedge'})
    const context2=await browser2.newContext();
    const page2=await context2.newPage()
   await page2.goto('https://www.flipkart.com')
   console.log(`The title of the Flipkart page and URl is respectively ${await page2.title()}  and ${await page2.url()}`)
})