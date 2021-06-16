import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
 
    <div className="base-header">
        <h3>{title}</h3>  
    </div>
    
  ); 
};

SectionTitle.propTypes = {
    title: PropTypes.string,
  subtitle: PropTypes.string
};

export default SectionTitle;
