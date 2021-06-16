import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutThree from "../layouts/LayoutThree"; 
import Slider from '../components/Slider/SliderThree'
import About from '../components/About/home-one'
import Services from '../components/Services/home-one' 
import WhyChooseUs from '../components/WhyChooseUs'
import Video from '../components/Video'
import Funfact from '../components/FunFact/home-one'
import Gallery from '../components/Gallery/Gallery'; 
import Team from '../components/Team/home-one'; 
import PricingTable from '../components/PricingTable/home-one'; 
import Blog from '../components/Blog/home-one';  
import Testimonial from '../components/Testimonials/home-one';  
import LogoContainer from '../components/BrandLogo';  
import ContactForm from '../components/ContactForm';   

 
const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Elizah | Home</title>
        <meta
          name="description"
          content="Multipage Business  React JS Template."
        />
      </MetaTags>
      <LayoutThree>
    
        <Slider />  
        <About />  
        <Services /> 
        <WhyChooseUs /> 
        <Video classes="video_land_one"/> 
        <Funfact /> 
        <Gallery /> 
        <Team /> 
        <PricingTable /> 
        <Blog /> 
        <Testimonial /> 
        <LogoContainer /> 
        <ContactForm /> 
 
      </LayoutThree>
    </Fragment>
  );
};

export default Home;
