import React, { useState, useEffect } from 'react';
import { ArrowsRightLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InputDate from './InputDate'
import InputDest from './InputDest'
import InputOrig from './InputOrig'
import airportData from "./airports.json";
import fetchFromAPI from './utils/fetchFromAPI';
import dayjs from 'dayjs';


const Input = () => {
  const [originCode, setOriginCode] = useState("")
  const [destCode, setDestCode] = useState("")
  const [originSkyId, setOriginSkyId] = useState(null);
  const [destSkyId, setDestSkyId] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [flightData, setFlightData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Round Trip");

  const fetchDataOrig = async (originCode) => {
      try {
        const response = await fetch(
          `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${originCode}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '83e554ecd8msh69bcf65b0f9c18dp1750dajsn45f4162b8488',
              'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
            },
          }
        );
        const result = await response.json();
        //checks the status of API endpoint
        if (result.status !== true) {
          console.log("API returned a false status");
          return null;
        }

        //loop through the data to find airport match        
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].skyId === originCode) {
            return result.data[i].entityId;
          }
        }
      } catch (error) {
        console.log("Error in fetchDataOrig: ", error);
        return null;
      };
  };

  const fetchDataDest = async (destCode) => {
      try {
        const response = await fetch(
          `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${destCode}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '83e554ecd8msh69bcf65b0f9c18dp1750dajsn45f4162b8488',
              'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
            },
          }
        );
        const result = await response.json();
        //checks the status of API endpoint
        if (result.status !== true) {
          console.log("API returned a false status");
          return null;
        }
        //loop through the data to find airport match
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].skyId === destCode) {
            return result.data[i].entityId;
          }
        }
      } catch (error) {
        console.log("Error in fetchDataOrig: ", error);
        return null;
      }
    };


  const handleExploreClick = async (e) => {
    e.preventDefault();
    console.log(`departure: ${originCode}`);
    console.log(`destination: ${destCode}`);

    if (!originCode || !destCode || !departureDate || (selectedOption === 'Round Trip' && !returnDate)) {
      console.log("Please fill in all required fields");
      return;
    }

    try {
      const data = await fetchFromAPI(originSkyId, destSkyId, departureDate, returnDate);
      console.log("Raw fetch response:", data);

      if (!data.ok) {
        console.log("Fetch failed", data.status, data.statusText);
        return;
      }

      const textData = data.text();
      console.log("Text data:", textData);

      const jsonData = JSON.parse(textData);
      console.log("JSON data:", jsonData);

      setFlightData(jsonData);
      
    } catch (error) {
      console.error("An error occured:", error);
    }
  };
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    console.log(flightData);
  }, [flightData]);
  

  return (
    <>
    <div className="rounded-b-[1rem] md:rounded-lg md:px-1 md:translate-y-6 ring-1 shadow-xl ring-slate-900/5">
      <form className=" flex-col items-center py-2">
        <div className="p-2 text-center text-3xl md:text-5xl"> Flights </div>
          
          {/* trip selector */}
            <select 
              className="ml-4 dark:bg-slate-500 rounded-lg p-1"
              value={selectedOption}
              onChange={handleOptionChange}>
              <option>Round Trip</option>
              <option>One Way</option>
            </select>
            
          <div className="flex px-4 py-3 mb-6 justify-center items-center">

              {/* input flight origin */}
              <InputOrig airportData={airportData} fetchDataOrig={fetchDataOrig} setOriginCode={setOriginCode} setOriginSkyId={setOriginSkyId} />
          
              {/* Spacer */}
              <div className="flex-grow"></div>
              {/* Icon */}
              <ArrowsRightLeftIcon className="h-8 w-7 drop-shadow-md hover:stroke-2" />
              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* input flight Destination */}
              <InputDest airportData={airportData} fetchDataDest={fetchDataDest} setDestCode={setDestCode} setDestSkyId={setDestSkyId} />
          </div>

          <InputDate 
          selectedOption={selectedOption} 
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          />
          <div className="justify-center flex">
            <button onClick={handleExploreClick} className=" -mt-2 shadow-xl -mb-5 flex hover:font-bold hover:ring-cyan-950 bg-teal-200 rounded-[11px] p-1.5 text-slate-800 font-semibold">
              <MagnifyingGlassIcon className="h-5 w-5 mt-[3%] mr-1" />
              Explore
            </button>
          </div>
      </form>
    </div>
    
    </>
  );
};

export default Input;