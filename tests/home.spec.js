import {test,expect} from '@playwright/test';
import {homepage} from './testdata/locators.js'
import jsn from '../tests/data.json'
import path from 'path'



test.describe('automation practice',()=>{
test.beforeEach('launch browser',async({page})=>{
await page.goto('/')
let loc=await new homepage(page)
await expect(page).toHaveTitle('Automation Testing Practice')
await loc.practice.click()
})

test('practice getbyrole',async ({page})=>{
let loc= new homepage(page)
await loc.primbtn.click()
await loc.togbt.click()
await loc.checkbx.check()
await loc.alerts.click()
await loc.glink.click()

})
test('getbytext()',async ({page})=>{
let loc=await new homepage(page)
await loc.texts.scrollIntoViewIfNeeded()
await expect(loc.texts).toBeVisible()
await loc.subtext.click()
})
test('getbylabel',async({page})=>{ 
let loc=await new homepage(page)
await loc.emails.fill(jsn.label.email)
await loc.paswrd.fill(jsn.label.paswrdd)
await loc.strd.check()
})

test('getbyplaceholder',async({page})=>{
let loc=await new homepage(page)
await loc.plcname.fill(jsn.placehold.name)
})
test('getalttext',async({page})=>{
    let loc=await new homepage(page)
    await expect(loc.alttext).toBeVisible()
    await loc.alttext.screenshot({path:'./tests/screenshots/alttext.png'})
})
test('getbytitle',async({page})=>{
let loc = new homepage(page)
await loc.htmls.scrollIntoViewIfNeeded()
await loc.htmls.hover()
await page.waitForTimeout(2000)
await expect(loc.htmls).toBeVisible()

})
test('getbytestid',async({page})=>{
let loc=await new homepage(page)
await loc.testprof.scrollIntoViewIfNeeded()
expect(loc.testprof).toContainText(jsn.testid.name)
})
test("file uploading",async({page})=>{
    let loc=await new homepage(page)
    
    await loc.multifile.click()
    await page.waitForTimeout(3000)
    const path1= path.resolve("tests/uploadfiles/test_1.txt")
    const path2= path.resolve("tests/uploadfiles/test_2.txt")
    await loc.multifile.setInputFiles([path1,path2])
    await page.waitForTimeout(3000)
    await loc.uploadbt.click()
    await page.waitForTimeout(3000)
    await expect(loc.filevisible).toBeVisible()

await test.step("remove files",async()=>{
await loc.multifile.setInputFiles([]);
await page.reload();
await loc.uploadbt.click()
expect(loc.filevisible).toBeVisible()
})
})
//static webtable
test('static table headres verify',async({page})=>{
let loc=new homepage(page)
const header=await loc.headers.allTextContents()
console.log(header)
await expect(header).toEqual(jsn.static.headers)
})
test("verify no of rows",async({page})=>{
let loc=await new homepage(page)
let row=await loc.rows.count()
await expect(row).toBe(7)
console.log(row)
})
test("verify author and specific subject",async({page})=>{
    let loc=await new homepage(page)
    await expect(loc.author).toContainText('Amit')
    console.log(await loc.author.textContent())
    await loc.subject.scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await expect(loc.subject).toContainText('Javascript')
    console.log(await loc.subject.textContent())
})
test("verify prices author using",async({page})=>{
    let loc=await new homepage(page)
    let prices=await loc.authorprice.allTextContents()
    let unique=[...new Set(prices.map((dups)=>parseInt(dups.trim())))]
    console.log(unique)
    expect(unique).toEqual([500,3000])
})
test("sum of prices",async({page})=>{
let loc=new homepage(page)
let allprice=await loc.allprices.allTextContents()
let priced=allprice.reduce((sum,total)=>sum+parseInt(total.trim()),0)
console.log(priced)
expect(priced).toBe(7100)
})
test("print uniq subjects",async({page})=>{
    let loc=new homepage(page)
    let subs=await loc.subjects.allTextContents()
    let unique=[...new Set(subs.map((sd)=>sd.trim().toLowerCase()))]
    console.log(unique)
})
// dynamic webtable data print
test("print new old data of dynamic webtable",async({page})=>{
let loc=new homepage(page);
await page.waitForTimeout(2000)

let header=await loc.dynheaders.allTextContents()
console.log("=====old data====")

console.log(header)
let row=await loc.dynrows
for (let i=0;i<await row.count();i++){
let rows=await row.nth(i).allTextContents()
console.log(rows)
}
//page reload
await page.reload()
await page.waitForTimeout(2000)
let headers=await loc.dynheaders.allTextContents()
console.log("=====new data====")
console.log(headers)
let rowd=await loc.dynrows
for (let i=0;i<await rowd.count();i++){
let rows=await rowd.nth(i).locator("td").allTextContents()
console.log(rows)
}
})
test("pagination table data",async({page})=>{
let loc=new homepage(page)
await page.waitForTimeout(2000)
let pages=await loc.pagess.count()
console.log(pages)
let totalsum=0
for(let i=0;i<pages;i++){
let pagelink=await loc.pagess.nth(i)
let pagetext=await pagelink.textContent()
await pagelink.click()
console.log(`clicked page${pagetext}`)
let rows=await loc.rowss.count()
for(let j=0;j<rows;j++){
    let prices=await loc.pricess.nth(j).textContent()
 let pricevalue=parseFloat(prices.replace("$","").trim())
 totalsum+=pricevalue
 console.log(`rows ${j+1} price ${pricevalue}`)

}
}
console.log(`total price sum is${totalsum}`)
expect(totalsum).toBeGreaterThan(0)  
})
test.only("3forms at one time fill",async({page})=>{
    let loc= new homepage(page)
    let form=await loc.forms.count()
    for(let i=0;i<form;i++){
    let formss=await loc.forms.nth(i)
await formss.fill(`input form${i+1}`)
await expect(formss).toHaveValue(`input form${i+1}`)
    }
})
test("shadow",async({page})=>{
let loc=new homepage(page)
await loc.shadowform.fill(jsn.shadow.helo)
})
test("verify wikepedia tab seach",async({page})=>{
    let loc=new homepage(page)
    await loc.wikinput.fill(jsn.wikipedia.searchdata)
    await page.waitForTimeout(2000)
    await loc.searchbt.click()
    await page.waitForTimeout(2000)
    await loc.wkilink.click()
    await page.waitForTimeout(2000)
})
test("verify start,stop button dynamically",async({page})=>{
let loc=new homepage(page)
await loc.startbt.hover()
await page.waitForTimeout(1000)
await loc.startbt.click()
await page.waitForTimeout(2000)
await page.mouse.move(0,0)
await page.waitForTimeout(2000)
})
test("alerts and dialog",async({page})=>{
    let loc=new homepage(page)
    //simple alert
    page.once("dialog",(dialog)=>dialog.accept())
    await loc.simplalert.click()
    await page.waitForTimeout(2000)
    //confirm alert
    page.once("dialog",(dialog)=>dialog.dismiss())
    await loc.confirmalert.click()  
    await page.waitForTimeout(2000)
    await expect(loc.confstatus).toHaveText(jsn.alerttextmesg.cancelconfm)
    //prompt alert
    page.on("dialog",async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await dialog.accept("durgaprasad")
    })
    await loc.prompbt.click()
    await page.waitForTimeout(2000)
    await expect(loc.textmesg).toHaveText(jsn.alerttextmesg.hel)
    
})
test("mouseover select option",async({page})=>{
    let loc=new homepage(page)
   await loc.dropbt.hover()
   await page.waitForTimeout(2000)
   await loc.lapt.click()
})
test("drag drop",async ({page})=>{
    let loc=new homepage(page)
    let drag=await loc.dragss
    let drops=await loc.drop
    await (drag).dragTo(drops)
})
test("using slider desiered price",async({page})=>{
    let loc=new homepage(page)
    let slider=await loc.sliderrange
    let handle=await loc.handles
    let price=await  loc.prices
    let lefthand =handle.nth(0)
    let righthand=handle.nth(1)
    let box=await slider.boundingBox()
    console.log(box)
    let sliderstart=box.x
    let sliderwidth=box.width
    let slidery=box.y+box.height / 2
    let min=0
    let max=500
    //handle correction
    let handlecorection =0.004*sliderwidth
    //formula pixel value
    let valuepixel=(value)=>
    sliderstart + ( (value-min) / (max-min) )* sliderwidth + handlecorection
    await lefthand.hover()
    await page.mouse.down()
    await page.mouse.move(valuepixel(200),slidery)
    await page.mouse.up()
    await page.waitForTimeout(2000)
    await righthand.hover()
    await page.mouse.down()
    await page.mouse.move(valuepixel(300),slidery)
    await page.mouse.up()
    let pricerange=await price.inputValue()
    console.log(pricerange)
})
//SVG(//*[local-name()='svg']//*[name()='circle'])
test("svg(sparable vector graph)",async({page})=>{
    let loc=new homepage(page)
    await loc.circle.hover()
await expect(loc.circle).toBeVisible()
})
})









