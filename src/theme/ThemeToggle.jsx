import React from 'react'
import { styled } from 'styled-components'
import { BiSolidMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from '../hooks/ThemeProvider';

function Theme({ mode }) {
  const [themeMode, toggleTheme] = useTheme();

  const handleToggle = () => {
    toggleTheme(); // toggle 함수를 호출하여 테마 변경
  };
  
  return (
    <Wrap onClick={handleToggle} mode={mode}>
      {mode === "dark" ? (
        <BiSolidMoon size="27" />
      ) : (
        <BsFillSunFill size="27" />
      )}
    </Wrap>
  )
}

export default Theme

const Wrap = styled.div`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;

  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.borderColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"};
`