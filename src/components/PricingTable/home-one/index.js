import React from 'react';
import SectionTitle from "../../SectionTitles/SectionTitle";
import PricingList from  './PricingList'
import pricingData from '../../../data/PricingTable/pricingTable'
  

const Pricing  = ({classes}) => {
    return (
		<section className={`pricing-section ${classes}`} id="pricing"> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Our Special Plan" 
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        pricingData.map(pricing=>(
                            <PricingList
                                key={pricing.id} 
                                planName={pricing.planName}
                                currencyType={pricing.currencyType}
                                planPrice={pricing.planPrice}
                                subscribePlan={pricing.subscribePlan}
                                planFeatures={pricing.planFeatures}
                                buttonLink={pricing.buttonLink}
                            />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Pricing;