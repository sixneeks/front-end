import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import Header from '../../components/Header'
import Category from '../../components/Category'
import Card from '../../components/Card'
import Button from '../../components/Button'
import UnderBanner from '../../components/UnderBanner'
import Guide from '../../components/Guide'
import Footer from '../../components/Footer'
import Spinner from '../../components/Spinner'
import { useQuery } from 'react-query'
import { getTagPosts } from '../../axios/api'
import { useParams } from 'react-router-dom'

function Tag() {

  const [plusTagpage, setPluspage] = useState(1)
  const scrollPositionRef = useRef(0);
  const param = useParams();
  console.log("param", param)

const { isLoading, isError, data } = useQuery(["post", plusTagpage], () => getTagPosts(param.id , plusTagpage));


console.log('data', data)
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

const postTagdata = data.data
const plusTagPostHandle = () => {
  const newPlusTagpage = plusTagpage + 1; // lastArticleId에 1을 더한 새로운 값을 생성합니다.
  setPluspage(newPlusTagpage); // 새로운 값을 'lastArticleId'로 업데이트합니다.
  scrollPositionRef.current = window.scrollY;
}

const titleName = (id) => {
  switch (id){
    case '정치' :
      return "⚖️ 정치"
    case '사회' :
      return "👥 사회"
    case '경제' :
      return "💰 경제"
    case '국제' :
      return "🌐 국제"
    case '문화' :
      return "🎬 문화"
    case '스포츠' :
      return "⚽️ 스포츠"
    case '애니멀피플' :
      return "🐶 애니멀 피플"
    case '미래&과학' :
      return "🔬 미래&과학"
    case '기후변화' :
      return "🌎 기후변화"
    case '사설.칼럼' :
      return "🧘 사설.칼럼"
    default : 
      return " "
  }
}

  return (
    <StTagContainer>
      <Header />
      <Category /> 
      <StTagTitle>{titleName(param.id)}</StTagTitle>
      <StCardContainer>
      {postTagdata.map((item)=>(
          <Card key={item.id} item={item} />
          ))}
      </StCardContainer>
      <StButtonContainer>
        <Button name={"더보기"} colorSet={"더보기"} onClick={plusTagPostHandle}/>
      </StButtonContainer>
      <UnderBanner />
      <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} to="/"/>
      <Footer />
    </StTagContainer>
  )
}

export default Tag


const StTagContainer = styled.div`
    background-color : #eae7de;
    position: relative;
`

const StTagTitle = styled.div`
    width: 90%;
    max-width: 1360px;
    margin: 50px auto 20px;
    font-size: 25px;
    font-weight: bold;
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