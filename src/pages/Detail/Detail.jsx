import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import CardInner from '../../components/CardInner'
import Footer from '../../components/Footer'
import { styled } from 'styled-components'
import ThemeToggle from '../../theme/ThemeToggle'
import { ThemeProvider } from '../../hooks/ThemeProvider';
import { GlobalStyle } from '../../theme/GlobalStyles';
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getDetailPosts, read } from '../../axios/api'
import Spinner from "../../components/Spinner";
import UnderBanner from "../../components/UnderBanner"
import Guide from '../../components/Guide'

function Detail() {
  const { id } = useParams();

  // 스크롤 이벤트 감지를 위한 상태
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [readPost, setReadPost] = useState(false)

  // read Mutation 설정
  const ReadMutation = useMutation(read, {
    onSuccess: () => {
      console.log('읽음 처리 성공');
    }
  });

  // 데이터 불러오기
  const { data: detailData, isLoading, isError } = useQuery('detailPosts', () => getDetailPosts(id));

  // 스크롤 이벤트 핸들러 함수
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(percentage);
  };

  // 페이지를 거의 다 읽었다고 판단하는 기준 (여기서는 80% 이상이라고 가정)
  const almostReadThreshold = 80;

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시, 스크롤 이벤트 리스너 해제
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 페이지를 거의 다 읽었다고 판단하는 기준을 충족했을 때 읽음 정보를 서버에 전송합니다.
  useEffect(() => {
    if (scrollPercentage >= almostReadThreshold && readPost === false) {
      ReadMutation.mutate(id); // 읽음 처리 서버 요청
      setReadPost(true);
    }
  }, [scrollPercentage, ReadMutation, id]);


  // 로딩 중 일때, 스피너 보여주기
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wrap>
        <Header />
        <CardInner data={detailData} />
        <UnderBanner/>
        <Guide text={`오늘까지 588회 뉴스레터를 발행했고 557,579명이 구독했어요!`} isHover={true} to="/"/>
        <Footer />
        <ThemeToggle />
      </Wrap>
    </ThemeProvider>
  );
}

export default Detail;

const Wrap = styled.div`
`;