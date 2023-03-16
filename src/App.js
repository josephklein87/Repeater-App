import './App.css';
// import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Mainpage from './components/mainpage';
import Results from './components/results';

function App() {
  let [userWords, setUserWords] = useState([]);
  let [pageState, setPageState] = useState("mainpage")

  return (
   <>
   {pageState === "mainpage" ? 
      <Mainpage 
        setPageState={setPageState} 
        userWords={userWords} 
        setUserWords={setUserWords}
      /> 
      : 
      null
    }
    {pageState === "results" ? 
      <Results 
        setPageState={setPageState} 
        userWords={userWords} 
      />
      :
      null
    }
   </>
  );
}

export default App;
