import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import Gallery from "../components/Gallery/Gallery";
import PageHeader from '../components/PageHeader'

const galleryPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>The Surrogacy Law Firm | Free Consultation FAQ's</title>
		  <meta
			name="description"
			content="Free Consultation FAQ's"
		  />
		</MetaTags>
		<LayoutOne>
			<PageHeader
				bgImg={require('../assets/images/bannerhorizontal4.jpg')}
				title="Free Consultation FAQ's" 
			/>

			<Gallery classes="work_page"/>
			
		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default galleryPage;



