import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Category from "../../components/Category";
import UnderBanner from "../../components/UnderBanner";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";
import { styled } from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useQuery} from "react-query";
import  { getTotalPosts } from "../../axios/api";
import Spinner from "../../components/Spinner";


function Main() {
  // const queryClient = useQueryClient();
const [pluspage, setPluspage] = useState(1)
const scrollPositionRef = useRef(0);

const { isLoading, isError, data } = useQuery(["post", pluspage], () => getTotalPosts(pluspage));

useEffect(() => {
  // 데이터가 로드된 후 저장한 스크롤 위치로 스크롤합니다.
  if (data) {
    window.scrollTo({
      top: scrollPositionRef.current,
      behavior: "auto",
    });
  }
}, [data]);

if (isLoading) {
  
  return <Spinner/>
}

if (isError) {
  return <p>오류가 발생하였습니다...!</p>;
}

const postdata = data.data
const plusPostHandle = () => {
  const newPluspage = pluspage + 1; // lastArticleId에 1을 더한 새로운 값을 생성합니다.
  setPluspage(newPluspage); // 새로운 값을 'lastArticleId'로 업데이트합니다.
  scrollPositionRef.current = window.scrollY;
}

  // 클릭시 스크롤 최상단으로 이동.
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  }
//src={item.image} title={item.title} date={item.date} tag={item.tag} onClick={() => {navigate(`/detail/${item.id}`)}}
  return (
    <StMainContainer>
      
      <Banner />
      <Header />
      <Header2 />
      <Category />

      <StCardContainer>
        {postdata.map((item)=>(
          <Card key={item.id} item={item} />
          ))}
        
      </StCardContainer>
      <StButtonContainer>
        <Button name={"더보기"} colorSet={"더보기"} onClick={plusPostHandle}/>
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