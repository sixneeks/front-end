// import React, { useEffect, useState } from "react";

// const ScrollGauge = () => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrolled = window.scrollY;
//       const percentage = (scrolled / totalScrollHeight) * 100;
//       setScrollPercentage(percentage);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "20px", background: "#f0f0f0", position: "relative" }}>
//       <div
//         style={{
//           width: `${scrollPercentage}%`,
//           height: "100%",
//           background: "#007BFF",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           position: 'fixed',

//         }}
//       />
//     </div>
//   );
// };

// export default ScrollGauge;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GaugeWrapper = styled.div`
  width: 100%;
  height: 20px;
  background: #f0f0f0;
  
  /* position: relative; */
  position: fixed;
`;

const GaugeFill = styled.div`
  height: 20px;
  background: #007BFF;
  /* position: absolute; */
  top: 180px;
  left: 0;
  position: fixed;
  width: ${props => props.scrollPercentage}%;
`;

const Stdiv = styled.div`
`

const ScrollGauge = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / totalScrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GaugeWrapper>
      <GaugeFill scrollPercentage={scrollPercentage} />
      <Stdiv>🔔띵동! ‘킬러 문항 배제’ 피자가 도착했습니다!</Stdiv>
    </GaugeWrapper>
  );
};

export default ScrollGauge;
