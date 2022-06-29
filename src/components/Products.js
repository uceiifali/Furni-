import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";
const Products = () => {
  const { title, subtitle } = products;
  return (
    <section className="section text-center">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <h2 className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </h2>
        </div>
        {/* // Slider */}
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
