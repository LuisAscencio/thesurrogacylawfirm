import React from 'react'; 
import ContactInfo from './ContactInfo'
import Form from './Form'
import SectionTitle from "../SectionTitles/SectionTitle";
  
const ContactForm = () => {

    return (
        <div className="contact-section" id="contact">
            <div className="container"> 
                {/* Heading */}
                <SectionTitle
                  title="contact us" 
                />
                {/* End: Heading */}
                <div className="row inner-contact"> 
                    
                      <div className="col-sm-12 contact_info">
                          <ContactInfo />
                      </div>

                      <div className="col-sm-12">
                          <Form />
                      </div>
                       
                </div> 
            </div> 
        </div>

    );
}

export default ContactForm;