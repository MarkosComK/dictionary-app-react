import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className='w-full'>
      <div className="w-[min(761px,100%)] m-10 p-x-24 border border-red-500">
        <Header/>
        <Main/>
      </div>
    </div>
  )
}
export default App;
