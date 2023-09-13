import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
import React from 'react';
import styled from "styled-components";
import {font} from "styles/Common";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexContainer direction="column" align="center">
                    <Title>For any questions please mail me:</Title>
                    <Email>email@mail.com</Email>
                </FlexContainer>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  
`

const Title = styled.h2`
  ${font({family: "DM Sans, sans-serif", weight: 700, Fmax: 58, Fmin: 42})}
  letter-spacing: -1px;
  
  text-align: center;
`

const Email = styled.span`
  ${font({family: "DM Sans, sans-serif", weight: 700, Fmax: 58, Fmin: 42})}
  letter-spacing: -1px;
  
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`