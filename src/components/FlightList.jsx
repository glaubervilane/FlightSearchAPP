import React, {useState} from 'react';

const FlightList = ({ flightData }) => {
    const [displayCount, setDisplayCount] = useState(7);


    if (!Array.isArray(flightData)) {
        return null;
    }

    const handleShowMore = () => {
        setDisplayCount(displayCount => {
            console.log('Increasing displayCount from', displayCount, 'to', displayCount + 7);
            return displayCount + 7;
        });
    };
    

    const sortedItineraries = flightData.sort((a, b) => 
        a.legs[0].stopCount - b.legs[0].stopCount
    ).slice(0, displayCount);

    return (
        <div className="p-4 space-y-10">
            {sortedItineraries.map((itinerary, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-lg transition duration-150 ease-in-out hover:shadow-xl space-y-2">
                    <h2 className="text-xl font-bold">Itinerary #{index + 1}</h2>
                    {itinerary.legs.map((leg, legIndex) => (
                        <div key={legIndex} className="flex justify-between items-center border-t pt-2">
                            <div>
                                <p><strong>Origin:</strong> {leg.origin.name} ({leg.origin.displayCode})</p>
                                <p><strong>Destination:</strong> {leg.destination.name} ({leg.destination.displayCode})</p>
                            </div>
                            <div>
                                <p><strong>Departure:</strong> {new Date(leg.departure).toLocaleString()}</p>
                                <p><strong>Arrival:</strong> {new Date(leg.arrival).toLocaleString()}</p>
                            </div>
                            <div>
                                <p><strong>Carrier:</strong> {leg.carriers.marketing[0].name}</p>
                                <p><strong>Stops:</strong> {leg.stopCount}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-right font-bold">Price: {itinerary.price.formatted}</p>
                </div>
            ))}
                <div className='flex justify-center mt-4'>
                    {flightData.length > displayCount && <button onClick={handleShowMore}
                    className="py-2 px-4 border border-gray-300 rounded-xl bg-gray hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 transition duration-150 ease-in-out"
                    >Show More</button>}
                </div>      
            </div>  
    );
}

export default FlightList;
