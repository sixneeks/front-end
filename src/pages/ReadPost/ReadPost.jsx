import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/Header'
import Guide from '../../components/Guide';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

function ReadPost() {
    const navigate = useNavigate();

    // const { isLoading, isError, data } = useQuery("readPost",getReadPost);

    // if (isLoading) {
  
    //     return <Spinner/>
    //   }
      
    //   if (isError) {
    //     return <p>오류가 발생하였습니다...!</p>;
    //   }

    // const getReadData = data.data

    return (
        <StReadContainer>
            <Header />
            <StTitleContainer>
                <StReadTitle>📙 읽었슴</StReadTitle>
                {/* <StReadResult>{getReadData.length}개 읽었슴!</StReadResult> */}
                
            </StTitleContainer>
            <StCardContainer>
            {/* {getReadData.map(()=>(
                <SearchCard key={item.id} item={item}/>
            ))} */}


            </StCardContainer>
            <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} to="/"/>
            <Footer />
        </StReadContainer>
    )
}

export default ReadPost

const StReadContainer = styled.div`
    background-color : #eae7de;
    position: relative;
`

const StTitleContainer = styled.div`
    width: 90%;
    max-width: 1360px;
    margin: 4.1666rem auto 2rem;
`

const StReadTitle = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: bold;
`
const StReadResult = styled.div`
    width: 100%;
    margin: 0.5rem 0 0;
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