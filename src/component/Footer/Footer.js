import React from 'react';

const Footer = ()=> {
    return(
        
        <footer className="fw">
            <div className="get-started fw text-center parallax-banner"  area-background="dark" style={{background:"url('images/antidote_img.jpg')"}}>
                <div className="gs-content">
                    <div className="container">
                        <h3 className="fw">We are antidote to boring commerce</h3>
                        <div className="button fw text-center"><a href="/" className="let-talk-link">Let's Talk</a></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom fw">
                <div className="f-container">
                    <div className="f-content">
                        <div className="top fw text-center">
                            <ul className="left">
                                <li><a href="/">Terms</a></li>
                                <li><a href="/">Privacy</a></li>
                            </ul>
                            <ul className="center social">
                                <li><a href="/" className="twitter">&nbsp;</a></li>
                                <li><a href="/" className="linkedin">&nbsp;</a></li>
                                <li><a href="/" className="fb">&nbsp;</a></li>
                            </ul>
                            <ul className="right country">
                                <li>
                                    <a href="/">USA</a>
                                    <div className="tooltip">
                                        <strong className="fw">Walnut, CA</strong>
                                        <a href="mailto:biz@krishtechnolabs.com">biz@krishtechnolabs.com</a>
                                        <span className="fw">+1 913 206 0077<span className="seperator">|</span>2:23 am (PST)</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">UAE</a>
                                    <div className="tooltip">
                                        <strong className="fw">Dubai</strong>
                                        <a href="mailto:biz@krishtechnolabs.com">biz@krishtechnolabs.com</a>
                                        <span className="fw">+971 543341033<span className="seperator">|</span>1:34 pm (GST)</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">ANZ</a>
                                    <div className="tooltip">
                                        <strong className="fw">Australia</strong>
                                        <a href="mailto:biz@krishtechnolabs.com">biz@krishtechnolabs.com</a>
                                        <span className="fw">+61-2-8003-3327 <span className="seperator">|</span>07:45 pm (AEST)</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">UK</a>
                                    <div className="tooltip">
                                        <strong className="fw">Greater London</strong>
                                        <a href="mailto:biz@krishtechnolabs.com">biz@krishtechnolabs.com</a>
                                        <span className="fw">+44 2037694814<span className="seperator">|</span>10:40 am (BST)</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">INDIA</a>
                                    <div className="tooltip">
                                        <strong className="fw">Ahmedabad</strong>
                                        <a href="mailto:biz@krishtechnolabs.com">biz@krishtechnolabs.com</a>
                                        <span className="fw">+91 7575025646<span className="seperator">|</span>3:13 pm (IST)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom fw">
                            <p>Krishtechnolabs takes privacy and security very seriously. We store all data securely within the EU and we will not sell or share your data with any third parties. For more information, please view our Privacy Policy.</p>
                            <span>© Krish TechnoLabs <br />All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;