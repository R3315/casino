import React from 'react'
import avatar from '../assets/img_avatar.png'
import casino from '../assets/casinologo.jpg'
import styled from 'styled-components'

export default function MyHeader(props) {
    return (
        <Container>
            <Logo>
                <img src={casino} alt="" />
            </Logo>
            <HContent>
                <p>Real Balance : ${props.balance}</p>
                <img src={avatar} alt="" />
            </HContent>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 10px #ff6600;
`;

const Logo = styled.div`
    margin: auto 0;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-left: 20px;
    }
`;

const HContent = styled.div`
    display: flex;
    position: relative;
    color: gray;
    justify-content: space-around;
    margin: auto 0;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
    }
    p{
        margin: auto;
        margin-right: 10px;
    }
`;