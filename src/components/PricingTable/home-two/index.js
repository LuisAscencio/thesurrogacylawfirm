import React from 'react';
import SectionTitle from "../../SectionTitles/SectionTitleTwo";
import PricingList from  './PricingList'
import pricingData from '../../../data/PricingTable/pricingTable'
  

const Pricing  = ({classes}) => {
    return (
		<section className="pricing-section pricing_section_v2" id="pricing"> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					smallTitle=" Our pricing " 
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
                                text={pricing.text}
                            />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Pricing;