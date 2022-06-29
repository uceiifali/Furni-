import React from "react";

// import components
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/Newsletter";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
