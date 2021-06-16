import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import BlogDetails from "../templates/BlogDetails/index";

const singleBlogPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>Elizah | Home</title>
		  <meta
			name="description"
			content="Multipage Business  React JS Template."
		  />
		</MetaTags> 
		<LayoutOne>
 
	       <BlogDetails />		

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default singleBlogPage;



