import React from 'react';
import Timer from '../component/timer.jsx';
import Footer from '../component/footer.jsx';

//create your first component
const Home = () => {
	return (
		<div className="container-fluid px-0">
			<Timer />
			<Footer />
		</div>
	)
};

export default Home;
