import Homepage from './component/Homepage/Homepage';
import AOS from 'aos';
import React, {useEffect} from 'react';
import Work from './component/Work/Work';
import Blog from './component/Blog/Blog';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
	useEffect(() => {
		AOS.init({
			duration : 400
		});
	}, []);
	return (
		<BrowserRouter>
			 <Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/work" element={<Work />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
