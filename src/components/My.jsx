import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getMyPage } from "../axios/api";
import Spinner from "./Spinner";

const My = () => {
  const { isLoading, isError, data } = useQuery("MyPage", getMyPage);

  // 사용자 정보를 상태로 관리하기 위해 useState 훅.
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [readedCount, setReadedCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);

  // 데이터가 유효한 경우에만 상태를 업데이트하도록 useEffect를 사용하여 처리
  useEffect(() => {
    if (data) {
      setNickname(data.nickname);
      setEmail(data.email);
      setReadedCount(data.readedCount);
      setLikesCount(data.likesCount);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  console.log("mypagedata", data);

  return (
    <>
      <Stall>
        <Stouter>
          <Sthistory>반가워 죽겠슴,</Sthistory>
          <Sthistory2>
            {nickname} <span>🦔</span> 뉴니커!
          </Sthistory2>
          <Stmail>{email}</Stmail>
          <Stprofile to="/profilesetting">프로필 설정하기</Stprofile>
        </Stouter>

        <Stbuttons>
          <Stbutton1 to="/ReadPost">
            📙 끝까지 읽었슴<Stnum>{readedCount}</Stnum>
          </Stbutton1>
          <Stbutton2 to="/LikedPost">
            🧡 좋았슴<Stnum>{likesCount}</Stnum>
          </Stbutton2>
          <Stbutton3 to="/">
            💸 주문내역<Stnum>0</Stnum>
          </Stbutton3>
        </Stbuttons>
      </Stall>
    </>
  );
};

export default My;

const Stall = styled.div`
  background-color: #eae7de;
  padding-left: 8%;
  padding-top: 4%;
  padding-bottom: 100px;
`;

const Stouter = styled.div``;
const Sthistory = styled.div`
  font-size: 35px;
  font-weight: 400;
`;
const Sthistory2 = styled.div`
  font-size: 35px;
  font-weight: 700;
`;
const Stmail = styled.div`
  font-size: 13px;
  margin-top: 18px;
  font-weight: 600;
`;
const Stprofile = styled(Link)`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  text-decoration: underline;
  margin-top: 30px;
  &:hover {
    color: #ff6b00;
    cursor: pointer;
  }
`;
const Stbuttons = styled.div`
  margin-top: 60px;
  width: 80vw;

  @media (min-width: 1400px) {
    width: 1400px;
    height: 500px;
    font-size: 100%;
  }
`;
const Stbutton1 = styled(Link)`
  display: flex;
  align-items: center;

  border: 1px solid #051619;
  margin-top: -1px;
  height: 80px;
  font-size: 30px;
  font-weight: 500;
  padding-left: 2%;

  justify-content: space-between;
  &:hover {
    background-color: #051619;
    color: white;
    cursor: pointer;
  }
`;
const Stbutton2 = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 80px;
  font-size: 30px;
  font-weight: 500;
  padding-left: 2%;
  justify-content: space-between;
  &:hover {
    background-color: #051619;
    color: white;
    cursor: pointer;
  }
`;
const Stbutton3 = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 80px;
  font-size: 30px;
  font-weight: 500;
  padding-left: 2%;
  justify-content: space-between;
  &:hover {
    background-color: #051619;
    color: white;
    cursor: pointer;
  }
`;
const Stnum = styled.div`
  display: flex;
  margin-right: 2%;
`;
