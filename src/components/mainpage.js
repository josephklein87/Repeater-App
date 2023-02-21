// import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Mainpage() {
    let [userWords, setUserWords] = useState([]);
    let [repeatedObject, setRepeatedObject] = useState({});

    const createWords = (e) => {
        e.preventDefault();
        let words = document.querySelector("textarea").value;
        let splitWords = words.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").split(" ");
        let repeats = [];
        for (let i = 0; i < splitWords.length; i++) {
            let wordUsed = false

            for (let x =0; x < repeats.length; x++) {
                if (splitWords[i] === repeats[x].word) {
                    wordUsed = true  
                }
            }

            if (wordUsed === false) {
                let wordCounter = {
                       word: splitWords[i],
                       count: 1
                    }
                console.log(wordCounter)
                for (let w = i + 1; w < splitWords.length; w++) {
                    if (splitWords[i] === splitWords[w]) {
                        wordCounter.count += 1
                    }
                }

                repeats.push(wordCounter);
            } 

        }
        setUserWords(repeats)
        console.log(userWords)
    }

    return (
     <>
     <form onSubmit={createWords}>
        <textarea id="textbox"></textarea>
        <input type ="submit"></input>
     </form>
     </>
    );
  }

  export default Mainpage;