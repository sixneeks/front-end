
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
      <Guide />
      <Guide />
      <Guide />
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