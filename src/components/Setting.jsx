import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { logOut } from '../redux/modules/loginSlice';
import { deleteUsers, logout } from '../axios/api';


const Setting = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      console.log("로그아웃 성공");
      dispatch(logOut())
      navigate('/')
    }
  });

  const deleteUserMutation = useMutation(deleteUsers, {
    onSuccess: () => {
      console.log("탈퇴되었습니다.");
      dispatch(logOut())
      navigate('/')
    }
  });

  const logoutUser = () => {
    logoutMutation.mutate()
  }

  const deleteUser = () => {
    deleteUserMutation.mutate()
  }

  return (
    <>
      <Stall>
        <Stouter>
          <Sthistory>
            <span>고슴슴</span> 뉴니커,
          </Sthistory>
          <Sthistory>어떤 사람인지 더 알고 싶어요!</Sthistory>
          <Stmail>뉴니커 정보</Stmail>
        </Stouter>

        <Stbuttons>
          <Stbutton to="/">
            <Stbox>닉네임</Stbox>
            <Stnum>고슴슴</Stnum>
          </Stbutton>
          <Stbutton to="/">
            <Stbox>출생년도</Stbox>
            <Stnum>23년</Stnum>
          </Stbutton>
          <Stbutton to="/">
            <Stbox>성별</Stbox>
            <Stnum>고슴</Stnum>
          </Stbutton>
          <Stbutton to="/">
            <Stbox>배송지</Stbox>
            <Stnum>어디게?</Stnum>
          </Stbutton>
          <Stbutton to="/">
            <Stbox>이모지</Stbox>
            <Stnum>🦔</Stnum>
          </Stbutton>
        </Stbuttons>
        <StContainer>
        <StLogoutButton onClick={logoutUser}>로그아웃</StLogoutButton>
        <StLogoutButton onClick={deleteUser}>계정 삭제하기</StLogoutButton>
        </StContainer>
      </Stall>
    </>
  );
};

export default Setting;

const Stall = styled.div`
  background-color: #eae7de;
  padding-left: 8%;
  padding-top: 4%;
  padding-bottom: 100px;
`;

const Stouter = styled.div`

`;
const Sthistory = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const Stmail = styled.div`
  font-size: 15px;
  margin-top: 30px;
  font-weight: 700;
`;

const Stbuttons = styled.div`
  margin-top: 10px;
  width: 80vw; /* 화면 너비의 80%로 설정합니다. */
  @media (min-width: 1400px) {
    width: 1400px; /* 화면 너비가 1200px 이상일 때는 최대 너비를 1200px로 설정합니다. */
    height: 500px;
    font-size: 100%;
  }
`;
const Stbox = styled.div`
  width: 70px;

`;

const Stbutton = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2%;
  justify-content: space-between;
`;

const Stnum = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80%;
`;

const StLogoutButton = styled.div`
  font-size: 15px;
  margin: 30px 50px 0px 0px;
  text-decoration: underline;
  cursor: pointer;
`

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
`
