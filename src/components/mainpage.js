// import axios from 'axios';
import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import '../App.css';

function Mainpage(props) {
    let [repeatedObject, setRepeatedObject] = useState({});

   const commonWords = 
   ["the","of","and","a","to", "too", "in",
   "is","you","that","it","he","was","for","on","are",
   "as","with","his", "her", "hers", "they","I","at","be","this","have",
   "from","or","one","had","by","but","not","what",
   "all","were","we","when","your", "you're", "can","said","there", "they're",
   "use","an","each","which","she","do","how","their","if",
   "will","up","other","about","out","many","then","them",
   "these","so","some","her","would","make","like","him",
   "into","has","look","more", "go",
   "see", "no","way","could","people","my","than",
   "first","water","been","call","who","its", "it's","now",
   "find","long","down","did","get","come","made",
   "may"];

    const createWords = (e) => {
        e.preventDefault();
        let words = document.querySelector("textarea").value;
        //regex command to remove all special characters
        let splitWords = words.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").toUpperCase().split(" ");
        let repeats = [];
        for (let i = 0; i < splitWords.length; i++) {
            let wordUsed = false
            //checks against common words to exclude them from the list
            for (let common = 0; common < commonWords.length; common++) {
                if (splitWords[i] === commonWords[common].toUpperCase()) {
                    wordUsed = true
                }
            }
            //continue only if wordUsed is still false
            if (wordUsed === false) {
            //this checks if the word has already been checked by the loop (only the first instance of the word needs to be checked against the others)
                for (let x =0; x < repeats.length; x++) {
                    if (splitWords[i] === repeats[x].word) {
                        wordUsed = true  
                    }
                }
                // if the word has not been used before we will create a new object for the word
                if (wordUsed === false) {
                    let wordCounter = {
                        word: splitWords[i],
                        count: 1
                        }
                    console.log(wordCounter)
                    //this will add to the counter to check how many times the word repeats
                    for (let w = i + 1; w < splitWords.length; w++) {
                        if (splitWords[i] === splitWords[w]) {
                            wordCounter.count += 1
                        }
                    }
                    //this pushes the word counter object into the final array
                    repeats.push(wordCounter);
                } 
            }
        }
        props.setUserWords(repeats)
        console.log(props.userWords)
    }

    return (
     <>
        <h1 className='readpeat-header'>repetitious.</h1>
        <p className='paragraph'>Welcome!</p>
        <p className='paragraph'>You can use this app to check your writing for repetitive words.</p>
        <p className='paragraph'>Copy paste a sample into the box below to see the breakdown and find synonyms.</p>
        <form onSubmit={createWords}>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        >   
            <TextField
                    id="outlined-multiline-static"
                    className='text-field'
                    label="Your words go here"
                    multiline
                    rows={10}
                    sx={{
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: "#db8539"
                                }
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: '#db8539'
                            }
                      }}
                />
                <Button 
                    variant="contained" 
                    type="submit" 
                    className='submit-button' 
                    sx={{mt:2, 
                    backgroundColor:"#db8539", 
                    "&:hover": {
                        backgroundColor: "#b5651f"
                    }}} >
                        Submit
                </Button>
        </Box>
        </form>
     </>
    );
  }

  export default Mainpage;