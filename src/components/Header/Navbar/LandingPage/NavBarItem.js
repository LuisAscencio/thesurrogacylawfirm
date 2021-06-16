import React from 'react'; 
import { Link } from "react-scroll";
  

const Navbar  = () => {
    return (
        <ul>
            <li> 
                <Link activeClass="active" to="top" spy={true} smooth={true} offset={-70} duration={500} >
                    Home 
                </Link>
            </li>
            <li> 
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} >
                    About 
                </Link>
            </li>
            <li> 
                <Link activeClass="active" to="service" spy={true} smooth={true} offset={0} duration={500} >
                    Service 
                </Link>
            </li>
            <li> 
                <Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={500} >
                    Work 
                </Link>
            </li>
            <li> 
                <Link activeClass="active" to="team" spy={true} smooth={true} offset={0} duration={500} >
                    Team 
                </Link>
            </li>
            <li> 
                <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={500} >
                    Pricing 
                </Link>
            </li>
            <li> 
                <Link activeClass="active" to="blog" spy={true} smooth={true} offset={0} duration={500} >
                    Blog 
                </Link>
            </li>
        </ul>

    );
}
export default Navbar;