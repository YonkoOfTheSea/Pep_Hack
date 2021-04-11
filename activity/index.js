const puppeteer = require('puppeteer');
const youtube = require('./youtube');

try {
    (async () => {

        let keywords = [
            'pepcoding',
            'ipl',
            'google chrome developers',
            'hackathon',
        ];

        const browser = await puppeteer.launch();
        let results = await youtube.scrape_youtube(browser, keywords);
        console.dir(results, {depth: null, colors: true});

        await browser.close();

    })()
} catch (err) {
    console.error(err)
}