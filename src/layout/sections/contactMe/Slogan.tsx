import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
import React from 'react';
import styled from "styled-components";

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
  font-family: DM Sans, sans-serif;
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
`

const Email = styled.span`
  font-family: DM Sans, sans-serif;
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;

  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`