import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function SearchCard({ item }) {
const navigate = useNavigate();

return (
<StCardContainer onClick={() => {navigate(`/detail/${item.id}`)}}>
{item.image? <StCardImg src={item.image} alt={item.title} />: <></>}

<Stcontent>
<StTitle>{item.title}</StTitle>
<StDate>{item.date}&nbsp;&nbsp;&nbsp;&nbsp;{item.tag}</StDate>
</Stcontent>
</StCardContainer>
);
}

export default SearchCard;

const StCardImg = styled.img`
width: 100%;
aspect-ratio: 1/0.7;
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
    aspect-ratio: 1/1;
    &:hover {
    ${StCardImg} {
    filter: grayscale(0%);
    }
    background-color: white;
    }
`;

const Stcontent = styled.div`
    padding: 12px 15px;
`

const StTitle = styled.div`
    font-weight: bold;
`;

const StDate = styled.div`
    font-size: 12px;
    margin-top: 10px;
`