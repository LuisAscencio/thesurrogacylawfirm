import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader'
import Services from '../components/Services/home-one'
import Funfact from '../components/FunFact/home-one'
import Testimonial from '../components/Testimonials/home-one';
import LogoContainer from '../components/BrandLogo';

const servicePage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>The Surrogacy Law Firm | What We Do</title>
				<meta
					name="description"
					content="The Surrogacy Law Firm What We Do page."
				/>
			</MetaTags>
			<LayoutOne>
				<div className="service-page">
					<PageHeader
						bgImg={require('../assets/images/bannerhorizontal2.jpg')}
						title="Our Services"
					/>
					<Services />
					{/* <Funfact classes="funfact_serv" />
					<Testimonial />
					<LogoContainer /> */}
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default servicePage;



