import React, { useState } from 'react'
import styled from 'styled-components'
import { lightTheme } from '../styles/globalStyles'


const FallowersBtnWrap = styled.div`
position: absolute;
width: 100%;
max-width: 200px;
font-size: 12px;
line-height: 1.33;
border: none;
margin-left:43%;
top: 1.5rem;
 > p{
    margin-left: 35%;
    color: ${({theme}) => theme === lightTheme ? '#121212' : '#fff'};
    font-family: sans-serif;
    font-weight: bold;
}
`
const FallowersBtn = styled.button`
background-color: ${({theme}) => theme === lightTheme ? '#121212' : '#fff'};
color: ${({theme}) => theme === lightTheme ? '#fff' : '#121212'};
  border: 3px solid #fff;
  border-radius: 10px;
  color: #fff;
  display: block;
  font-size: 1em;
  font-weight: bold;
  margin: 1em auto;
  padding: 10px 30px;
  position: relative;
  text-transform: uppercase;
  &:hover {
  color: #F2E205
}
`


export const Fallowers  = () => {
    const [isFallow, setIsFallow] = useState(false)
    const fallowingMe = () => {
        setIsFallow(!isFallow)

    }

    return (
        <FallowersBtnWrap>
           <FallowersBtn onClick = {fallowingMe}>
                {isFallow === false ? 'Fallowing ! '  : 'UnFallowed'}
           </FallowersBtn>
           <p>구독자수 : 0 명</p>
        </FallowersBtnWrap>
    )
}