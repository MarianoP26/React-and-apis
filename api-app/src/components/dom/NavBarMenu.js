import React from 'react';

const NavBarMenu = (props) => {

    const apiSelector = (selected) =>{
        props.renderApiComponent(selected);
    }

    return(
        <>
        <nav id="menu">
            <div id="responsive-menu"></div>
            <ul>
                <li><button onClick={() =>apiSelector(1)}>Jokes</button></li>
                <li><button onClick={() =>apiSelector(2)}>CatFacts</button></li> 
                <li><button onClick={() =>apiSelector(3)}>TODO</button></li> 
                <li><button onClick={() =>apiSelector(4)}>TODO2</button></li>  
            </ul>
        </nav>
        </>
    );
};

export default NavBarMenu;