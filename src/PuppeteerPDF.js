const puppeteer = require( 'puppeteer')
async function savePdf () {
const browser = await puppeteer. launch({ headless: true });
const page = await browser.newPage();
await page.goto( 'https://www.google.com/', {waitUntil: 'networkidle0'}); await page. addStyleTag({ content: '#save-button { display: none}' })
const pdf = await page.pdf({ format: 'A4' });
await browser.close();
return pdf
}

function savePdf(){
    return fetchPdfData(). then( ( pdfData) => {
    const blob = new Blob( [pdfData], {type: 'application/pdf'})
    const link = document.createElement ('a' )
    link.href = window.URL. createObjectURL(blob)
    link.download = "ReactApp.pdf"
    link.click()
    }) 
    } 
    



// const puppeteer = require('puppeteer')

// const createPdf = async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     const options = {
//         path: 'pdf/web.pdf', 
//         format: 'A4',

//     };
//     await page.goto('', {waitUntil: 'networkidle2'});
//     await page.pdf (options);

//       await browser.close();
//     };

//     createPdf();
