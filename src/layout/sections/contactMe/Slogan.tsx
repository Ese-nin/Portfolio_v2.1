import React from 'react';
import styled from "styled-components";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Title>For any questions please mail me:</Title>
            <Email>email@mail.com</Email>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 30vh;
`

const Title = styled.h2`
  
`

const Email = styled.span`

`