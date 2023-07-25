import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryWrapper>
      <div className="category-outer">
        <div className="category-inner">
          <div className="categorylink">전체</div>
          <div className="categorylink">
            <span role="img" aria-label="">
              ⚖️
            </span>
            정치
          </div>
          <div className="categorylink">
            <span role="img" aria-label="">
              👥
            </span>
            사회
          </div>
          <div className="categorylink">
            <span role="img" aria-label="">
            💰
            </span>
            경제
          </div>{" "}
          <div className="categorylink">
            <span role="img" aria-label="">
            🌐
            </span>
            국제
          </div>{" "}
          <div className="categorylink">
            <span role="img" aria-label="">
              🎬
            </span>
            문화
          </div>{" "}
          <div className="categorylink">
            <span role="img" aria-label="">
              ⚽️
            </span>
            스포츠
          </div>{" "}
          <div className="categorylink">
            <span role="img" aria-label="">
              🐶
            </span>
            애니멀 피플
          </div>{" "}
          <div className="categorylink">
            <span role="img" aria-label="">
              🔬
            </span>
            미래과학
          </div>{" "}
          <div className="categorylink">
            <span role="img" aria-label="">
              🌎
            </span>
            기후변화&
          </div>
          <div className="categorylink">
            <span role="img" aria-label="">
              🧘
            </span>
            사설
          </div>
        </div>
      </div>
    </CategoryWrapper>
  );
};

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.

export default Category;

const CategoryWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 3;

  .category-outer {
    height: 69px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #051619;
    border-bottom: 1px solid #051619;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    
    margin-bottom: -1px;
  }
  .category-inner {
    display: flex;
    /* overflow: auto; */
    white-space: nowrap;
    overflow: overlay;
    font-size: 15px;
    font-weight: 600;
    gap: 20px;
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
