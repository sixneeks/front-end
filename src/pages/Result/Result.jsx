import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/Header'
import SearchCard from '../../components/SearchCard'
import { useNavigate, useParams } from 'react-router-dom';
import Guide from '../../components/Guide';
import Footer from '../../components/Footer';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import { getSearchPost } from '../../axios/api';

function Result() {
    const navigate = useNavigate();
    const param = useParams();

    
    const { isLoading, isError, data } = useQuery("searchPost", () => getSearchPost(param.id));

    if (isLoading) {
  
        return <Spinner/>
      }
      
      if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
      }

    const getSearchData = data.data

  return (
    <StResultContainer>
        <Header />
        <StTitleContainer>
            <StSearchTitle><StSearch>{param.id}</StSearch>의 검색결과예요.</StSearchTitle>
            <StSearchResult>🦔고슴이: {getSearchData.length}개 찾았슴!</StSearchResult>
            <StButton>최신순</StButton>
        </StTitleContainer>
        <StCardContainer>
        {getSearchData.map((item)=>(
            <SearchCard key={item.id} item={item}/>
        ))}
        </StCardContainer>
        <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} to="/"/>
        <Footer />
    </StResultContainer>
  )
}

export default Result

const StResultContainer = styled.div`
    background-color : #eae7de;
    position: relative;
`
const StTitleContainer = styled.div`
    width: 90%;
    max-width: 1360px;
    margin: 4.1666rem auto 2rem;
`

const StSearchTitle = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    display:flex;
    flex-direction: row;
`

const StSearch = styled.div`
    color : #999999;
`



const StSearchResult = styled.div`
    width: 100%;
    margin: 0.5rem 0 0;
`

const StButton = styled.button`
    width: 80px;
    height: 35px;
    background: #051619;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    cursor: pointer;
    margin: 2rem 0 1rem;
    font-size: 14px;
`

const StCardContainer = styled.div`
    border: 1px solid #051619;
    border-width: 1px 0px 0px 1px;
    width: 90%;
    max-width: 1360px;
    margin: 0 auto 125px;
    display: flex;
    flex-wrap: wrap;
`
