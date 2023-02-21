import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: #e9f5db; */
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        {products.map((product) => (
          <Product key={product.index} product={product} />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Products;
