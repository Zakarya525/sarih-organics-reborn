
import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
