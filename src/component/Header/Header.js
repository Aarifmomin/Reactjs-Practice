import React from 'react';
import Menu from './../Menu/Menu';
import {Link} from 'react-router-dom'

function Header() {	
	return(
		<>
			<header style={{background:'#000'}}>
				<div className="logo">
					<Link to="/">
						<span className="logo-image">
						<svg className="logo-char char-animate" xmlns="http://www.w3.org/2000/svg" width="17.9" height="27.2" viewBox="0 0 17.9 27.2">
						  <path id="Path_44568" data-name="Path 44568" d="M9.4,14.2c1.8-2.6,6-8.8,7.3-10.9.1-.2.2-.4.5-.4h3.5c.3-.1.3.1.3.3-1.6,2.3-6.2,8.9-8.2,11.6-.4.6-.4.8-.4,1a1.854,1.854,0,0,0,.4,1c2.1,2.9,7.7,11.2,8.6,12.8,0,.3-.1.4-.3.4H17.6c-.3,0-.6-.2-.6-.4-1.3-2.1-5.7-9.1-7.6-11.9-.3-.5-.6-.5-1.6-.5-.2,0-.2.1-.2.2V29.5c-.2.4-.3.5-.6.5H3.9a.43.43,0,0,1-.4-.4V3.2a.43.43,0,0,1,.4-.4H7a.43.43,0,0,1,.4.4v11c0,.2.2.2.4.2C8.9,14.5,9.3,14.4,9.4,14.2Z" transform="translate(-3.5 -2.8)"/>
						</svg>
						<svg className="logo-char char-animate" xmlns="http://www.w3.org/2000/svg" width="10.8" height="21.7" viewBox="0 0 10.8 21.7">
						  <path id="Path_44569" data-name="Path 44569" d="M25.6,9.1A29.391,29.391,0,0,1,32,8.3a21.166,21.166,0,0,1,3.7.2c.2,0,.2.1.2.3l-.2,2.6c0,.1-.1.2-.3.2a17.766,17.766,0,0,0-3.4-.2,8.031,8.031,0,0,0-2.7.4c-.3,0-.3.1-.3.3V29.6c0,.3-.2.4-.5.4h-3a.43.43,0,0,1-.4-.4V9.5C25.2,9.2,25.3,9.1,25.6,9.1Z" transform="translate(-25.1 -8.3)"/>
						</svg>
						<svg className="logo-char char-animate" xmlns="http://www.w3.org/2000/svg" width="4.2" height="29.7" viewBox="0 0 4.2 29.7">
						  <path id="Path_44570" data-name="Path 44570" d="M39.7,4.4a.43.43,0,0,1-.4-.4V.7a.43.43,0,0,1,.4-.4h3.4a.43.43,0,0,1,.4.4V4a.43.43,0,0,1-.4.4ZM39.8,30a.43.43,0,0,1-.4-.4V9a.43.43,0,0,1,.4-.4h3a.43.43,0,0,1,.4.4V29.6a.43.43,0,0,1-.4.4Z" transform="translate(-39.3 -0.3)"/>
						</svg>
						<svg className="logo-char char-animate" xmlns="http://www.w3.org/2000/svg" width="12.6" height="22.304" viewBox="0 0 12.6 22.304">
						  <path id="Path_44571" data-name="Path 44571" d="M48.8,30c-.1,0-.2-.1-.2-.3l.2-2.6c0-.1.2-.2.3-.2a21.834,21.834,0,0,0,4.4.4c3.4,0,4-.4,4-2.9,0-1.5-.8-2.2-4.1-4.6s-4.5-3.4-4.5-6C48.9,9.7,50.7,8,56,8a27.738,27.738,0,0,1,4.6.3c.1,0,.2.1.2.3l-.2,2.6c0,.1-.2.2-.3.2a22.3,22.3,0,0,0-3.9-.4c-3,0-4,.2-4,2.4,0,1.8.9,2.4,4.2,4.5,3.4,2.3,4.6,3.8,4.6,6.2,0,4.7-2.1,6.1-7,6.1A18.093,18.093,0,0,1,48.8,30Z" transform="translate(-48.6 -8)"/>
						</svg>
						<svg className="logo-char char-animate" xmlns="http://www.w3.org/2000/svg" width="16.3" height="29.4" viewBox="0 0 16.3 29.4">
						  <path id="Path_44572" data-name="Path 44572" d="M66.1,1a.43.43,0,0,1,.4-.4h3a.43.43,0,0,1,.4.4V8.3c0,.2.1.3.4.3a35.7,35.7,0,0,1,4.6-.4c5.5,0,7.5,1.5,7.5,7.3V29.6a.43.43,0,0,1-.4.4H79a.43.43,0,0,1-.4-.4V16c0-3.8-.8-4.8-4.6-4.8a18.325,18.325,0,0,0-3.7.3c-.3.1-.4.2-.4.4V29.6a.43.43,0,0,1-.4.4h-3a.43.43,0,0,1-.4-.4Z" transform="translate(-66.1 -0.6)"/>
						</svg>
						</span>
					</Link>
				</div>
				<Menu />
			</header>
		</>
	)
}
export default Header;