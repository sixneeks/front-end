import React from 'react';
import { styled } from 'styled-components';

function Card({ src, title, date, tag }) {



const newDate = date.split(".").join("/")

return (
<StCardContainer>
{src? <StCardImg src={src} alt={title} />: <></>}

<Stcontent>
<StTitle>{title}</StTitle>
<StDate>{newDate}&nbsp;&nbsp;&nbsp;&nbsp;{tag}</StDate>
</Stcontent>
</StCardContainer>
);
}

export default Card;

const StCardImg = styled.img`
width: 100%;
aspect-ratio: 1/0.75;
filter: grayscale(100%);

`;

const StCardContainer = styled.div`
background-color: rgb(234, 231, 222);
box-sizing: border-box;
position: relative;
display: block;
width: 25%;
min-width : 264px;
border: 1px solid #051619;
border-image: initial;
border-width: 0px 1px 1px 0px;
cursor: pointer;
overflow: hidden;
aspect-ratio: 1/1.11;
&:hover {
${StCardImg} {
filter: grayscale(0%);
}
background-color: white;
}
`;

const Stcontent = styled.div`
padding: 17px;
`

const StTitle = styled.div`
font-weight: bold;
`;

const StDate = styled.div`
font-size: 12px;
margin-top: 10px;
`