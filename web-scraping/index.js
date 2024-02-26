// import axios from 'axios'
// import { load } from 'cheerio'
// import { utils, writeFile } from 'xlsx'

// const products = []

// /**
//  * Asynchronous function to retrieve data from a specified URL, parse the HTML content, extract job postings, and write the data to an Excel file.
//  *
//  * @return {Promise} The retrieved data from the specified URL, parsed and written to an Excel file.
//  */
// const getData = async () => {
// 	try {
// 		// Getting data from response object sent by axios
// 		const { data } = await axios.get(
// 			`https://shah9380.github.io/mypage/data.html`,
// 			{
// 				headers: {
// 					// Setting content type as html so cheerio can parse it
// 					'Content-Type': 'text/html',
// 					// User agent for scraping
// 					'User-Agent':
// 						'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
// 				},
// 			}
// 		)

// 		// Parsing data using cheerio
// 		const $ = load(data)

// 		// Extracting job postings
// 		$('.job-card').each((index, element) => {
// 			const product = {
// 				job_title: $(element).find('.job-title').text(),
// 				company_name: $(element).find('.company-name').text(),
// 				location: $(element).find('.location').text(),
// 				job_type: $(element).find('.job-type').text(),
// 				posted_date: $(element).find('.date').text(),
// 				description: $(element).find('.job-description').text(),
// 			}

// 			products.push(product)
// 		})

// 		const workbook = utils.book_new() // Creating a new workbook
// 		const worksheet = utils.json_to_sheet(products) // Creating a new worksheet with the extracted data
// 		utils.book_append_sheet(workbook, worksheet, 'Sheet 1') // Adding the worksheet to the workbook
// 		writeFile(workbook, 'job.xlsx') // Writing the workbook to an Excel file
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

// getData()


import axios from 'axios';
import { load } from 'cheerio'; // Import the load function instead of the default instance

// Function to scrape data
async function scrapeData(url) {
    try {
        console.log('Fetching HTML content...');
        // Fetch HTML content
        const response = await axios.get(url);
        const html = response.data;
        console.log('HTML content fetched successfully.');

        // Load HTML content into Cheerio
        const $ = load(html); // Use load function to create a Cheerio instance

        // Extract data from each card
        $('.card').each((index, element) => {
			console.log(card);
            // Extract image URL
            const imageUrl = card.find('.card-img-top').attr('src');

            // Extract card title
            const cardTitle = card.find('.card-title').text().trim();

            // Extract house name and address
            const houseName = card.find('.card-text').eq(0).text().trim();
            const houseAddress = card.find('.card-text').eq(1).text().trim();

            // Extract number of beds, baths, and total area
            const beds = card.find('.row.text-secondary').find('svg').eq(0).parent().text().trim();
            const baths = card.find('.row.text-secondary').find('svg').eq(1).parent().text().trim();
            const totalArea = card.find('.row.text-secondary').find('svg').eq(2).parent().text().trim();

            // Log the extracted data
            console.log('Image URL:', imageUrl);
            console.log('Card Title:', cardTitle);
            console.log('House Name:', houseName);
            console.log('House Address:', houseAddress);
            console.log('Beds:', beds);
            console.log('Baths:', baths);
            console.log('Total Area:', totalArea);
            console.log('-----------------------------------');
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function with the URL to scrape
const url = 'https://csb-kym7qx.netlify.app/';
scrapeData(url);




