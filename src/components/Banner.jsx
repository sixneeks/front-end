import styled from 'styled-components';
import download7 from "../img/download7.png";

// 스타일드 컴포넌트로 스타일 정의
const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

function Banner() {
 
  return (
    <BannerImage src={download7} alt="배너 이미지" />
  );
}

export default Banner;
