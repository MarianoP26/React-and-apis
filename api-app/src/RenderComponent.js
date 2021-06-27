import React from 'react';
import Jokes from './components/Jokes';
import Error from './Error';

const RenderComponent = ({selector}) => {

    if(selector === 1){
        return (
            <section>
                <Jokes />
            </section>
        );  
    }
    else{
        return (
            <>
                <Error />
            </>
        )
    }
}

export default RenderComponent;
