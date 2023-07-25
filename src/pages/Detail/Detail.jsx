import React from 'react'
import Header from '../../components/Header'
import CardInner from '../../components/CardInner'
import Footer from '../../components/Footer'
import { styled } from 'styled-components'
import ThemeToggle from '../../theme/ThemeToggle'
import { ThemeProvider } from '../../hooks/ThemeProvider';
import { GlobalStyle } from '../../theme/GlobalStyles';

function Detail() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wrap>
        <Header />
        <CardInner />
        <Footer />
        <ThemeToggle />
      </Wrap>
    </ThemeProvider>
  )
}

export default Detail

const Wrap = styled.div`
`