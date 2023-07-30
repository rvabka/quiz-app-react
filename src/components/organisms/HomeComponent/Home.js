import React, { useContext, useState, createContext } from "react";
import logo from "./logo.svg";
import {
  FlexContainer,
  Logo,
  Title,
  SubTitle,
  Paragraph,
  PlayBtn,
  BtnContainer,
} from "./Home.styles";
import FadeIn from "react-fade-in";
import "./flex.css";

const Home = () => {

  return (
    <FlexContainer>
      <FadeIn transitionDuration={600} delay={150} className="flexStyle">
        <div className="flexStyle">
          <Logo className="image" src={logo}></Logo>
        </div>
        <Title>Quizzles</Title>
        <SubTitle>Let's Play!</SubTitle>
        <Paragraph>Play now and Level up</Paragraph>
      </FadeIn>
      <BtnContainer>
        <PlayBtn to="/levels">Play Now</PlayBtn>
      </BtnContainer>
    </FlexContainer>
  );
};

export default Home;
