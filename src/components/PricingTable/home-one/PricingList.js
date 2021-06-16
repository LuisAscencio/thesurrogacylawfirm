import React from 'react';  
import {Link} from 'react-router-dom';
import List from "../../UI/List";
import LI from "../../UI/List/Item"

//Background Image
import pricingBg from '../../../assets/images/pricing_back.jpg'

const PricingItem = ({planName,currencyType,planPrice,subscribePlan,planFeatures,buttonLink}) => {
    return (

	<div className="col-md-4 col-sm-12"> 
		{/* Start: pricing-box */}
		<div className="pricing-box">
			<div className="pricing_heading" style={{backgroundImage: `url("${pricingBg}")`}} > 
				<h4> {planName}</h4>
				<h2><span>{currencyType}</span>{planPrice}<sub>/{subscribePlan}</sub></h2>
			</div> 
			<List classes="price-list">
				{
					planFeatures.map((feature,indx)=>(
						<LI key={indx}> <i className="icon_check_alt2"></i> {feature}</LI>
					))
				}
			</List> 
			<div className="text-center"> 
				<Link to={`${process.env.PUBLIC_URL + buttonLink}`} className="more-link"> order now </Link>
			</div>
		</div>
		{/* End: pricing-box */}
	</div>

    );
};

export default PricingItem;