import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({ title, smallTitle }) => {
  return (
 
    <div className="base-header2"> 
        <h3><small>{smallTitle}</small>{title}</h3>
    </div>
    
  ); 
};

SectionTitle.propTypes = {
    title: PropTypes.string,
  subtitle: PropTypes.string
};

export default SectionTitle;
