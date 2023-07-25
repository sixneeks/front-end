import React from 'react'
import { useState, useRef, useEffect } from "react";
import { styled } from 'styled-components';

function Select({position}) {

  const selectList = ['마이페이지', '주문내역', '프로필 설정', '고객센터','로그아웃'];
  const [select, setSelect] = useState('');
  const [List, setList] = useState(false);

  const node = useRef();
  useEffect(() => { // 창의 바깥부분을 클릭하였을때 창이 사라짐
    const clickOutside = (e) => {
      if (List && node.current && !node.current.contains(e.target)) setList(false);};
    document.addEventListener("mousedown", clickOutside);
    return () => {document.removeEventListener("mousedown", clickOutside);};
  }, [List]);

  const selectListHendler = (index) =>{ // 목록을 선택
    setSelect(selectList[index])
    setList((pre) => !pre)
  }

  return (<div ref={node}>
    <StSelectButton onClick={() => setList((pre) => !pre)}>
      {select}<div>▼</div>
    </StSelectButton>
    {List && (<StSelectList position={position}> 
        {selectList.map((item, index)=>{
            return <StLi key={index} onClick={()=>selectListHendler(index)}>{item}</StLi>
          })}
      </StSelectList>
    )}
  </div>)
}

export default Select;

const StSelectButton = styled.div`
  width: 280px;
  height: 48px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  z-index: 10;
`

const StSelectList = styled.ul`
  top : 643px; // !
  width: 280px;
  height: 48px;
  margin: 0%;
  padding-left: 0; // ul 밑의 li부분은 기본적으로 padding-left값이 있어 이것을 초기화 해줌
  list-style: none; // 목록 마커 삭제
  border: 1px solid black;
  position: ${(props) => props.position};
`;

const StLi = styled.li`
height: 48px;
display: flex;
justify-content: left;
align-items: center;
background-color: white;
font-size: 14px;
font-weight: 500;
border-left: 1px solid black;
border-right: 1px solid black;
padding-left: 15px;
cursor: pointer;
&:hover {
    background-color: black;
    color: white;
  }
&:first-child {
  border-bottom: 1px solid black;

}
&:last-child {
  border: 1px solid black;
  
}
`