import React from 'react'
import Header from '../../components/Header'
import CardInner from '../../components/CardInner'
import Footer from '../../components/Footer'
import { styled } from 'styled-components'
import ThemeToggle from '../../theme/ThemeToggle'
import { ThemeProvider } from '../../hooks/ThemeProvider';
import { GlobalStyle } from '../../theme/GlobalStyles';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getDetailPosts } from '../../axios/api'

function Detail() {
  const { id } = useParams();
  const { data: detailData, isLoading, isError } = useQuery(['detailPosts', id], () => getDetailPosts(id));

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wrap>
        <Header />
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>데이터를 가져오는 중 오류가 발생했습니다.</div>
        ) : (
          detailData && <CardInner data={detailData} />
        )}
        <Footer />
        <ThemeToggle />
      </Wrap>
    </ThemeProvider>
  )
}

export default Detail

const Wrap = styled.div`
`