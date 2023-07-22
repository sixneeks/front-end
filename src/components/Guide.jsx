import React from 'react'
import styled from "styled-components";

function Guide({text}) {
  return (
    <StOutGuide>
      <StInGuide>
        
          <StText>{text}</StText>
          <StArrow>{'→'}</StArrow> 
        {/* 화살표 이모티콘 찾아야함 */}
      </StInGuide>
    </StOutGuide>
  )
}

export default Guide

const StOutGuide = styled.div`
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eae7de;
    border-bottom: 1px solid #051619;
`
const StInGuide = styled.div`
    box-sizing: border-box;
    max-width: 1360px;
    width : 90%;
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: row;
`
const StText =styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`

const StArrow = styled.div`
    font-size:50px;
`