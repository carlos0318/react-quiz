// import { CSSProperties } from "react";

// export const buttonStyles: CSSProperties = {
//   backgroundColor: "#fafafa",
//   padding: "10px 20px",
// };

import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
`;

export const AppTitle = styled.h1`
  margin: 25px 0;
  font-size: 3rem;
`;

export const AppScore = styled.h2`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #011a2c;
  color: #fff;
  margin-top: 20px;
`;

export const Card = styled.div`
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

  padding: 20px;
  background-color: #fff;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const CardButton = styled.button<ButtonWrapperProps>`
  margin-top: 10px;
  width: 100%;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  background-color: ${({correct, userClicked})=> correct ? '#2ecc71' : userClicked ? '#e74c3c' : '#1b83b3'}};
  padding: 3px;

  :hover {
    opacity: 0.8;
  }
`;

