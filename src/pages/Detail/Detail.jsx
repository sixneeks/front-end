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
import Spinner from "../../components/Spinner";

function Detail() {
  const { id } = useParams();
  const { data: detailData, isLoading, isError } = useQuery('detailPosts', () => getDetailPosts(id));

  if (isLoading) {
  
    return <Spinner/>
  }
  
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  console.log("detailData", detailData)







  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wrap>
        <Header />
        <CardInner data={detailData} />
        <Footer />
        <ThemeToggle />
      </Wrap>
    </ThemeProvider>
  )
}

export default Detail

const Wrap = styled.div`
`