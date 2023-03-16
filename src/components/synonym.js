import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../App.css';

function Synonym(props) {
    let [synonyms, setSynonyms] = useState([]);
    
    const synonymFinder = () => {
        axios.get(`https://api.datamuse.com/words?rel_syn=${props.word}`).then((res)=>{
        console.log(res.data)
            setSynonyms(res.data)
        })
    }

    synonymFinder()

    return (
        <>
            {synonyms.map((synonym)=>{
                return <p>{synonym.word}</p>
            })}
        </>
    )

}

export default Synonym