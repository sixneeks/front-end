import React from 'react'
import { styled } from 'styled-components'

function CheckBox({text}) {
return (
<div>
<StLabel htmlFor="checkboxid">
<StCheckBox type='checkbox' id="checkboxid"/>
<StP>{text}</StP>
</StLabel>
</div>
)
}

export default CheckBox

const StLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
`
const StCheckBox = styled.input`
    appearance: none;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 0;
    border: 1px solid #051619;
    background: #fff;
&:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #051619;
}
`

const StP = styled.p`
    margin: 0;
`