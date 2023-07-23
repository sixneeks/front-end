import React from 'react';
import styled, { css } from 'styled-components';



function Button({ name, colorSet, onClick }) {
  return (
    <StButton colorset={colorSet} onClick={onClick}>
      {name}
    </StButton>
  );
}

export default Button;

const StButton = styled.button`
  text-align: center;
  min-width: 104px;
  border: 1px solid #051619;
  border-radius: 8px;
  padding: 10px 5px 11px;
  cursor: pointer;
  font-size: 12px;
  ${(props) => colorHandler(props.colorset)};
`;

const colorHandler = (colorset) => {
  switch (colorset) {
    case '뉴스레터 무료로 구독하기':
      return css`
        color: #051619;
        border: 2px solid #051619;
        background-color: white;
        width: 222px;
        height: 48.85px;
        &:hover {
          color: white;
          background-color: #051619;
        }
      `;
    case '앱 다운로드 하기 >':
      return css`
        color: white;
        border: 2px solid #051619;
        background-color: #051619;
        width: 222px;
        height: 48.85px;
        &:hover {
          color: #051619;
          background-color: white;
        }
      `;
    case '더보기':
      return css`
        color: #051619;
        background-color: white;
        width: 280px;
        height: 48.85px;
        &:hover {
          color: #051619;
          background-color: #ff6b00;
        }
      `;
      case '로그인':
        return css`
        color: white;
        background-color: #051619;
        width: 100%;
        height: 48.85px;
        &:hover {
          color: #051619;
          background-color: white;
        }
      `;
    default:
      return css``;
  }
};