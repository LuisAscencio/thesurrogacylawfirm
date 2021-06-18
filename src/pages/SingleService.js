import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import ServiceDetails from "../templates/ServiceDetails/index";

const servicePage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>The Surrogacy Law Firm | Home</title>
		  <meta
			name="description"
			content="The Surrogacy Law Firm."
		  />
		</MetaTags> 
		<LayoutOne>

		    <ServiceDetails />

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default servicePage;



