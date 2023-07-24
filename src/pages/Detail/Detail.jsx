import React from 'react'
import Header from '../../components/Header'
import CardInner from '../../components/CardInner'
import Footer from '../../components/Footer'
import { styled } from 'styled-components'



function Detail() {
  return (
    <Wrap>
      <Header />
      <CardInner />
      <Footer />
    </Wrap>
  )
}

export default Detail

const Wrap = styled.div`

`