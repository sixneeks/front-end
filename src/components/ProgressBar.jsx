import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const ProgressBar = () => {
    const progressBarRef = useRef(null);
    const [progressValue, setProgressValue] = useState(0);

    const handleScroll = () => {
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollY = window.scrollY;
        const newProgressValue = (scrollY / (scrollHeight - clientHeight)) * 100;
        setProgressValue(newProgressValue);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrap ref={progressBarRef}>
            <Container>
                <h2>타이틀이 올 곳 입니다.</h2>
                <Fill progressValue={progressValue}/>
            </Container>
        </Wrap>
    )
}

export default ProgressBar;

const Wrap = styled.div`
    top: 0;
    left: 0;
    z-index: 100;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    background-color: #ffffff;

    h2 {
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        text-align: center;
    }
`

const Fill = styled.div`
    width: ${(props) => props.progressValue}%;
    height: 100%;
    background: #FF6B00;
`