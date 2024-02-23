const axios = require("axios");
const cheerio = require("cheerio");


const extractWebData = async ()=>{
    try {
            //the url of the website from which we want to stole the data
          const url = "https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch";  

          //fetching the skeleton which is HTML of the webpage
            const response =  await axios.get(url);
            
            console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
extractWebData();