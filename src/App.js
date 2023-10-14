import './App.css';
import  homebg  from './assets/imgs/homebg.jpg';
import { FlightList, Footer, Input } from './components';
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

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
      <FlightList flightData={flightData} isLoading={isLoading} />
      <div>
      <Footer />
      </div>
      <Analytics />
    </div>
  );
}


export default App;
