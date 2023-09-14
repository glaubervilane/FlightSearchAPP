import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'

const Input = () => {
  return (
    <>
    <div className="rounded-b-[1rem] md:rounded-lg md:px-1 md:translate-y-6 ring-1 shadow-xl ring-slate-900/5">
        <div className="p-4 text-center text-3xl md:text-5xl"> Flights </div>
        <div className="flex px-4 py-4 mb-6 justify-center">

            {/* input left side */}
            <input type="text"
            className="search-bar text-left bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%] hover:border-gray-700 border"
            placeholder="Where from?" required/>

            {/* Icon */}
            
            <div className='f'>
                <ArrowsRightLeftIcon className="h-8 w-7 drop-shadow-md hover:stroke-2"/>
            </div>
            

            {/* input right side */}
            <input type="text"
            className="search-bar ml-auto text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-gray-700 w-[45%]"
            placeholder="Where to?" required
            onChange={() => {}}
            />
        </div>
    </div>
    <div className="flex p-4 mb-6">
        
    </div>
    </>
  )
}

export default Input