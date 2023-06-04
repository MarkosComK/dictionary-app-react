import React from 'react'

function header() {
  return (
    <div>
        <header className="flex items-center justify-between">
            <i>
                <svg className="w-8 h-9 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 38">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
                    <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
                    <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
                    <path d="M11 9h12" />
                </g>
                </svg>
            </i>
            <div className="flex items-center">
                <div className="relative group">
                    <button className="text-gray-800 font-medium focus:outline-none group-hover:text-purple-600" id="actual-font">Serif</button>
                    <div className="absolute left-0 hidden group-hover:block mt-2 py-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <button value="sans-serif" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" id="changeFont">Sans Serif</button>
                        <button value="serif" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" id="changeFont">Serif</button>
                        <button value="mono" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" id="changeFont">Mono</button>
                    </div>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" className="w-4 h-3 text-purple-600 ml-1">
                        <path fill="none" stroke="currentColor" stroke-width="1.5" d="m1 1 6 6 6-6" />
                        </svg>
                    </i>
                </div>
                <div className="w-0.5 h-5 mx-2 bg-gray-300"></div>
                <div className="relative">
                    <button className="focus:outline-none" id="change-theme">
                        <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                    </button>
                </div>
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className="w-6 h-6 text-gray-600 ml-2">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.117 15.135 1 10.449 1 10.449zM12.4 19.51c-4.393 0-7.946-3.553-7.946-7.946S8.007 3.618 12.4 3.618c2.537 0 4.828 1.157 6.318 2.96.276.335.077.83-.356.83H6.392c-.424 0-.633-.495-.356-.83C8.571 2.775 10.862 1.618 13.4 1.618c5.18 0 9.382 4.202 9.382 9.382S18.58 20 13.4 20" />
                    </svg>
                </i>
            </div>
        </header>
    </div>
  )
}

export default header
