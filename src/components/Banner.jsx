import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import download7 from "../../img/download7.png";

// 스타일드 컴포넌트로 스타일 정의
const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

function Banner() {
  // 화면 가로 크기를 상태로 관리하기 위한 상태값
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 화면 크기가 변경될 때마다 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트가 unmount 될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BannerImage src={download7} alt="배너 이미지" style={{ width: `${windowWidth}px` }} />
  );
}

export default Banner;
