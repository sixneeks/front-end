import React from "react";
import Header from "../../components/Header";
import Category from "../../components/Category";
import UnderBanner from "../../components/UnderBanner";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";
import My from "../../components/My";

function MyPage() {
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  }

  return (
    <div>
      <Header />
      <My />
      <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} onClick={scrollToTop}/>
      <Footer />
      
      <div style={{height:'5000px'}}></div>
    </div>
  )
}

export default MyPage;
