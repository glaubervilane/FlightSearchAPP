async function fetchFromAPI(originSkyId, destinationSkyId, departureDate, returnDate) {
    try {
      let url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&date=${departureDate}&adults=1&currency=USD&market=en-US&countryCode=US`;
  
      if (returnDate && returnDate !== '') {
        url += `&returnDate=${returnDate}`
      }
      
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '83e554ecd8msh69bcf65b0f9c18dp1750dajsn45f4162b8488',
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
      };
  
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  export default fetchFromAPI;
  