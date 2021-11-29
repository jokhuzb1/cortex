import React from 'react'
import styled from 'styled-components'




const Leftside = styled.div`
position:relative;
flex:1;
height:100%;
background-color: #8477C9;
border-radius:5px;
display:flex;
padding: 20px;
flex-direction:column;
color:white;
overflow:hidden;

`
const TitleContainer = styled.div`
background-color:#ffff;
padding: 20px;
border-radius:5px;
margin-bottom: 20px;
`
const Title = styled.h1`
font-size:36px;
font-weight:700;
color:#8477C9;
letter-spacing:2px;


`

const Desc = styled.p`
font-size:16px;
font-weight:400;`

const BgImg = styled.div`
`

const Planetoid = styled.div`
position:relative;
border-radius:50%;
width: 220px;
height: 203.64px;
top: 160.42px;
right:115px;
background: linear-gradient(117.38deg, #E7E6FF 10.73%, rgba(231, 230, 255, 0) 84.05%);
`
const Label = styled.p`
font-size:14px;
margin: 5px;
text-align:start;
`


const Circle = styled.div`
position:relative;
width: 36px;
height: 35px;
background: #E7E7FF;
border-radius:50%;
right:25px;
box-shadow: -10px 13px 3px rgba(0, 0, 0, 0.15);
z-index:9;
`
const BreakdownContainer = styled.div`
position:relative;
background-color:#ffff;
color:black;
border-radius:5px;  
display: flex;
align-items: center;

justify-content: space-between;
padding: 10px 15px;
margin-bottom: 10px;
width:90%;
`
const BreakdownLeft = styled.div``
const BreakdownRight = styled.div``
const BreakdownTitle = styled.div``
const BreakdownP = styled.div``
const BreakdownAmount = styled.div`
color:#8477C9;
font-size: 18px;
line-height:22px;
font-style: normal;
font-weight: 400;`




export default function SecondRight() {
    return (
        <Leftside>

            <Label>Your estimated taxable income is:</Label>
            <TitleContainer>
                <Title>$12,400.00</Title>
            </TitleContainer>
            <Label>Breakdown: </Label>
            <BreakdownContainer>
                <BreakdownLeft>
                    <BreakdownTitle>Tax Bracket</BreakdownTitle>
                    <BreakdownP>$12-20</BreakdownP>
                </BreakdownLeft>
                <BreakdownRight>
                    <BreakdownAmount>$0</BreakdownAmount>
                </BreakdownRight>
            </BreakdownContainer>
            <BreakdownContainer>
                <BreakdownLeft>
                    <BreakdownTitle>Tax Bracket</BreakdownTitle>
                    <BreakdownP>$12-20</BreakdownP>
                </BreakdownLeft>
                <BreakdownRight>
                    <BreakdownAmount>$0</BreakdownAmount>
                </BreakdownRight>
            </BreakdownContainer>
            <BreakdownContainer>
                <BreakdownLeft>
                    <BreakdownTitle>Tax Bracket</BreakdownTitle>
                    <BreakdownP>$12-20</BreakdownP>
                </BreakdownLeft>
                <BreakdownRight>
                    <BreakdownAmount>$0</BreakdownAmount>
                </BreakdownRight>
            </BreakdownContainer>
            <BreakdownContainer>
                <BreakdownLeft>
                    <BreakdownTitle>Tax Bracket</BreakdownTitle>
                    <BreakdownP>$12-20</BreakdownP>
                </BreakdownLeft>
                <BreakdownRight>
                    <BreakdownAmount>$0</BreakdownAmount>
                </BreakdownRight>
            </BreakdownContainer>
            <BreakdownContainer>
                <BreakdownLeft>
                    <BreakdownTitle>Tax Bracket</BreakdownTitle>
                    <BreakdownP>$12-20</BreakdownP>
                </BreakdownLeft>
                <BreakdownRight>
                    <BreakdownAmount>$0</BreakdownAmount>
                </BreakdownRight>
            </BreakdownContainer>

            {/* <BgImg>
                <Planetoid>
                </Planetoid>
                <Circle />
            </BgImg> */}
        </Leftside>
    )
}
