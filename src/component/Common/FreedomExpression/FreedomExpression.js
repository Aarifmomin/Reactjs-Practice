import React from 'react';
import FEdata from './data.json';

const FreedomExpression = ()=> {
	return(
		<>
		{
			FEdata.map((item, i) =>
				<section className="freedom-section">
					<div className="container">
						<div className="top-section ColumnOneThird">
							<div className="row">
								<div className="left-col">
									<h2>{item.title}</h2>
								</div>
								<div className="right-col">
									<div className="sub-title">{item.subtext}</div>
								</div>
							</div>
						</div>
						<div className="ThreecolBlock freedom-services">
							<div className="row">
							<>
							{
								item.blockdata.map((post, i) =>
									<div className="single-col" key={i}>
										<div className="inner-blk">
											<h6>{post.title}</h6>
											<p>{post.paragraph}</p>
											<div className="dot-list">
												<ul>
													{
														post.Linkdata.map((list, i) =>
															<li><a href="/">{list.text}</a></li>
														)													
													}
												</ul>
											</div>
										</div>
									</div>
								)
							}
							</>
							</div>
						</div>
					</div>
				</section>		
			)
		}
		</>
	)
}

export default FreedomExpression;