// Modal.js (새 파일로 만듭니다)
import React from "react";
import styled from "styled-components";

const Modal = ({ onClose }) => {
  return (
    <ModalWrapper>
      {/* 모달 내용을 여기에 추가하세요 */}
      <ModalContent1>마이페이지</ModalContent1>
      <ModalContent2>주문내역</ModalContent2>
      <ModalContent3>프로필</ModalContent3>
      <ModalContent4>고객센터</ModalContent4>
      <ModalContent5>로그아웃</ModalContent5>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  height: 200px;
  width: 230px;
  background-color: white;
  border: 1px solid black;
  display: flex;
z-index: 5;
`;

const ModalContent1 = styled.div`
  /* 모달 내용의 스타일을 여기에 추가하세요 */
`;
const ModalContent2 = styled.div`
  /* 모달 내용의 스타일을 여기에 추가하세요 */
`;
const ModalContent3 = styled.div`
  /* 모달 내용의 스타일을 여기에 추가하세요 */
`;
const ModalContent4 = styled.div`
  /* 모달 내용의 스타일을 여기에 추가하세요 */
`;
const ModalContent5 = styled.div`
  /* 모달 내용의 스타일을 여기에 추가하세요 */
`;
export default Modal;
