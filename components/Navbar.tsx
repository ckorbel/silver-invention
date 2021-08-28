import React from "react";
import NextLink from "next/link";
import styled from "styled-components";

const NavStyled = styled.nav`
  border: 1px solid red;
  overflow: hidden;
  width: 100%;
  a {
    float: left;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;

const RightContainerStyled = styled.div`
  float: right;
`;

const Navbar: React.FC = () => {
  return (
    <NavStyled className="topnav">
      <NextLink href="/">Chris Korbel</NextLink>
      <RightContainerStyled>
        <NextLink href="/about">About</NextLink>
        <NextLink href="/blog">Blog</NextLink>
      </RightContainerStyled>
    </NavStyled>
  );
};

export default Navbar;
