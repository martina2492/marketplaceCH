import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import HeroSection from "../components/HeroSection";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
