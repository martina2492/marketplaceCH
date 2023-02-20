import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
  background-color: transparent;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;

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
  background-color: white;
  z-index: 3;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Logo = styled.img`
  height: 10vh;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  background-color: transparent;
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

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
    setCartCount();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/account">
            <Logo src="https://scontent.fmbx2-1.fna.fbcdn.net/v/t1.18169-9/22281999_10154938092665777_3117443772466335971_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SgbCOIAclpYAX_kc9Wa&_nc_ht=scontent.fmbx2-1.fna&oh=00_AfD_1pN_j2WgPatkcTUD_UlNyEdZMYPObuKvm6ZQ7OVG4g&oe=6410A612" />
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
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
            <Badge badgeContent={4} color="success">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon onClick={handleCartClick} />
              </Link>
            </Badge>
          </MenuItem>
          <MenuItem>
            <Language>EN</Language>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
