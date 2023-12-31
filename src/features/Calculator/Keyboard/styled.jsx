import styled, { css } from "styled-components";

export const Wrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 2px;
`;

export const buttonStyles = () => css`
 font-size: 32px;
 color: white;
 background-color: #00000050;
 border: none;
 width: 100px;
 height: 100px;
 transition: 0.3s;
 &:hover {
  scale: 105%;
  background-color: #00000035;
  box-shadow: 0 0 10px #00000020;
 }
 &:active {
  background-color: #00000020;
 }
`;

export const subButtonBoxStyles = () => css`
 gap: 3px;
 background: none;
 border: none;
 display: flex;
 position: absolute;
 top: -30px;
 transition: scale 0.3s;
 scale: 0;
 &:focus-within {
  scale: 1;
 }
`;

export const subButtonStyles = () => css`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 24px;
 width: 60px;
 height: 60px;
 background-color: #1b0320ee;
 color: white;
 border: none;
 box-shadow: 0px 10px 10px #00000050;
 transition: 0.3s;
 &:hover {
  scale: 105%;
  background-color: #230429;
 }
 &:focus {
  scale: 105%;
  background-color: #230429;
 }
`;

export const Number = styled.button`
 ${buttonStyles}
`;

export const Operator = styled.button`
 ${buttonStyles}
`;

export const PowersBox = styled.div`
 ${subButtonBoxStyles}
`;

export const Powers = styled.div`
 ${buttonStyles}
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 &:focus ${PowersBox} {
  scale: 1;
 }
 &:hover ${PowersBox} {
  scale: 1;
 }
`;

export const Power = styled.button`
 ${subButtonStyles}
`;

export const BracketsBox = styled.div`
 ${subButtonBoxStyles}
`;

export const Bracket = styled.button`
 ${subButtonStyles}
`;

export const Brackets = styled.div`
 ${buttonStyles}
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 &:focus ${BracketsBox} {
  scale: 1;
 }
 &:hover ${BracketsBox} {
  scale: 1;
 }
`;

export const Clear = styled.button`
 ${buttonStyles}
`;

export const Equals = styled.button`
 ${buttonStyles}
`;
