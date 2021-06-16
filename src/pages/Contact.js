import React , {Fragment } from 'react';  
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import ContactForm from '../components/ContactForm'
import PageHeader from '../components/PageHeader'

const ContactPage = () => {
    
    return(

        <Fragment>
            <MetaTags>
              <title>Elizah | Contact Us</title>
              <meta
                name="description"
                content="Multipage Business  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
              <PageHeader
                bgImg={require('../assets/images/page_bg.jpg')}
                title="Contact Us" 
              />
              
              <ContactForm />
 
            </LayoutOne>
        </Fragment>

      );
  }

     

export default ContactPage;   