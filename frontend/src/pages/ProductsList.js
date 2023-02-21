import styled from "styled-components";
import Product from "../components/Product";
import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartContext from "../context/CartContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  height: 100%;
  background-color: #e9f5db;
`;

const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9f5db;
  padding: 5%;
`;
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [sortByCost, setSortByCost] = useState("");
  const cartContext = useContext(CartContext);

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

  useEffect(() => {
    const sortProductsByCost = (order) => {
      if (order === "asc") {
        setProducts([...products].sort((a, b) => a.cost - b.cost));
      } else {
        setProducts([...products].sort((a, b) => b.cost - a.cost));
      }
    };
    if (sortByCost) {
      sortProductsByCost(sortByCost);
    }
  }, [products, sortByCost]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <div>
          <Filter>
            Sort By Cost:
            <select
              value={sortByCost}
              onChange={(event) => setSortByCost(event.target.value)}
            >
              <option value="">None</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </Filter>
        </div>
        <Container>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={cartContext.addProduct}
            />
          ))}
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default ProductsList;
