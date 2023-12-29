import React from "react";
import {Link} from "react-scroll";

const Banner = ()=> {

    return(
        <section className="banner fw" area-background="dark">
            <div className="container">
                <div className="banner-text">
                    <h2 data-aos="fade-up">We help brands to innovate, <br/>evolve and thrive their <span>commerce</span></h2>
                    <Link className="down-arrow"  to="gototop" smooth={true}>Down arrow</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner;