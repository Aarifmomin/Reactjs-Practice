import React from "react";
import blockdata from './data.json';

const PlateformAgnostic = ()=> {

    return(
        <>
        {
            blockdata.map((item, i)=>
        
            <section key={i} className="platform-agnostic ColumnOneThird" area-background="light">
				<div className="container">
					<div className="row">
						<div className="left-col">
							<h2>{item.title}</h2>
							<div className="sub-title">{item.subtext}</div>
							<div className="capabilities-blk">
								<p>{item.detailtext}</p>
								<div className="arrow-link-wrap">
									<a href="/" className="arrow-link">{item.link}</a>
								</div>
							</div>
						</div>
						<div className="right-col">
							<div className="right-col-wrap row">
                                {
                                    item.blocks.map((post, i) =>
                                    
										<div key={i} className="logo-content-blk" data-aos>
											<div className="inner-content">
												<div className="logo-blk">
													<figure>
														<img src={post.image} width={post.width} height={post.height} alt="" />
													</figure>
												</div>
												<div className="content-blk">
													<p>{post.text}</p>
													<a className="arrow-link arrow-without-link">&nbsp;</a>
												</div>
											</div>
										</div>
									)
								}
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

export default PlateformAgnostic;