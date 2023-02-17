import { useState } from "react";
import styled from "styled-components";

const Search = styled.div`
  border: 0.5px solid green;
  border-radius: 4px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: transparent;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  border: none;
  background-color: white;
  z-index: 3;
  width: 100%;
`;

const SearchContainer = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = products.filter((product) =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Search>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products"
      />
      <ul>
        {filteredItems.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </Search>
  );
};

export default SearchContainer;
