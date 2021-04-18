import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HamburgerDiv,
  NavContainer,
  NavDiv,
  NavHamburger,
  NavLogo,
  NavCart,
  NavMenu,
  MenuItemsDiv,
  MenuItems,
} from "./Navbar.styled";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = "hidden";
    } else if (open === false) {
      document.body.style.overflow = "";
    }
  });

  return (
    <NavContainer open={open}>
      <NavDiv>
        <HamburgerDiv onClick={openMenu} open={open}>
          <NavHamburger open={open} />
          <NavHamburger open={open} />
        </HamburgerDiv>
        <NavLogo href="/" open={open} />
        <NavCart href="/" open={open} />
      </NavDiv>
      <NavMenu open={open}>
        <MenuItemsDiv>
          <MenuItems>Item</MenuItems>
          <MenuItems>Item2</MenuItems>
          <MenuItems>Item3</MenuItems>
          <MenuItems>Item4</MenuItems>
        </MenuItemsDiv>
      </NavMenu>
    </NavContainer>
  );
};
