import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const InputDate = ({selectedOption, departureDate, setDepartureDate, returnDate, setReturnDate}) => {
  
  const handleDepartureDate = (newValue) => {
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
    setDepartureDate(formattedDate);
  };

  const handleReturnDate = (newValue) => {
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
    setReturnDate(formattedDate);
  };

  const disablePast = true;
  return (
    <div className="flex px-[1rem] py-4 mb-1 justify-center text-center">
        <LocalizationProvider  dateAdapter={AdapterDayjs} label="Responsive Variant">
            <DatePicker label="Departure"  disablePast={disablePast} views={['month', 'day']} required 
              value={departureDate}
              onChange={handleDepartureDate}
              
            /> 

            <div className="flex-grow p-2"></div>

            {/* only shown if "Round Trip option is selected from input.jsx */}
          {selectedOption === 'Round Trip' && (
            <DatePicker label="Return" disablePast={disablePast} views={['month', 'day']}
            value={returnDate}
            onChange={handleReturnDate} />
          )}
        </LocalizationProvider>
    </div>
  );
};

export default InputDate;