const puppeteer = require('puppeteer');

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      }); 
    let allPages = await browser.pages();
    let tab = allPages[0];
    await tab.goto("https://www.amazon.in");
    await tab.click('a[data-csa-c-slot-id="nav_cs_6"]');
    await tab.waitForSelector('span.nav-a-content' , {visible:true});
    let allSpanTags = await tab.$$('span.nav-a-content');
    let audioTag = allSpanTags[4];
    await audioTag.click();

    await tab.waitForSelector('span.a-list-item', {visible:true});
    let allSpanTags2 = await tab.$$('span.a-list-item');
    let headphoneTag = allSpanTags2[4];
    await headphoneTag.click();

})();