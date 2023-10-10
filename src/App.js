import './App.css';
import  homebg  from './assets/imgs/homebg.jpg';
import { FlightList, Footer, Input } from './components';
import React, { useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='relative min-h-[100vh] dark:bg-gray-700 dark:text-white'>
      <div className=" pb-[2.5rem]">
      {flightData.length === 0 && <img src={homebg} alt="boat" height={29} className="" />}
        <div className="md:px-12 ">
          <Input setFlightData={setFlightData} setIsLoading={setIsLoading} />
        </div>
      </div>
      <FlightList flightData={flightData} />
      <div >
        {isLoading ? <BarLoader className=" justify-center items-center bg-opacity-90 absolute top-0 left-0 z-40" loading={isLoading} color="#d5d5d5" size={100} /> : null}
      </div>

      <div>
      <Footer />
      </div>
    </div>
  );
}


export default App;
