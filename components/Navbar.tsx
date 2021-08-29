import React from "react";
import NextLink from "next/link";
import styled from "styled-components";

const NavStyled = styled.nav`
  font-family: "Poppins", sans-serif;
  color: #222222;
  overflow: hidden;
  width: 100%;
  a {
    float: left;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 24px;
  }
  a:hover {
    color: #8490ff;
  }
`;

const RightContainerStyled = styled.div`
  float: right;
  a {
    text-decoration: none;
    color: #222;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    outline: none;
    padding: 20px 35px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavStyled>
      <NextLink href="/">Chris Korbel</NextLink>
      <RightContainerStyled>
        <NextLink href="/about">About</NextLink>
        <NextLink href="/blog">Blog</NextLink>
      </RightContainerStyled>
    </NavStyled>
  );
};

export default Navbar;
