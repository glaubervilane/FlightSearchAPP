import React, { Component } from 'react'

const Input = () => {
  return (
    <>
    <div className="flex px-4 py-4 mb-6 rounded-lg shadow-xl ring-slate-900/5">
        <input type="text"
        className="search-bar bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%]"
        placeholder="Where from?" required
        />
        <input type="text"
        className="search-bar ml-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%]"
        placeholder="Where to?" required
        onChange={() => {}}
        />
    </div>
    <div className="flex p-4 mb-6">
        
    </div>
    </>
  )
}

export default Input