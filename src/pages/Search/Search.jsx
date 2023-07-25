import React from 'react'
import { styled } from 'styled-components'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

function Search() {
    return (
        <Wrap>
            {/* 입력창 */}
            <Form>
                <Fieldset>
                    <button><FaArrowLeftLong /></button>
                    <input type='search' placeholder='고슴아 이게 궁금해. (인물, 이슈)' />
                </Fieldset>
            </Form>

            {/* 추천 키워드 */}
            <Section>
                <h2>고슴이의 추천 키워드</h2>
                <Link>한미정상회담</Link>
                <Link>간호법</Link>
                <Link>부동산</Link>
                <Link>수단</Link>
                <Link>TV 수신료</Link>
                <Link>반도체</Link>
            </Section>
        </Wrap>
    )
}

export default Search

// Form 관련 Style 
// 전체영역
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #EAE7DE;
`

// Form 사이즈
const Form = styled.form`
    max-width: 640px;
    margin: 0 auto;
    padding: 1rem 5%;
    box-sizing: border-box;
`

// 검색창 스타일
const Fieldset = styled.fieldset`
    position: relative;
    margin: 1rem 0;
    padding: 0;
    border: 0;
    button {
        position: absolute;
        width: 52px;
        height: 52px;
        font-size: 1.25rem;
        border: none;
        background: none;
    }
    input {
        display: block;
        width: 100%;
        height: 52px;
        padding: 10px 40px 11px 3.25rem;
        border: 1px solid #000000;
        box-sizing: border-box;
        color: #000000;
        font-weight: bold;
        transition: all .2s;
        outline: none;
        box-shadow: none;
    }
`

// Section 관련 Style
const Section = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 640px;
    margin: 0 auto;
    padding: 1rem 5%;
    box-sizing: border-box;
    gap: 10px;
`