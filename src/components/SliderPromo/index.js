import React from 'react';
import PromoList from './PromoList';
import PromosData from '../../data/SliderPromo/promo'; 


function PromoContainer() {
    return (
        <div className="header_promo">
            <div className="container"> 
                <div className="row">
                    {PromosData.map(promo=>(
                        <PromoList 
                            key={promo.id} 
                            title={promo.title} 
                            text={promo.text} 
                            bgImg={promo.bgImg}
                            icon={promo.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PromoContainer;