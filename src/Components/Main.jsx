import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'


const Container = styled.div`
position:relative;
margin-top: 50px;
height:512px;
width:764px;
border: none;
display: flex;
align-items: center;
justify-content: space-between;
padding: 32px;
box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
transition: opacity 0.5s linear;

`

const Wrapper = styled.div``



export default function Main() {
    return (
        <Container>
            <Left />
            <Right />
        </Container>

    )
}
