import React from "react";
import styled from "styled-components";

interface SidebarProps {
  teams: string[];
}

const ContainerStyled = styled.div`
  border: 3px solid red;
`;

const Sidebar: React.FC<SidebarProps> = ({ teams = [] }) => {
  return (
    <ContainerStyled>
      <ul>{teams && teams.map((team) => <li key={team}>{team}</li>)}</ul>
    </ContainerStyled>
  );
};

export default Sidebar;
