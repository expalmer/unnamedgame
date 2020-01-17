import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const GlobalStyle = props => (
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
        font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
        background: #000;
      }
    `}
  />
)

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

`

export const ItemInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  transform: translate3d(0, 0, 0);
  animation-duration: .1s;
  transition-duration: .1s;
  @keyframes isLeft {
    from {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(58px, 0, 0) scale3d(0.9, 0.6, 0.7);

    }
    20%,
    53%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0) scale(1);
    }
    40%,
    43% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(-5px, 0px, 0) scale3d(0.9, 0.6, 0.7);
    }

    70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(-2px, 0, 0) scale3d(0.9, 0.1, 0.7);
    }

    90% {
        transform: translate3d(-2px, 0, 0) scale3d(0.6, 0.6, 0.7);
    }
  }
  @keyframes isRight {
    from {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(-58px, 0, 0) scale3d(0.9, 0.6, 0.7);;
    }
    20%,
    53%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0) scale3d(1);
    }
    40%,
    43% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(-5px, 0px, 0) scale3d(0.9, 0.6, 0.7);
    }

    70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(-2px, 0, 0);
    }

    90% {
        transform: translate3d(-2px, 0, 0);
    }
  }
  @keyframes isTop {
    from {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0 ,58px, 0);
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
      transform: translate3d(0 -58px, 0);
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
        transform: translate3d(0, -2px, 0);
    }

    90% {
        transform: translate3d(0, -2px, 0);
    }
  }
  ${p => p.color === 'red' && 'background: linear-gradient(to right, #ec4545, #ec4545);'}
  ${p => p.color === 'blue' && 'background: linear-gradient(to right,#4378d8,#4378d8);'}
  ${p => p.color === 'green' && 'background: linear-gradient(to right,#67dc67,#67dc67);'}
  ${p => p.color === 'yellow' && 'background: linear-gradient(to right,#FFEB3B,#FFEB3B);'}
  ${p => p.color === 'orange' && 'background: linear-gradient(to right,#fd9121,#fd9121);'}
  ${p => p.color === 'white' && 'background: #ffffff;'}
  ${p => p.mini && 'width: 20px; height: 20px;'}
  ${p => p.position && p.position === 'isLeft' && 'animation-name: isLeft;'}
  ${p => p.position && p.position === 'isRight' && 'animation-name: isRight;'}
  ${p => p.position && p.position === 'isBottom' && 'animation-name: isBottom;'}
  ${p => p.position && p.position === 'isTop' && 'animation-name: isTop;'}
`

export const Item = styled.div`
  top: 0;
  width: 60px;
  height: 60px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform .4s ease;
  z-index:2;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  ${p => `left: ${p.x * 60}px; top: ${p.y * 60}px;`}
  ${p => p.mini && `
    width: 20px;
    height: 20px;
    left: ${p.x * 20}px!important; top: ${p.y * 20}px!important;
  `}
`

export const Board = styled.div`
  width: 300px;
  height: 300px;
  /* margin: 40px; */
  position: relative;
  background: #111;
  ${p => p.mini && `
    width: 100px;
    height: 100px;
  `
  }
`

export const Finished = styled.h1`
  width: 100%;
  top: 0;
  position: absolute;
  color: #000;
  font-size: 18px;
`

