import React from "react";
import { redirect } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { SignInButton } from "./Signin";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9f5db;
  min-height: 100vh;
  padding: 24px;
`;

const ProfilePicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: -80px;
  z-index: 5;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  padding: 80px 24px 24px 24px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
`;

const UserInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;
`;

const UserInfoLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #1d953f;
  margin-right: 16px;
`;

const UserInfoValue = styled.div`
  font-size: 18px;
  color: #333333;
`;

const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileContainer>
        <ProfilePicture src="https://media.istockphoto.com/id/1224664031/vector/cheerful-female-enjoying-time-on-social-media-blogger-creative-people-social-network.jpg?s=612x612&w=0&k=20&c=7jgZUtkKmvrykKP3ydXaLjyGYjyBQ8AK_oK2dhnV_qk=" />
        <UserInfoContainer>
          <UserInfoRow>
            <UserInfoLabel>Name:</UserInfoLabel>
            <UserInfoValue>Martina R.</UserInfoValue>
          </UserInfoRow>

          <UserInfoRow>
            <UserInfoLabel>Phone:</UserInfoLabel>
            <UserInfoValue>555-555-5555</UserInfoValue>
          </UserInfoRow>
          <SignInButton variant="contained" color="succes">
            Edit Profile
          </SignInButton>
        </UserInfoContainer>
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;
