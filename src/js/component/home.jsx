import React from 'react';
import DigitalCounter from '../component/timer';
//include images into your bundle

//create your first component
const Home = () => {
	return (
        <div className="App">
            <header className="App-header">
                <DigitalCounter />
            </header>
        </div>
    )
};


export default Home;
