import React from 'react';
import styled from 'styled-components';

function Input({ type, value, onChange, placeholder }) {
  return (
    <StInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;

const StInput = styled.input`
  border: 1px solid #051619;
  color: #051619;
  padding: 10px 40px 11px 1.5rem;
  border-radius: 0;
`;