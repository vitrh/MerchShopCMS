import styled from "styled-components";
import * as color from "../theme/GlobalColors";
import * as typeface from "../theme/GlobalFonts";
import { media } from "../theme/MediaQueries";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-image: url("/HeroBildWithMoon.png");
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;

  padding: 6rem 0rem 4rem 0rem;
`;

export const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60vh;
  width: 100vw;
`;

export const HeroMidDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLeftRight = styled.a`
  display: inline-block;

  background-color: ${color.$white};
  color: ${color.$black};
  width: 4.5rem;
  height: 4rem;

  border-radius: 50%;
  border: solid 2px ${color.$black};
  text-align: center;

  overflow: hidden;
  font-weight: bold;
  font-size: 1.5rem;
  transition: 0.2s;

  :hover {
    background: ${color.$gray};
  }
`;

export const HeroTextDiv = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 35rem;
  height: 6rem;

  margin: 0 2rem 0;

  background: rgba(20, 20, 20, 0.72);
`;

export const HeroText = styled.h1`
  color: ${color.$white};
  font-weight: ${typeface.$regular};
  font-size: ${typeface.$xl4};
  text-align: center;
`;

export const SwitchButton = styled.div``;
