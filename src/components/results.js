import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import '../App.css';
import Synonym from './synonym';

function Results(props) {

    const backFunction = () => {
        props.setPageState("mainpage")
    }


   return (
    <>
    <h1 className='readpeat-header'>results.</h1>
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="400px"
        >  
            <Button 
                variant="contained" 
                    type="submit" 
                    className='back-button' 
                    onClick={backFunction}
                    sx={{mb: 5,
                    backgroundColor:"#db8539", 
                    "&:hover": {
                        backgroundColor: "#b5651f"
                    }, fontFamily: 'Playfair Display',
                        fontSize: "18px"}} >
                        back    
                </Button>
                <p className='paragraph'>These are the words that repeat in your writing.</p>
                <p className='paragraph'>Some common words have been eliminated.</p>    
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                    className="word-box"
                >  
                    {       
                    props.userWords.map((words)=>{
                            return <>
                            { words.count > 1 ?
                                <>
                                    <div className='words-container'>
                                        <h5 className='word-word'>{words.word}</h5>
                                        <div className='count-container'>
                                            {words.count}
                                        </div>
                                        <div className='synonyms-container'>
                                            <Synonym word={words.word} />
                                        </div>
                                    </div>
                                </>
                                :
                                null
                            }  
                            </>
                        })
                    }
                </Box>
         </Box>
        </>
   ) 

}

export default Results