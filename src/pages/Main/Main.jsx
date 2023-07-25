import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Category from "../../components/Category";
import UnderBanner from "../../components/UnderBanner";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";
import { styled } from "styled-components";
import dog from "../../img/dog.jpg"
import Card from "../../components/Card";
import Button from "../../components/Button";

function Main() {

import { useQuery, useQueryClient } from "react-query";
import { getTotalPosts } from "../../axios/api";
import Spinner from "../../components/Spinner";

function Main() {
const queryClient = useQueryClient();

const [lastArticleId, setLastArticleId] = useState('')
console.log("lastArticleId", lastArticleId)

const { isLoading, isError, data } = useQuery("post", () => getTotalPosts(lastArticleId));


if (isLoading) {
  queryClient.invalidateQueries("post")
  return <Spinner/>
}

if (isError) {
  return <p>오류가 발생하였습니다...!</p>;
}

console.log(data)
const postdata = data.data


const plusPostHandle = (id) =>{
      setLastArticleId(id); // 새로운 페이지의 ID로 'lastArticleId'를 업데이트합니다.
}


  // 클릭시 스크롤 최상단으로 이동.
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  }
  return (
    <StMainContainer>
      
      <Banner />
      <Header />
      <Header2 />
      <Category />

      <StCardContainer>
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
        <Card src={dog} title={"'신종 펫숍' 사기행각"} date={"2023.07.24"} tag={"사회"} />
      </StCardContainer>
      <StButtonContainer>
        <Button name={"더보기"} colorSet={"더보기"}/>
      </StButtonContainer>
      <UnderBanner />
      <Guide text={`퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드 🏳️‍🌈`} to={`https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56`}/>
      <Guide text={`뉴닉의 여성용어 가이드 🍞🌹`} to={`https://www.notion.so/90eb61e64b18407196422b3405a3bab6`}/>
      <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} onClick={scrollToTop}/>

      <Footer />
    </StMainContainer>
  )
}

export default Main


const StMainContainer = styled.div`
    background-color : #eae7de;
    position: relative;
`

const StCardContainer = styled.div`
    border: 1px solid #051619;
    border-width: 1px 0px 0px 1px;
    width: 90%;
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`

const StButtonContainer =styled.div`
    margin: 30px auto 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`