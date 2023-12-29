import React, {useState} from 'react';
import Menudata from './Menudata.json';
import {Link} from "react-router-dom";

const Menu = ()=> {

	const [menuClass, setmenuClass] = useState(false);
	const toggleClass= ()=> {
		setmenuClass(!menuClass);
	};
	const MenuListdata = Menudata.MenuList;
	const BottomMenu = Menudata.secondaryMenu;

	return(
		<>
			<div className="mega-menu">				
				<div className="menu-icon" onClick={toggleClass}><span className={`bar ${menuClass ? 'bar--active' : ''}`}></span></div>					
				<div className={`mm-overlap ${menuClass ? 'open' : ''}`}>
					<div className="mm-content container">
						<ul className="mm-list">
							{
								MenuListdata.map((post,i) =>{
									return (
										<li key={i}>
											<Link to={`${post.link}`}>{post.name}</Link>
										</li>	
									)
								})
							}
						</ul>
						<ul className="mm-sub-link">
							{
								BottomMenu.map((item,i) => {
									return(
										<li key={i} className={`${item.class ? `${item.class}`:''}`}>
											<Link to={`${item.link}`}>{item.name}</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>				
			</div>
		</>
	)
}

export default Menu;