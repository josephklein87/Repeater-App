import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../App.css';

function Synonym(props) {
    let [synonymsList, setSynonymsList] = useState([]);
    
    const synonymFinder = () => {
        // axios.get(`https://api.datamuse.com/words?rel_syn=${props.word}`).then((res)=>{
        // console.log(res.data)
        //     setSynonyms(res.data)
        // })
        axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${props.word}`, {
            headers: {'X-Api-Key': process.env.REACT_APP_API_KEY}},
            ).then((res)=>{
                console.log(res.data.synonyms)
                    let synonymArray = res.data.synonyms
                    for (let i = 0; i < synonymArray.length; i++) {
                        let replaced = synonymArray[i].replace("_", " ")
                        synonymArray[i] = replaced
                    }
                    setSynonymsList(synonymArray)
                    
    })}

    useEffect(() => {
        synonymFinder();
    }, [])

    

    return (
        <>
            {synonymsList.map((synonym)=>{
                return <p className='synonym-single'>{synonym}</p>
            })}
        </>
    )

}

export default Synonym