import React, { useEffect, useState } from "react";
import {
  ButtonLeftRight,
  HeroContainer,
  HeroDiv,
  HeroMidDiv,
  HeroTextDiv,
  HeroText,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroDiv>
        <HeroMidDiv>
          <ButtonLeftRight> &lt; </ButtonLeftRight>
          <HeroTextDiv>
            <HeroText>AUL MERCH</HeroText>
          </HeroTextDiv>
          <ButtonLeftRight> &gt; </ButtonLeftRight>
        </HeroMidDiv>
      </HeroDiv>
    </HeroContainer>
  );
};
