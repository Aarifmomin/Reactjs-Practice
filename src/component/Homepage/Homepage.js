import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Banner from './../Common/Banner/Banner';
import WeAreKrish from '../Common/WeAreKrish/WeAreKrish';
import PlateformAgnostic from '../Common/PlateformAgnostic/PlateformAgnostic';
import FreedomExpression from '../Common/FreedomExpression/FreedomExpression';

const Homepage = ()=> {
    return(
        <>
            <Header />
            <div className="content">
                <Banner />
                <WeAreKrish />
                <PlateformAgnostic />
				<FreedomExpression />
            </div>  
            <Footer />
        </>
    )
}

export default Homepage;