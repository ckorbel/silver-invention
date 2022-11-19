import React from "react";
import styled from "styled-components";

interface SidebarProps {}

const ContainerStyled = styled.div`
  border: 3px solid red;
  display: table-cell;
  width: 40%;
  vertical-align: top;

  ul {
    padding-left: 0;
    width: 200px;
  }

  li {
    list-style: none;
  }
`;

const ExperimentSidebar: React.FC<SidebarProps> = () => {
  return (
    <ContainerStyled>
      <ul>
        <li>Home</li>
        <li>View By Team</li>
        <li>By Metric</li>
      </ul>
    </ContainerStyled>
  );
};

export default ExperimentSidebar;
