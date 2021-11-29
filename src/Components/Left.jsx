import React from 'react'
import styled from 'styled-components'




const Leftside = styled.div`
position:relative;
flex:1;
height:100%;
background-color: #8477C9;
border-radius:5px;
display:flex;
align-items: center;
flex-direction:column;
flex-wrap:wrap;
color:white;
overflow:hidden;
`
const Title = styled.h1`
font-size:48px;
font-weight:700;
letter-spacing:2px;
margin-top: 128px;`

const Desc = styled.p`
font-size:16px;
font-weight:400;`



const Planetoid = styled.div`

position:relative;
border-radius:50%;
width: 220px;
height: 203.64px;
top: 160.42px;
right:115px;

background: linear-gradient(117.38deg, #E7E6FF 10.73%, rgba(231, 230, 255, 0) 84.05%);
`

const Circle = styled.div`
position:relative;
width: 36px;
height: 35px;
background: #E7E7FF;
border-radius:50%;
right:25px;
box-shadow: -10px 13px 3px rgba(0, 0, 0, 0.15);
`

export default function Left() {
    return (
        <Leftside>
            <Title>Tax-o-tron</Title>
            <Desc>The Free and simple  online tax calculator</Desc>
            <Planetoid>
            </Planetoid>
            <Circle />
        </Leftside>
    )
}
