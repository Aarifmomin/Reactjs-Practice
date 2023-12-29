import React, { useEffect, useState } from "react"
import {Link, useNavigate, generatePath} from "react-router-dom";
import Blogdata from "./data";
import SelectData from "./SelectData";

const BlogList = () => {

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [active, setActive] = useState(true);

	useEffect(()=> {
		fetch("https://krishtechnolabs.com/wp-json/wp/v2/posts/?per_page=5&page="+page).then((result)=>{
			result.json().then((resp)=>{
				if(resp.code === 'rest_post_invalid_page_number'){
					console.log('end');
					setActive(false);
					return;
				}
				setData([...data,...resp])
			})
		})
	},[page])

	const useNavigateParams = () => {
		const navigate = useNavigate();
	  
		return (url, params) => {
		  const path = generatePath(":url:queryString", {
			url,
			queryString: params
		  });
		  navigate(path);
		};
	  };
	  const navigate = useNavigateParams();
	  const[activekey, setActivekey] = useState('');

	const LoadMore = () => {
		setPage(page + 1);
		navigate("?per_page=5&page="+page,"");
	}

	return(
		<div className="content fw">
			<section className="inner-banner-section"  area-background="dark">
				<div className="inner-banner-content">
					<div className="container">
						<h1 data-aos="fade-up" data-aos-duration="500">Insights</h1>
					</div>
				</div>
			</section>
			<section className="subscribe-block" area-background="light">
				<div className="container">
					<div className="row">
						<div className="subscribe-text col-6" data-aos="fade-up" data-aos-duration="500">
							<p>Don't miss a thing!! Subscribe today to receive latest news and updates.</p>
						</div>
						<div className="subscribe-form col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
							<div className="form-block">
								<form>
									<div className="form-group">
										<label>Your Email</label>
										<input type="email" name="email" /> 
									</div>
									<div className="submit-btn">
										<input type="submit" value="Sign Up" />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="insight-section" area-background="light">
				<div className="container">
					<div className="insight-filter">
						<div className="search-box col-6">
							<form>
								<div className="form-group" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
									<input type="text" name="search" placeholder="Search here" />
									<input type="submit" className="search-submit" value="Search" />
								</div>
							</form>
						</div>
						<div className="filters col-6">
							<div className="search-filter">
								{
									Blogdata.Topic.map((data, i)=> 	
										<SelectData key={i} data={data} activekey={activekey} setActivekey={setActivekey} />	
									)
								}
							</div>
						</div>
					</div>
					<div className="insight-block-wrap">
						{
							data.map((item, i)=>
							<div key={i} className="insight-block" data-aos="fade-up" data-aos-duration="500">						
								<div className="row">
									<div className="block-image">
										<a href="/">
											<figure>
												<img src={`${item.yoast_head_json.og_image[0].url}`} alt="" title=""/>
											</figure>
										</a>
									</div>
									<div className="block-content">
										<div className="top-bl-content">
											<div className="tags">
												<span>ECOMMERCE</span>
												<span>NEWS & EVENT</span>
											</div>
											<div className="social-share">
												<span>Share on:</span>
												<ul>
													<li><a href="/" className="linkedin"></a></li>
													<li><a href="/" className="fb"></a></li>
													<li><a href="/" className="twitter"></a></li>
												</ul>
											</div>
										</div>
										<h3><Link to={`${item.slug}`}>{item.title.rendered}</Link></h3>
										<p><em>Jan 18, 2022</em> | {item.content.rendered.replace(/<\/?[^>]+>/gi, '')}</p>
										<div className="bottom-bl-content">
											<span className="read">4 min read</span>
											<span className="read-by">By: {item.yoast_head_json.author}</span>
										</div>
									</div>
								</div>
							</div>
							)
						}
						

						{
							active ? <div className="load-more text-center" data-aos="fade-up" data-aos-duration="500">
								<div onClick={LoadMore} className="btn">Load More</div>
							</div> : ''
						}
					</div>
				</div>
			</section>
		</div>
	)
}
export default BlogList;