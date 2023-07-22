import Banner from "../../components/Banner";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Category from "../../components/Category";
import CheckBox from "../../components/CheckBox";
import Footer from "../../components/Footer";
import Guide from "../../components/Guide";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Input from "../../components/Input";
import ScrollGauge from "../../components/ScrollGauge";
import React from "react";

function Main() {
  // const [title, onChangeTitleHandler, resetTitle] = useInput();

  return (
    <div>
      <Banner />
      <Header />
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