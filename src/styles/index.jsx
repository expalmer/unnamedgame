import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import noise from "../img/noise.png";

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
        font-family: "Roboto", "HelveticaNeue", "Helvetica Neue", sans-serif;
        background: #202020;
        background-image: url(${noise});
        background-repeat: repeat;
      }
      @keyframes isLeft {
        from {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(58px, 0, 0);
        }
        20%,
        53%,
        80%,
        to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, 0, 0);
        }
        40%,
        43% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(-5px, 0, 0);
        }

        70% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(-2px, 0, 0);
        }

        90% {
          transform: translate3d(-2px, 0, 0);
        }
      }
      @keyframes isRight {
        from {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(-58px, 0, 0);
        }
        20%,
        53%,
        80%,
        to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, 0, 0);
        }
        40%,
        43% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(5px, 0, 0);
        }

        70% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(2px, 0, 0);
        }

        90% {
          transform: translate3d(2px, 0, 0);
        }
      }
      @keyframes isTop {
        from {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, 58px, 0);
        }
        20%,
        53%,
        80%,
        to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, 0, 0);
        }
        40%,
        43% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(0, -5px, 0);
        }

        70% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(0 -2px, 0);
        }

        90% {
          transform: translate3d(0, -2px, 0);
        }
      }
      @keyframes isBottom {
        from {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, -58px, 0);
        }
        20%,
        53%,
        80%,
        to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, 0, 0);
        }
        40%,
        43% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(0, 5px, 0);
        }

        70% {
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          transform: translate3d(0 2px, 0);
        }

        90% {
          transform: translate3d(0, 2px, 0);
        }
      }
      @keyframes pulse {
        from {
          transform: scale3d(1, 1, 1);
        }

        10%,
        20% {
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        }

        30%,
        50%,
        70%,
        90% {
          transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }
        40%,
        60%,
        80% {
          transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        }

        to {
          transform: scale3d(1, 1, 1);
        }
      }
    `}
  />
);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  :first-of-type {
    border: solid 1px #111;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  color: #fff;
  position: relative;
`;

export const Keys = styled.div`
  color: #444;
  margin-bottom: 100px;
`;

export const Span = styled.span`
  color: #999;
  font-weight: 600;
  margin-right: 3px;
`;

export const ItemBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 2px #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, 0, 0);
  animation-duration: 0.1s;
  transition-duration: 0.1s;
`;

export const Item = styled(ItemBase)`
  ${({ color, anime }) => `
    ${color && `background: ${color};`} 
    ${anime && `animation-name: ${anime};`}
  `}
`;

export const Board = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  background: #000;
  background-image: url(${noise});
  background-repeat: repeat;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.6),
    0 4px 8px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.6),
    0 16px 32px rgba(0, 0, 0, 0.6), 0 32px 64px rgba(0, 0, 0, 0.6);
`;

export const MiniBoard = styled(Board)`
  width: 100px;
  height: 100px;
`;

export const MiniItem = styled(ItemBase)`
  width: 18px;
  height: 18px;
  opacity: 0.4;
  animation-duration: 1s;
  transition-duration: 1s;
  animation-iteration-count: infinite;
  transform: scale3d(1, 1, 1);
  ${({ color, matched }) => `
    ${color && `background: ${color};`}
    ${color !== "#333333" && "animation-name: pulse;"}
    ${matched && `opacity: 1; animation-name: none; border-radius: 0;`}
  `}
`;

export const Finished = styled.h1`
  width: 100%;
  top: 0;
  position: absolute;
  color: #000;
  font-size: 18px;
`;
