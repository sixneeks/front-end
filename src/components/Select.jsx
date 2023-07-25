import React from 'react'
// import { useState, useRef, useEffect } from "react";
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { logOut } from '../redux/modules/loginSlice';

function Select({position, isSelectOpen}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const selectList = ['마이페이지', '주문내역', '프로필 설정', '고객센터','로그아웃'];
  
  const logoutMutation = useMutation({
    onSuccess: () => {
      console.log("로그아웃 성공");
      dispatch(logOut())
      navigate('/')
    }
  });

  const selectListHendler = (index) =>{ // 목록을 선택
    switch (selectList[index]){
        case '마이페이지' :
          return navigate("/mypage")
        case '주문내역' :
          return 
        case '프로필 설정' :
          return navigate("/profilesetting")
        case '고객센터' :
          return 
        case '로그아웃' :
          return logoutMutation.mutate()
        default : 
          return
      }
  }

  return (<div>
    {isSelectOpen && (<StSelectList position={position}> 
        {selectList.map((item, index)=>{
            return <StLi key={index} onClick={()=>selectListHendler(index)}>{item}</StLi>
          })}
      </StSelectList>
    )}
  </div>)
}

export default Select;

const StSelectList = styled.ul`
  top : 70px;
  right: 115px;
  width: 280px;
  height: 48px;
  margin: 0%;
  padding-left: 0; // ul 밑의 li부분은 기본적으로 padding-left값이 있어 이것을 초기화 해줌
  list-style: none; // 목록 마커 삭제
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
border: 1px solid black;
border-width: 0px 1px 1px 1px;
padding-left: 15px;
cursor: pointer;

&:first-child {
  border-top: 1px solid black;

}
&:last-child {
  color: red;
}
`