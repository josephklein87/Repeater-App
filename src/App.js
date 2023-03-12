import './App.css';
// import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Mainpage from './components/mainpage';
import Results from './components/results';

function App() {
  let [userWords, setUserWords] = useState([]);

  return (
   <>
   <Mainpage userWords={userWords} setUserWords={setUserWords}/>
   <Results userWords={userWords} />
   </>
  );
}

export default App;
