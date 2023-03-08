import './App.css';
// import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Mainpage from './components/mainpage';

function App() {
  let [userWords, setUserWords] = useState([]);

  return (
   <>
   <Mainpage userWords={userWords} setUserWords={setUserWords}/>
   </>
  );
}

export default App;
