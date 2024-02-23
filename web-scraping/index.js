// const axios = require("axios");
// const cheerio = require("cheerio");


// const extractWebData = async ()=>{
//     console.log("called");
//     try {
//             //the url of the website from which we want to stole the data
//           const url = "https://www.quikr.com/jobs/job+zwqxj1519612219";  

//           //fetching the skeleton which is HTML of the webpage
//             const response =  await axios.get(url);
//             // console.log(response.data);

//             const jobs = [];

//             const $ = cheerio.load(response.data);
//             $('job-card').each((index, element)=>{
//                 const job = {};
//                 console.log(element);
//                 // job.title = $(element).find('job-title').text().trim();
//                 // job.company = $(element).find('company-name').text().trim();
//                 // job.location = $(element).find('.location').text().trim();
//                 // job.type = $(element).find('.job-type').text().trim();
//                 // job.postedDate = $(element).find('.posted-date').text().trim();
//                 // job.description = $(element).find('.job-description').text().trim();

//                 // jobs.push(job);
//             })
        
//             // console.log("Jobs",jobs);
//     } catch (error) {
//         console.log(error);
//     }
// }
// extractWebData();



const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
/**
 * 1. Get the data from a certain page from amazon - axios, fetch = DONE
 * 2. Filter/ find the required data from the page = DONE
 * 3. Store thoese information into an excel file
 */

let products = [
  {
    name: "Realme c20",
    price: 20000,
  },
  {
    name: "Apple iPhone",
    price: 80000,
  },
];

const getDataFromAmazon = async () => {
  try {
    const response = await axios.get(
      "https://www.amazon.com/s?k=phone&page=2&crid=18EUYBSP7O1SQ&qid=1702535235&sprefix=phon%2Caps%2C280&ref=sr_pg_2",
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
    // console.log(response.data);
    const $ = cheerio.load(response.data);
    // const body = $("body");
    const productCards = $("[data-asin]")
      .find("span.a-size-medium.a-color-base.a-text-normal") // name
    //   .find("span.a-price-whole") //price
    //   .find("span.a-icon-alt") //ratings
      .each((index, data) => {
        products.push({ name: $(data).text() });
        // console.log($(data).text());
      });
    //   const body = document.getElementsByTagName("body");
    //   body[0].querySelector("span.a-size-medium.a-color-base.a-text-normal")
    //   .map((data) => {
    //     console.log(data.innerText)
    //   })
    // console.log(titleSpans);

    console.log(products);
    /**
     * 1. Create a workbook (Excel file)
     * 2. Insert the data into sheet
     * 3. Create a sheet (Excel sheet)
     * 5. Attach the sheet to the file
     * 5. Write the file to filesystem
     */
    const workbook = xlsx.utils.book_new();
    // const sheetData = [
    //   ["Name", "Age", "Country"],
    //   ["John Doe", 25, "USA"],
    //   ["Jane Doe", 30, "Canada"],
    //   ["Bob Smith", 22, "UK"],
    // ];

    // const workSheet = xlsx.utils.aoa_to_sheet(sheetData);
    const workSheet = xlsx.utils.json_to_sheet(products);
    xlsx.utils.book_append_sheet(workbook, workSheet, "Sheet1");
    xlsx.writeFile(workbook, "job.xlsx");
  } catch (err) {
    console.log(err);
  }
};

getDataFromAmazon();