import React from "react";
import styled from "styled-components";

const SocialButtonsContainterStyled = styled.div`
  .fa {
    padding: 15px;
    font-size: 24px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
  }

  .fa:hover {
    opacity: 0.7;
  }
  .fa-linkedin {
    background: #007bb5;
    color: white;
  }

  .fa-google {
    background: #dd4b39;
    color: white;
  }

  .fa-twitter {
    background: #55acee;
    color: white;
  }

  .fa-github {
    background: black;
    color: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <SocialButtonsContainterStyled>
        <a href="https://twitter.com/ckorbel15" className="fa fa-twitter"></a>
        <a
          href="https://www.linkedin.com/in/chris-korbel-7b457638/"
          className="fa fa-linkedin"
        ></a>
        <a href="#" className="fa fa-google"></a>
        <a href="https://github.com/ckorbel" className="fa fa-github"></a>
      </SocialButtonsContainterStyled>
    </footer>
  );
};

export default Footer;
