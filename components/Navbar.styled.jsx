import styled from "styled-components";
import * as color from "../theme/GlobalColors";
import * as typeface from "../theme/GlobalFonts";
import { media } from "../theme/MediaQueries";

export const NavContainer = styled.div`
  position: fixed;

  background-color: #141414;
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NavDiv = styled.div`
  z-index: 1000;
  display: flex;

  width: 100vw;

  transition: background 1s;
  justify-content: space-between;
  align-items: center;

  color: ${color.$white};
  padding: 0 7rem;
`;

export const HamburgerDiv = styled.div`
  z-index: 1000;
  display: flex;

  flex-direction: column;
  align-items: flex-end;

  cursor: pointer;

  /* &:first-child {
    transform: ${({ open }) =>
    open ? "rotate(45deg) translate(3px, 8px)" : ""};
  }
  &:last-child {
    transform: ${({ open }) =>
    open ? "rotate(-45deg) translate(0px, -3px)" : ""};
  } */
`;

export const NavHamburger = styled.div`
  z-index: 1000;
  height: 0;
  width: 2rem;

  background-color: ${({ open }) =>
    open ? "1px solid ${color.$white}" : "1px solid ${color.$white}"};
  border: ${({ open }) => (open ? "1px solid black" : "1px solid white")};

  &:first-child {
    margin-bottom: 0.7rem;
  }
`;

export const NavMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "hidden")};

  justify-content: column;

  position: absolute;

  white-space: nowrap;
  overflow: hidden;

  bottom: 0;
  transform: ${({ open }) => (open ? "translateY(90%)" : "translateY(0)")};
  height: ${({ open }) => (open ? "100vh" : "0")};

  width: 100vw;

  flex-direction: column;

  transition: ${({ open }) =>
    open ? "all 0.5s ease-in-out" : "all 0.7s ease-in-out"};
`;

export const MenuItemsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  background-color: ${color.$white};

  height: 100vh;
  width: 100vw;

  overflow: hidden;

  padding: 3rem;
`;

export const MenuItems = styled.a`
  font-size: ${typeface.$xl};
  color: ${color.$black};

  margin-bottom: 1rem;
`;

export const NavLogo = styled.div`
  background-image: ${({ open }) =>
    open ? "url('AULLogoBlack.png')" : "url('LogoAUL.png')"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1000;
  cursor: pointer;

  height: 3.5rem;
  width: 8rem;
`;

export const NavCart = styled.div`
  background-image: ${({ open }) =>
    open ? "url('/cartBlack.svg')" : "url('/cart.svg')"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  z-index: 1000;
  cursor: pointer;

  height: 1.6rem;
  width: 1.6rem;
`;
