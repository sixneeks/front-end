import React from 'react';
import styled from 'styled-components';
import download7 from "../img/download7.png";

function Banner() {

  return <BannerImage src={download7} alt="배너 이미지"/>;
  }
export default Banner;

const BannerImage = styled.img`
  width: 100%;
`;