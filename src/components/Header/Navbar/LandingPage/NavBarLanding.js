import React,{Component} from 'react';
import NavBarItem from './NavBarItem' 
import MobileMenu from "../../../mobile-menu/MobileMenu";
import MobileBtn from "../../../mobile-menu/MobileBtn";
import {Link} from "react-router-dom";

//Logo 
import logo from '../../../../assets/images/logo.png'

 
class Navbar extends Component{
 
    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e)=>{
        const header = document.querySelector('.menu_area');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };


    render(){
        return (

            <div className="menu_area">	 
                <div className="navigation">
                    <div className="container"> 
                        <div className="row">
                            <div className="col-sm-12">
                            
                                {/* Logo */}
                                <div className="header_logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}> 
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>

                            
                                {/* Mobile Menu */}

                                <MobileBtn />

                                <MobileMenu />

                                {/* End:  Mobile Menu */}

                            
                                {/* Start:  NAVIGATION  */}
                
                                <div id="navigation">
                                
                                    <NavBarItem />

                                </div>

                                {/* End: NAVIGATION  */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Navbar;