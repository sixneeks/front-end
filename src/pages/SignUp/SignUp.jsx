import React from 'react'
import { styled } from 'styled-components'
import logo from "../../img/logo.png";
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useMutation } from 'react-query';
import { addUsers } from '../../axios/api';

function SignUp() {
  const navigate = useNavigate();

  const [email, onChangeEmailHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const [passwordCheck, onChangePasswordCheckHandler] = useInput();
  const [nickname, onChangeNicknameHandler] = useInput();

  const addNewUserMutation = useMutation(addUsers, {
    onSuccess: () => {
      navigate('/login')
    }
  });

  const onSignUpClickHandler = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email: email 패턴 체크
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/; // password: 대소문자, 숫자, 특수문자 포함 8~15자 이내, 각 요소 1개이상 포함
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/; // nickname: 알파벳소문자, 한글 ,숫자로만 이루어지고, 2자 이상 10자 이하
   
    // body 값이 이메일 형식과 맞지 않을 경우 경고창
    if (!emailRegex.test(email)) {alert("이메일 형식이 아닙니다.");return;}
    if (password !== passwordCheck){alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");return;}
    if (!passwordRegex.test(password)) {alert("password: 대소문자, 숫자, 특수문자 포함 8~15자 이내, 각 요소 1개이상 포함");return;}
    if (!nicknameRegex.test(nickname)) {alert("nickname: 알파벳소문자, 한글 ,숫자로만 이루어지고, 2자 이상 10자 이하");return;}


    const newUser = {
      email : email,
      password : password,
      nickname : nickname,
      };
    addNewUserMutation.mutate(newUser)
  };

  return (
    <StSignUpOutContainer>
      <StSignUpContainer>
        <Stlogo src={logo} alt="로고" onClick={()=>{navigate('/')}}/>
        <StSigeUpBody>
          <Input type={'text'}  placeholder={"이메일"} value={email} onChange={onChangeEmailHandler}/>
          <Input type={'password'} placeholder={"비밀번호 (8자 이상)"} value={password} onChange={onChangePasswordHandler}/>
          <Input type={'password'} placeholder={"비밀번호 확인 (8자 이상)"} value={passwordCheck} onChange={onChangePasswordCheckHandler}/>
          <Input type={'text'} placeholder={"닉네임"} value={nickname} onChange={onChangeNicknameHandler}/>
        </StSigeUpBody>
        <StCheckBoxSet>
            <CheckBox text={"모두 동의합니다"}/>
            <CheckBox text={"만 14세 이상 가입 동의 (필수)"}/>
            <StTermsSet><CheckBox text={"이용약관 동의 (필수)"}/><StViewTerms>약관 보기</StViewTerms></StTermsSet>
            <StTermsSet><CheckBox text={"개인정보 수집/이용 동의 (필수)"}/><StViewTerms>약관 보기</StViewTerms></StTermsSet>
            <StTermsSet><CheckBox text={"뉴스레터 및 마케팅 정보 수신 동의 (선택)"}/><StViewTerms>약관 보기</StViewTerms></StTermsSet>
          </StCheckBoxSet>
          <Button name={"가입하기"} colorSet={'로그인'} onClick={onSignUpClickHandler}/>
          
      </StSignUpContainer>
    </StSignUpOutContainer>
  )
}

export default SignUp

//value={} onChange={}

const StSignUpOutContainer = styled.div`
  background-color:#eae7de;
  width: 100%;
  min-height: 100vh;
`

const StSignUpContainer = styled.div`
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
const StSigeUpBody = styled.div`
  width: 100%;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  gap:15px;
  font-size: 14px;
`
const StCheckBoxSet = styled.div`
  margin: 20px 0 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
`

const StTermsSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StViewTerms =styled.div`
  text-decoration: underline;
  cursor: pointer;
`

