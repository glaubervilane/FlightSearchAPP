import { ArrowsRightLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InputDate from './InputDate'
import InputDest from './InputDest'
import InputOrig from './InputOrig'

const Input = () => {
  return (
    <>
    <div className="rounded-b-[1rem] md:rounded-lg md:px-1 md:translate-y-6 ring-1 shadow-xl ring-slate-900/5">
        <div className=" flex-col items-center py-2">
          <div className="p-2 text-center text-3xl md:text-5xl"> Flights </div>
          
          {/* trip selector */}
            <select className="ml-4 dark:bg-slate-500 rounded-lg p-1">
              <option>Round Trip</option>
              <option>One Way</option>
            </select>
            
          <div className="flex px-4 py-4 mb-6 justify-center items-center">

              {/* input flight origin */}
              < InputOrig />
          
              {/* Spacer */}
              <div className="flex-grow"></div>
              {/* Icon */}
              <ArrowsRightLeftIcon className="h-8 w-7 drop-shadow-md hover:stroke-2" />
              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* input flight Destination */}
              <InputDest />

          </div>
          <InputDate />
        </div>
        <div className="justify-center flex"><button className=" -mt-2 shadow-xl -mb-5 flex hover:font-bold hover:ring-cyan-950 bg-teal-200 rounded-[11px] p-1.5 text-slate-800 font-semibold"><MagnifyingGlassIcon className="h-5 w-5 mt-[3%] mr-1" />Explore</button></div>
    </div>
    
    </>
  )
}

export default Input