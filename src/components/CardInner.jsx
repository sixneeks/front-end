import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { styled } from 'styled-components'
import ProgressBar from './ProgressBar';
import { useSelector, useDispatch } from 'react-redux'; // 추가
import { incrementLikes } from '../redux/modules/likeSlice';


function CardInner() {

    const likes = useSelector((state) => state.like.likes); // 추가
    const dispatch = useDispatch(); // 추가
  
    const handleLike = () => {
      dispatch(incrementLikes()); // 좋아요 버튼을 누를 때, incrementLikes 액션을 디스패치하여 likes 상태를 증가시킴
    };
  
    return (
        <Wrap>
            <ProgressBar />
            {/* 타이틀 */}
            <Title>
                <a href=''>카테고리</a>
                <h1>타이틀 제목이 올 곳 입니다.</h1>
                <time>작성 날짜가 올 곳 입니다.</time>
            </Title>

            {/* 게시글 내용 */}
            <Container>
                <img src="../../img/logo.png" alt="" />
                <p>
                    지난주, 경북 예천에서 폭우 실종자를 수색하던 중 한 해병대 병사가 숨진 사건이 있었잖아요. 
                    이에 해당 현장뿐 아니라 군인 인력을 동원하는 관행 자체에도 문제가 있다는 말이 나오는데요. 무슨 이야기인지 알아봤어요.</p>
                <h2>너무 아까운 목숨이야...</h2>
                <p>
                    19일 아침, 해병대 병사들이 삽을 들고 강물에 들어가 실종자를 수색하던 중이었어요. 갑자기 발아래 강바닥이 푹 꺼지면서 급한 물살이 일었고, 병사 3명이 떠내려갔는데요. 
                    2명은 수영해서 빠져나왔지만 고 채수근 상병은 그대로 떠내려갔어요. 14시간 만인 그날 밤 강 하류에서 발견돼 병원으로 옮겨졌지만 결국 사망 판정을 받았고요. 고 채 상병은 순직 처리됐고, 
                    국방부 장관 등이 참석한 눈물의 영결식이 끝난 후 유해는 현충원에 안장됐어요. 
                </p>
                <h2>뭐가 문제였던 거야?</h2>
                <p>
                    기본 안전 안 지켰어: 병사들은 구명조끼, 밧줄 등 기본 안전 장비 하나 없이 강에 들어간 걸로 밝혀졌어요. 
                    당시 해병대원들은 밧줄 없이 한 줄로 나란히 서서 물속을 걷는 ‘인간 띠’ 방식으로 수색했는데요. 소방 당국이 ‘강바닥이 안전하지 않으니 그렇게 하지 말라’고 했는데도 군 당국이 귀담아듣지 않았다고. 
                    해병대가 재난 현장의 매뉴얼을 어긴 거 아니냐는 말도 나와요.
                </p>
                <p>
                    현장 관리 엉망이었어: 사고 전날까지만 해도 병사들은 물에 들어가지 않고 강가를 걸으며 수색했는데요. 
                    사고 당일 물에 들어가 수색하는 걸로 바뀌었어요. 소방 당국이 수중 수색을 요청한 적도 없는데 갑자기 이렇게 진행됐다고. 
                    그러면서도 구체적인 준비나 관리 없이 수심이 깊은 곳을 ‘알아서 조심하라’는 식이었고요.
                </p>
            </Container>

            {/* 해쉬태그 */}
            <HashTag>
                <a href="">#사회</a>
                <a href="">#국방</a>
                <a href="">#재해재난</a>
                <a href="">#국방부</a>
            </HashTag>

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
                <p>구독할 경우 <a href="">개인정보 수집 이용</a>과 <a href="">광고성 정보 수신</a>에 동의하게 됩니다.</p>
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
`

// 해쉬태그
const HashTag = styled.div`
    display: flex;
    max-width: 640px;
    padding: 0px 20px;
    margin: 0 auto 28px;
    gap: 10px;

    a { font-weight: bold }
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
