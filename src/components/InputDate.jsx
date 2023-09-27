import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';

const InputDate = () => {
  return (
    <div className="flex px-[1rem] py-4 mb-1 justify-center text-center">
        <LocalizationProvider  dateAdapter={AdapterDayjs} label="Responsive Variant">
            <DatePicker label="Departure"  disablePast="true" views={['month', 'day']}/> 
            <div className="flex-grow p-2"></div>
            <DatePicker label="Return" disablePast="true" views={['month', 'day']} />
        </LocalizationProvider>
    </div>
  )
}

export default InputDate