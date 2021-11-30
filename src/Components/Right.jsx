import { ErrorOutline } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import SecondPage from './SecondPage'
import { Switch, Route, Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import calculate from '../calculate'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { increment, setTaxYear, changeTaxableAmount, changeCountry } from '../redux/amountSlice'
const Rightside = styled.div`
height:100%;
flex:1;
display: flex;
margin-left: 30px;
font-size:12px;
font-weight:normal;
text-align: start;
`
const Form = styled.form`
display: flex;
flex-direction:column;
text-align:start;
justify-content: center;
padding: 35px;

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
margin-bottom: 10px;`

const Input = styled.input`
border:none;


`
const Button = styled.button`
border:none;
height:40px;

width: 108%;
background: #8477C9;
box-shadow: 0px 4px 8px #E7E7FF;
border-radius: 5px;
color:#ffff;
cursor:pointer;

&:active{
    zoom:97%;
}
`

export default function Right() {


    const history = useHistory();
    const [taxableAmount, setTaxableAmount] = useState(0);
    const [country, setCountry] = useState('');
    const [year, setYear] = useState(0);


    const { totalAmount } = useSelector((state) => state.amount)
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        let res = calculate(taxableAmount)
        dispatch(increment({ totalValue: res }));
        dispatch(setTaxYear({ year }));
        dispatch(changeTaxableAmount({ taxableAmount }))
        dispatch(changeCountry({ country }));

        console.log(totalAmount)
        console.log(year, country, taxableAmount)
        history.push('/second')
    }
    return (
        <Rightside>
            <Form onSubmit={handleSubmit}>
                <Title>Calculate your tax </Title>
                <Info> <ErrorOutline style={{ marginRight: "10px" }} />
                    <InfoText>Fields marked with * are mandatory</InfoText> </Info>
                <Label>Select your country of residence *</Label>
                <Select required onChange={(e) => setCountry(e.target.value)}>
                    <Option selected value=''> -- select your country -- </Option>
                    <Option value="Australia">Australia</Option>
                    <Option value='New-Zealand'>New Zealand</Option>
                </Select>
                <Label>Select an income year *</Label>
                <Select required onChange={(e) => setYear(e.target.value)}>
                    <Option selected value=''> -- select an option -- </Option>
                    <Option>2020-2021</Option>
                    <Option>2021-2022</Option>
                </Select>
                <Label>Enter your total taxable income for the income year *</Label>
                <InputContainer>
                    $   <Input required type='text' placeholder='Amount' onChange={(e) => setTaxableAmount(e.target.value)} />.00
                </InputContainer>
                <Button  >Calculate</Button>
            </Form>
        </Rightside>
    )
}
