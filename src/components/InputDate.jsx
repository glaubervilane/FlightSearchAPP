import React from 'react'

const InputDate = () => {
  return (
    <div className="rounded-b-[1rem] md:rounded-lg md:px-1">
        <div className="flex px-20 py-4 mb-1 justify-center items-center">
            <input type="text"
            className=" search-bar text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-500
            dark:placeholder-white  dark:hover:border-white dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-gray-700 w-[45%]"
            placeholder="Departure" required/>
            
            <div className="flex-grow"></div>

            <input type="text" placeholder='Return' className='search-bar mr-auto ml-auto text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-500
            dark:placeholder-white  dark:hover:border-white dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-gray-700 w-[45%]'>        
            </input>
        </div>
    </div>
  )
}

export default InputDate