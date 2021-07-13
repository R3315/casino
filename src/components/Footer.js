import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Container>
            <p>copyright All rights reserved!</p>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom: 0;
    box-shadow: 2px 2px 10px #ff6600;
    text-align: center;
    p {
        color: gray;
        margin: 20px auto;
    }
`;

