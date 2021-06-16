import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import SliderPromo from '../components/SliderPromo'
import Slider from '../components/Slider/SliderTwo'
import About from '../components/About/home-two'
import Service from '../components/Services/home-two'
import Video from '../components/Video'
import Gallery from '../components/Gallery/GalleryTwo'
import Team from '../components/Team/home-two';
import Funfact from '../components/FunFact/home-two'
import PricingTable from '../components/PricingTable/home-two';
import Testimonial from '../components/Testimonials/home-two';
import Blog from '../components/Blog/home-two';
import LogoContainer from '../components/BrandLogo';


const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Elizah | Home Two</title>
        <meta
          name="description"
          content="Multipage Business  React JS Template."
        />
      </MetaTags>
      <LayoutTwo>

        <Slider />
        <SliderPromo />
        <About />
        <Service />
        <Video />
        <Gallery />
        <Team />
        <Funfact />
        <PricingTable />
        <Testimonial />
        <Blog />
        <LogoContainer />

      </LayoutTwo>
    </Fragment>
  );
};

export default Home;
