import React from "react";
import styled from "styled-components";

const AboutStyled = styled.div`
  // background: #f9f9ff;
  width: -webkit-fill-available;
  padding-bottom: 3rem;
  padding-top: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

const About: React.FC = () => {
  return (
    <AboutStyled>
      <div>
        <h3>Hey, I'm Chris Korbel</h3>
        <p>
          Hey, I'm Chris! I'm a software engineer with passion for highly
          performant data tools & products trying make it easy to understand
          large, complex data with data visualization.
        </p>
      </div>
      <div>
        <h4>Connect</h4>
        <a>GitHub</a>
        <a>Twitter</a>
        <a>LinkedIn</a>
        <a>Email</a>
      </div>
    </AboutStyled>
  );
};

export default About;
