import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { styled } from 'styled-components'
import ProgressBar from './ProgressBar';
import { useSelector, useDispatch } from 'react-redux'; // 추가
import { incrementLikes } from '../redux/modules/likeSlice';

function CardInner({data}) {
    const likes = useSelector((state) => state.like.likes); // 추가
    const dispatch = useDispatch(); // 추가
  
    const handleLike = () => {
      dispatch(incrementLikes()); // 좋아요 버튼을 누를 때, incrementLikes 액션을 디스패치하여 likes 상태를 증가시킴
    };
    const { tag, title, date, image, content, likesCount} = data.data;

    return (
        <Wrap>
            <ProgressBar title={title} />
            {/* 타이틀 */}
            <Title>
                <a href='#'>{tag}</a>
                <h1>{title}</h1>
                <time>{date}</time>
            </Title>

            {/* 게시글 내용 */}
            <Container>
                <img src={image} alt="기사 이미지" />
                <p>{content}</p>
            </Container>

            {/* 게시글 footer */}
            <Footer>
                <div className='likes'>
                <button onClick={handleLike}>🧡</button>
                    <p>좋았슴</p>

                    <p>{likes}</p> {/* 리덕스 스토어에서 가져온 likes 상태를 출력 */}

                </div>
                <div className='share-button'>
                    <button className='facebook'><FaFacebookF /></button>
                    <button className='twitter'><FaTwitter /></button>
                </div>
            </Footer>

            {/* 뉴스래터 */}
            <NewsLetter>
                <Form>
                    <input type="text" placeholder='이메일 주소'/>
                    <button>뉴스래터 구독하기</button>
                </Form>
                <p>구독할 경우 <a href="#">개인정보 수집 이용</a>과 <a href="#">광고성 정보 수신</a>에 동의하게 됩니다.</p>
            </NewsLetter>
        </Wrap>
    )
}

export default CardInner

const Wrap = styled.div`
    background-color: #eae7de;
`

// 타이틀
const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 56px 96px 96px 76px;
    border-bottom: 1px solid #000000;
    h1 { margin: 0; padding: 14px 0px 28px 0px; }
    p { margin: 0; }
`

// 컨테이너
const Container = styled.section`
    max-width: 640px;
    padding: 0px 20px 80px 20px;
    margin: 0 auto;

    h2 {
        margin-top: 70px;
    }
    p {
        margin: 20px 0px 24px 0px;
    }
    img {
        margin-top: 40px;
        width: 100%; 
    }
`

// 뉴스래터
const NewsLetter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 640px;
    margin: 0 auto;
    padding: 25px 20px 0px;

    p {
        font-size: 14px;
    }

    a {
        text-decoration: underline;
    }
`

const Form = styled.form`
    padding: 80px 0px 0px 0px;
    border-top: 1px solid #000000;

    input {
        width: 420px;
        height: 60px;
        padding-left: 20px;
        border-top: 1px solid #FF6B00;
        border-right: none;
        border-bottom: 1px solid #FF6B00;
        border-left: 1px solid #FF6B00;
        border-radius: 8px 0px 0px 8px;
        box-sizing: border-box;
        outline: none;
    }

    button {
        width: 220px;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 0px 8px 8px 0px;
        box-sizing: border-box;
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
        background: #FF6B00;
    }

    button:hover {
        background: #DB5000;
    }
`

// 푸터
const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 640px;
    padding: 0px 20px;
    margin: 0 auto;
    gap: 10px;

    .likes {
        display: flex;
        gap: 10px;

        button {
            font-size: 28px;
            border: none;
            background: none;
        }
    }

    .share-button {
        display: flex;
        gap: 4px;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            font-size: 24px;
            color: #ffffff;
            border: none;
        }
        .facebook { background-color: #385599; }
        .twitter { background-color: #1C9CEA; }
    }
`
