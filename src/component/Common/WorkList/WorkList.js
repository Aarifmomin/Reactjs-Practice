import React, { useState } from "react";
import workdata from "./data.json";
import SelectData from "./SelectData";

const WorkList = () => {

  const [valuetype, setValuetype] = useState('');

  return (
    <div className="content fw">
      <div className="work container">
        <section className="work-form fw" area-background="light">
          <div className="action-text">
            {workdata.TitleBlock.map((titleElem, i) => (
              <>
                <div className="row jcsb" key={i}>
                  <h2 className="fw">{titleElem.title}</h2>
                  <p className="sub-title fw">{titleElem.subtitle}</p>
                </div>                
              </>
            ))}
          </div>
		  <div className="action-form">
				<div className="row jcsb">
				{workdata.SortCategory.map((catElem, i) => (
					<SelectData catElem={catElem} valuetype={valuetype} setValuetype={setValuetype} />
				))}
				</div>
			</div>
        </section>
        <section className="work-list-content fw" area-background="light">
          {workdata.WorkList.map((items, i) => (
            <div className="work-list row" key={i}>
              <div className="wl-info">
                <div className="wl-info-content">
                  <div className="top-section">
                    <div className="image">
                      <img
                        src={items.logo}
                        alt="eyebou"
                        title="eyebou"
                        width="128"
                        height="40"
                      />
                    </div>
                    <span className="country">{items.country}</span>
                  </div>
                  <p>{items.text}</p>
                  <div className="web-info">
                    <label>Model</label>
                    <span>{items.model}</span>
                  </div>
                  <div className="web-info">
                    <label>INDUSTRY</label>
                    <span>{items.industry}</span>
                  </div>
                  <div className="link">
                    <a href="/">
                      <span>View Case Study</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="wl-image">
                <img
                  src={items.image}
                  alt="eyebou"
                  title="eyebou"
                  width="1120"
                  height="550"
                />
              </div>
            </div>
          ))}

          <div className="load-more fw text-center">
            <a href="/" className="load-btn">
              Load More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkList;
