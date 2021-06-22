import React from 'react';
import {Link} from 'react-router-dom';
 

const Header = () => {
	return (
 
    <div className="header_top_area">
        <div className="container">
            <div className="row">
                {/* Address / Phone / Email*/}
                <div className="colm">
                    <div className="header_wrapper_1">
                        <ul>
                            <li><i className="icon_phone"></i> 000 000 000</li>
                            <li> <i className="icon_mail_alt"></i>thesurrogacylawfirm@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* SOCIAL ICON */}
                <div className="colm">
                    <div className="header_social"> 
                        <a href="//facebook.com">
                            <i className="fa fa-facebook"></i>
                        </a> 
                        <a href="//facebook.com">
                            <i className="fa fa-twitter"></i>
                        </a> 
                        <a href="//facebook.com">
                            <i className="fa fa-instagram"></i>
                        </a> 
                      
                    </div>
                </div>

                {/* Quote button */}
                <div className="colm">
                    <div className="header_button text-right">
                        <Link to="/contact">Free Consultation</Link>
                    </div>
                </div>
                 {/* End: Quote button */}
                 
            </div>
        </div>
    </div>
 
	)
}


export default Header;