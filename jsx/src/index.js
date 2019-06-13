// Import the react and reactDOM libraries. 
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


// Create a react component
const App = () => {
    const buttontext = 'Click Me!';
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttontext}</button>
        </div>
    )
};

// Take react component and show it on the screen
ReactDOM.render(
    <App />,
    // Reference to DOM that exists in HTML file
    document.querySelector('#root')
)