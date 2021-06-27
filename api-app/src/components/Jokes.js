import React, { useState, useEffect } from 'react';

const Jokes = (props) => {

    const url = 'https://official-joke-api.appspot.com/random_ten';
    const [jokes, setJokes] = useState([]);

    const getJokes = async() =>{
        const response = await fetch(url);
        const jokes = await response.json();
        setJokes(jokes);
    }

    useEffect(()=>{
        getJokes();
    },[]);

    return(
        <>
        <h3 className="jokeTitle">Jokes</h3>
        <ul className="jokes">
            {jokes.map((joke)=>{
                const {id, setup, punchline} = joke;
                return <li key={id}>
                    <h4>{setup}</h4>
                    <h5>{punchline}</h5>
                </li>
            })}
        </ul>
        </>
    );
};

export default Jokes;