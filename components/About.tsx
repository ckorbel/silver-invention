import React from "react";
import styled from "styled-components";

const AboutStyled = styled.div`
  background: #f9f9ff;
`;

const About: React.FC = () => {
  return (
    <AboutStyled>
      <h3>Chris Korbel</h3>
      <p>
        Hey, I'm Chris! I'm a software engineer with passion for highly
        performant data tools & products trying make it easy to understand
        large, complex data usually with data visualization.
      </p>
    </AboutStyled>
  );
};

export default About;
