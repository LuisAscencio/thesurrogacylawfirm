import React from 'react';
 
const COntactInfo = () => {

    return (

      <div className="row">
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_pin_alt"></i>
            <p>company name </p>
            <h4>California, USA</h4>
        </div>
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_phone"></i>
            <p>Toll Free Number</p>
            <h4>0 (245) 378-6748</h4>
        </div>
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_clock_alt"></i>
            <p>Opening Hours</p>
            <h4>Mon-Fri 9am - 6pm</h4>
        </div>
      </div>

    );
}

export default COntactInfo;