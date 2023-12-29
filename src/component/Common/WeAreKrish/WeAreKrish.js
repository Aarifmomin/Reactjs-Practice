import React from "react";
import getkrishdata from "./WeAreKrish-Data.json";

const WeAreKrish = ()=> {

    const newdata = getkrishdata.WAKData;
    const newCompData = getkrishdata.Companydata;

    return(
        <>
        {
            newdata.map((item, i)=>
                <section className="we-are-krish fw" area-background="light" id="gototop" key={i}>
                    <div className="container">
                        <div className="row flex wrap">
                            <div className="inner-title fw" data-aos="fade-up">{item.title}</div>
                            <div className="wak-content jcsb flex">
                                <div className="wak-left" data-aos="fade-up" data-aos-duration="500">
                                    <p className="fw">{item.subText}</p>
                                </div>
                                <div className="wak-right">
                                    <p className="fw" data-aos="fade-up" data-aos-duration="1000">
                                        {item.paragraph}
                                    </p>
                                    <ul className="row">
                                        {
                                            newCompData.map((data, i) =>
                                                <li key={i} data-aos="fade-up" data-aos-duration={data.animationDuration}>
                                                    <h3>{data.number}</h3>
                                                    <span>{data.text}</span>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <div data-aos="fade-up" data-aos-duration="3500" className="fw"><a href="/" className="more-link">Know More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
            )
        }
        </>
    )
}

export default WeAreKrish;