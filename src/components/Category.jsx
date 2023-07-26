import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
    window.location.reload();
  };
  return (
    <CategoryWrapper>
    <div className="category-outer">
      <div className="category-inner">
        <div className="categorylink" onClick={() => handleNavigate(`/`)}>전체</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/정치`)}>⚖️정치</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/사회`)}>👥사회</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/경제`)}>💰경제</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/국제`)}>🌐국제</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/문화`)}>🎬문화</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/스포츠`)}>⚽️스포츠</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/애니멀피플`)}>🐶애니멀 피플</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/미래&과학`)}>🔬미래&과학</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/기후변화`)}>🌎기후변화</div>
        <div className="categorylink" onClick={() => handleNavigate(`/tag/사설.칼럼`)}>🧘사설.칼럼</div>
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
