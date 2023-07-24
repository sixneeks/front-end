import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Category from "../../components/Category";
import UnderBanner from "../../components/UnderBanner";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";

function Main() {
  // 클릭시 스크롤 최상단으로 이동.
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  }
  return (
    <div style={{overflow:"hidden"}}>

      <Banner />
      <Header />
      <Header2 />
      <Category />
      {/* <Button /> */}
      {/* <Card /> */}
      {/* <CheckBox /> */}
      {/* <Input />
      
      <ScrollGauge /> */}
      <UnderBanner />
      <Guide text={`퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드 🏳️‍🌈`} to={`https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56`}/>
      <Guide text={`뉴닉의 여성용어 가이드 🍞🌹`} to={`https://www.notion.so/90eb61e64b18407196422b3405a3bab6`}/>
      <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} onClick={scrollToTop}/>
      <Footer />
      

      {/* <Button name={"뉴스레터 무료로 구독하기"} colorSet={'뉴스레터 무료로 구독하기'}/>
      <Button name={"앱 다운로드 하기 >"} colorSet={'앱 다운로드 하기 >'}/>
      <Button name={"더보기"} colorSet={'더보기'} onClick={resetTitle}/>
      <Input type={'password'} value={title} onChange={onChangeTitleHandler} placeholder={"아이디"} /> */}
      <div>
      {/* <h1>Scroll Gauge Example</h1>
      <ScrollGauge /> */}
      {/* 여기에 나머지 내용 추가 */}
      <div style={{height:'5000px'}}></div>
    </div>

    </div>
  )
}

export default Main