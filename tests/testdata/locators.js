export class homepage{
    constructor(page){
//getbyrole()
        this.practice=page.locator("//a[text()='PlaywrightPractice']")
        this.primbtn=page.getByRole('button',{name:'Primary Action'})
        this.togbt=page.getByRole('button',{name:'Toggle Button'})
        this.checkbx=page.getByRole('checkbox',{name:' Accept terms'})
        this.alerts=page.locator('//section[@id="role-locators"]//div[@role="alert"]')
        this.glink=page.locator('#role-locators').getByRole('link',{name:'Products'})

// getbytext()
        this.texts=page.getByText('colored text')
        this.subtext=page.getByText('Submit Form')
//getbylabel()
        this.emails=page.getByLabel("Email Address:")
        this.paswrd=page.getByLabel('Password:')
        this.strd=page.getByLabel(' Standard')
//getbyplaceholder()
        this.plcname=page.getByPlaceholder('Enter your full name')
//get byalttext()
        this.alttext=page.getByAltText('logo image')
//getbytitle()
        this.htmls=page.getByTitle('Home page link')
//getbytestid()
        this.testprof=page.getByTestId('profile-name')
//file uploading
        this.multifile=page.locator('#multipleFilesInput')
        this.uploadbt=page.locator("//button[text()='Upload Multiple Files']")
        this.filevisible=page.locator("//p[@id='multipleFilesStatus']")
        this.filenotvisible=page.locator("//p[text()='No files selected.']")
 //static webtable
        this.headers=page.locator("//tbody//tr//th")
        this.rows=page.locator("//div[@id='HTML1']//tbody//tr")
        this.author=page.locator("//td[text()='Learn Selenium']/following-sibling::td[1]")
        this.subject=page.locator("//td[text()='Master In JS']/following-sibling::td[2]")
        this.authorprice=page.locator("//td[text()='Mukesh']/following-sibling::td[2]")
        this.allprices=page.locator("//table[@name='BookTable']//td[4]")
        this.subjects=page.locator('//table[@name="BookTable"]//td[3]')
// dynamic webtable
        this.dynheaders=page.locator('//tr[@id="headers"]//th')
        this.dynrows=page.locator('//tbody[@id="rows"]//tr')
//pagination table
        this.pagess=page.locator('//ul[@id="pagination"]//li')
        this.pricess=page.locator('//table[@id="productTable"]//td[3]')
        this.rowss=page.locator('//table[@id="productTable"]//tbody/tr')
//3forms fill onetime
        this.forms=page.locator('//input[@class="input-field"]')
//shadow dom
        this.shadowform=page.locator('//div[@id="shadow_host"]').locator("input[type='text']")
//wikipedia seach
        this.wikinput=page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')
        this.searchbt=page.locator('//input[@class="wikipedia-search-button"]')
        this.wkilink=page.locator('//a[text()="Playwright (software)"]')
 //start stop dynamic button
        this.startbt=page.locator('//button[@class="start"]')
 //alerts and dialogbox
        this.simplalert=page.locator('//button[@id="alertBtn"]')
        this.confirmalert=page.locator('//button[@id="confirmBtn"]')
        this.prompbt=page.locator('//button[@id="promptBtn"]')
        this.textmesg=page.locator('//p[text()="Hello durgaprasad! How are you today?"]')
        this.confstatus=page.locator('//p[text()="You pressed Cancel!"]')
 //mouse over select option handling
        this.dropbt=page.locator('//button[@class="dropbtn"]')
        this.lapt=page.locator("//a[text()='Laptops']")
 //drag and drop
        this.dragss=page.locator('//p[text()="Drag me to my target"]')
        this.drop=page.locator('//div[@id="droppable"]')
 //slider
        this.prices=page.locator('//input[@id="amount"]')
        this.sliderrange=page.locator('//div[@id="slider-range"]')
        this.handles=page.locator('//span[@tabindex="0"]') 
 //spear vector graphs(svg)
        this.circle=page.locator("//*[local-name()='svg']//*[name()='circle']")                                        
    }
}