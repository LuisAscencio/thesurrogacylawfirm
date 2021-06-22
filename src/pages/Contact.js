import React , {Fragment } from 'react';  
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import ContactForm from '../components/ContactForm'
import PageHeader from '../components/PageHeader'

const ContactPage = () => {
    
    return(

        <Fragment>
            <MetaTags>
              <title>The Surrogacy Law Frim| Contact Us</title>
              <meta
                name="description"
                content="MThe Surrogacy Law Frim Contact Us page"
              />
            </MetaTags>

            <LayoutOne>
              <PageHeader
                bgImg={require('../assets/images/banneraboutus.jpg')}
                title="Contact Us" 
              />
              
              <ContactForm />
 
            </LayoutOne>
        </Fragment>

      );
  }

     

export default ContactPage;   