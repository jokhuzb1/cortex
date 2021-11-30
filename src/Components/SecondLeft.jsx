import { ErrorOutline } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'


const Rightside = styled.div`
height:100%;
width:100%;
flex:1;
display: flex;
font-size:12px;
font-weight:normal;
text-align: start;
`
const Form = styled.form`
display: flex;
flex-direction:column;
text-align:start;
justify-content: center;
margin: 10px;

`

const Title = styled.h1`
font-weight:normal;
font-size:32px;
margin: 10px;


`
const Info = styled.div`
display: flex;
justify-content: center;
align-items: center;
color:#8477C9;
border: 2px solid #8477C9;
border-radius:5px;
padding: 5px 10px;
width: 100%;
margin-bottom: 10px;
box-shadow: 0px 4px 8px #E7E7FF;
&:hover{
    color:coral;
}
    `
const InfoText = styled.span`
`
const Label = styled.label`
margin-bottom: 5px; `

const Select = styled.select`
width:109%;
border:1px solid #A4A4A4;
height:39px;
padding: 5px 10px;
margin-bottom: 10px;
font-weight:400;
border-radius: 5px;
background-color: #E4E4E4;
cursor:pointer;`

const Option = styled.option`

`
const InputContainer = styled.div`
border: 1px solid #A4A4A4;
padding: 0px 10px;
height:40px;
width:100%;
display: flex;
align-items: center;
justify-content:space-between;
border-radius: 5px;
margin-bottom: 10px;
background-color: #E4E4E4;
`

const Input = styled.input`
border:none;
background-color: #E4E4E4;

`
const Button = styled.a`
height:40px;
font-size:14px;
color:#8477C9;
text-decoration:underline;
line-height: 20px;
font-weight: 600;
border:none;
cursor:pointer;
&:active{
    zoom:97%;
}
`

export default function SecondLeft() {

    const { totalAmount, taxYear, taxableAmount, country } = useSelector((state) => state.amount)
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Rightside>
            <Form onSubmit={handleSubmit}>
                <Title>Your tax results </Title>

                <Label>Select your country of residence *</Label>
                <Select disabled>
                    <Option>{country}</Option>

                </Select >
                <Label>Select an income year *</Label>
                <Select disabled>
                    <Option disabled selected value=''> {taxYear} </Option>
                    {/*  */}
                </Select>
                <Label>Enter your total taxable income for the income year *</Label>
                <InputContainer>
                    $   <Input disabled type='text' placeholder={taxableAmount} /> .00
                </InputContainer>

                <Button onClick={() => history.push('/')}>Go back to previous screen</Button>
            </Form>
        </Rightside>
    )
}
