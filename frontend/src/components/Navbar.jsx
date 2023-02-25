import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

const Container = styled.div`
  height: 10vh;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: 9999;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.themeMode === "light" ? "white" : "#222"};
  color: ${(props) => (props.themeMode === "light" ? "#222" : "white")};
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

/* const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`; */

const SearchContainer = styled.div`
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
  background-color: ${(props) =>
    props.themeMode === "light" ? "white" : "#222"};
  color: ${(props) => (props.themeMode === "light" ? "#222" : "white")};
  z-index: 3;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  @media (max-width: 768px) {
    flex: 2;
    padding-top: 3%;
  }
`;

const Logo = styled.img`
  height: 10vh;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex: 3;
    padding-top: 3%;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  background-color: transparent;
`;

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { itemCount } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(itemCount);
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    setCartCount(itemCount);
  }, [itemCount]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
      setCartCount(0);
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSignin = async () => {
    try {
      await logout();
      navigate("/signin");
      setCartCount(0);
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleCartClick = () => {
    setCartCount(itemCount);
  };

  return (
    <Container>
      <Wrapper themeMode={themeMode}>
        <Left>
          <Link to="/account">
            <Logo src="https://logos-world.net/wp-content/uploads/2022/11/Sprouts-Farmers-Market-Logo.png" />
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input
              themeMode={themeMode}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <SearchIcon style={{ color: "gray", fontSize: 18 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            {user ? (
              <Button variant="text" color="success" onClick={handleLogout}>
                LOG OUT
              </Button>
            ) : (
              <Button variant="text" color="success" onClick={handleSignin}>
                SIGN IN
              </Button>
            )}
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={totalItems} color="success">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon onClick={handleCartClick} />
              </Link>
            </Badge>
          </MenuItem>
          <MenuItem>
            <IconButton onClick={toggleTheme}>
              {themeMode === "light" ? <LightModeIcon /> : <NightlightIcon />}
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
