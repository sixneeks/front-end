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

export default Select

const StSelectButton = styled.div`
  width: 300px;
  height: 40px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`

const StSelectList = styled.ul`
  top : 643px; // !
  width: 300px;
  height: 40px;
  margin: 0%;
  padding-left: 0; // ul 밑의 li부분은 기본적으로 padding-left값이 있어 이것을 초기화 해줌
  list-style: none; // 목록 마커 삭제
  position: ${(props) => props.position};
`;

const StLi = styled.li`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
font-size: 13px;
border-left: 2px solid lightgrey;
border-right: 2px solid lightgrey;
cursor: pointer;
&:hover {
    background-color: rgb(221, 221, 221);
  }
&:first-child {
  border-top: 2px solid rgb(221, 221, 221);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
&:last-child {
  border-bottom: 2px solid rgb(221, 221, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
`