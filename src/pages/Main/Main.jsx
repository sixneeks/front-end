
import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Category from "../../components/Category";
import UnderBanner from "../../components/UnderBanner";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";

function Main() {

  return (
    <div>

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
      <Guide />
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