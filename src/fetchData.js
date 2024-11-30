const axios = require("axios");

async function fetchApplicationData() {
  const url =
    "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
  try {
    const response = await axios.get(url);
    return response.data; // Adjust as needed based on API response format
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

module.exports = fetchApplicationData;
