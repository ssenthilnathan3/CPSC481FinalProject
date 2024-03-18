import React from 'react';


const HomeScreen = (props) => {
    return (
        <div style={props.style}>
            {props.children}
        </div>
    )
};


export default HomeScreen