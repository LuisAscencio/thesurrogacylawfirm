import PropTypes from "prop-types";
import React, { Fragment } from "react";

import Footer from "../components/Footer/footer";  
import Navbar from "../components/Header/Navbar/NavbarTwo";

const LayoutTwo = ({ children }) => {
  return (
    <Fragment>
      <div className="layoutTwo"> 
        <Navbar />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutTwo;
