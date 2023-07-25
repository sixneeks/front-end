import React from 'react'
import { styled } from 'styled-components'
import logo from "../../img/logo.png";
import googlelogo from "../../img/googlelogo.png"
import Input from '../../components/Input';
import useInput from '../../hooks/useInput';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { login } from '../../axios/api';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/modules/loginSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onChangeEmailHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  const loginMutation = useMutation(login, {
    onSuccess: () => {
      console.log("로그인 성공");
      dispatch(logIn())
      navigate('/')
    }
  });


  const loginClickHandler = () => {
    // 이메일 형식 검사를 위한 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // body 값이 이메일 형식과 맞지 않을 경우 경고창
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 아닙니다.");
      return;
    }
    const loginInformation = {
      id : email,
      password : password,
    }
    loginMutation.mutate(loginInformation)

    // const loginInformation = {
    //   email : email,
    //   password : password,
    // }
    // loginMutation.mutate(loginInformation)
    
  };

  return (
    <StLoginOutContainer>
      <StLoginContainer>
        <Stlogo src={logo} alt="로고" onClick={()=>{navigate('/')}}/>
        <StGoGoogleButton>
          <StGoogleLogo src={googlelogo} alt="구글 로고"/>
          <StGoGoogleText>구글로 시작하기</StGoGoogleText>
        </StGoGoogleButton>
        <StLine/>
        <StLoginBody>
          <Input type={'text'} value={email} onChange={onChangeEmailHandler} placeholder={"이메일"} />
          <Input type={'password'} value={password} onChange={onChangePasswordHandler} placeholder={"비밀번호"} />
          <StLoginForgot>비밀번호를 잊으셨나요?</StLoginForgot>
        </StLoginBody>
        <StLoginFoot>
          <Button name={"로그인"} colorSet={'로그인'} onClick={loginClickHandler}/>
          <StGoSignup onClick={()=>{navigate('/signup')}}>회원가입하기</StGoSignup>
        </StLoginFoot>
      </StLoginContainer>
    </StLoginOutContainer>
  )
}

export default Login

const StLoginOutContainer = styled.div`
  background-color:#eae7de;
  width: 100%;
  min-height: 100vh;
`

const StLoginContainer = styled.div`
    max-width: 400px;
    margin: 0px auto;
    padding: 7.5% 5% 4rem;
    position: relative;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Stlogo = styled.img`
  width: 226px;
  margin: 0px auto 40px;
  cursor: pointer;
`
const StGoGoogleButton = styled.button`
  width: 100%;
  min-width: 104px;
  border: 1px solid #051619;
  background-color : white;
  border-radius: 8px;
  padding: 10px 5px 11px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap:10px;
`

const StGoogleLogo = styled.img`
  height: 25px;
  margin-left: 10px;
`

const StGoGoogleText = styled.div`
`
const StLine = styled.div`
  border-bottom: 1px solid #051619;
  margin : 24px 0px;
  width: 100%;
`
const StLoginBody = styled.div`
  width: 100%;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  gap:20px;
`
const StLoginForgot = styled.div`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`

const StLoginFoot = styled.div`
  margin: 28px 0px;
  font-size: 14px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap:25px;
`


const StGoSignup = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`