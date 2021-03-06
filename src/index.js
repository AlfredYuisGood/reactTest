//Import React and ReactDom library
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click ME!';
}

//Create a react component
const App = () => {
    const buttonText = 'Click Me';

    return (
    //<div>Hi Alfred</div>;
    <div>
        <label className="label" for="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
    </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);