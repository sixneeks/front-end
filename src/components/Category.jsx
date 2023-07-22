import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryWrapper>
      <div className="category-outer">
        <div className="category-inner">
        <div className="categorylink">
            전체
            
          </div>
          <div className="categorylink">
          
            <span role="img" aria-label="">
              ⚖️
            </span>
            정치</div>
          <div className="categorylink">
            
            <span role="img" aria-label="">
              💰
            </span>
            경제</div>
          <div className="categorylink">
            
            <span role="img" aria-label="">🌐</span>
              
  
            세계</div>{" "}
          <div className="categorylink">
            
            <span role="img" aria-label="">🤖</span>
            테크</div>{" "}
          <div className="categorylink">
            
            <span role="img" aria-label="">💪</span>
            노동</div>{" "}
          <div className="categorylink">
            
            <span role="img" aria-label="">🌱</span>
            환경</div>{" "}
          <div className="categorylink">
            
            <span role="img" aria-label="">🤝</span>
            인권</div>{" "}
          <div className="categorylink">
            
            <span role="img" aria-label="">👥</span>
            사회</div>{" "}
          <div className="categorylink">
           
            <span role="img" aria-label="">🎞</span>
            문화</div>
          
          <div className="categorylink">
            
            <span role="img" aria-label="">🧘</span>
            라이프</div>
        </div>
      </div>
    </CategoryWrapper>
  );
};

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.

export default Category;

const CategoryWrapper = styled.div`
  .category-outer {
    height: 69px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #051619;
    border-bottom: 1px solid #051619;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 1;
    margin-bottom: -1px;
  }
  .category-inner {
    display: flex;
    /* overflow: auto; */
    white-space: nowrap;
    overflow: overlay;
    font-size: 14px;
    font-weight: 500;
    gap: 14px;
}
.categorylink {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
color: #ff6b00;
}
  }
`;
