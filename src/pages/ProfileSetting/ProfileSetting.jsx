import React from "react";
import Header from "../../components/Header";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";
import Setting from "../../components/Setting";

function ProfileSetting() {
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  }

  return (
    <div>
      <Header />
      <Setting />
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

export default ProfileSetting;