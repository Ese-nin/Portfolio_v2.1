import React from 'react';
import mainPhoto from 'assets/images/mainPhoto.webp'
import {FlexContainer} from "components/FlexContainer";
import styled from "styled-components";
import {Container} from "components/Container";
import {theme} from "styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer align={'center'} justify={'space-between'}>
                    <div>
                        <span>Hello!</span>
                        <Name>I’m Sergey</Name>
                        <span>I build things for web</span>
                    </div>

                    <Photo></Photo>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  color: ${theme.colors.fontMainTitle};
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const Photo = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 9px solid;
  border-image: ${theme.colors.gradientBg} 1;
  background: url(${mainPhoto}) lightgray 50% / cover no-repeat;
`

const Name = styled.h2`
  background: ${theme.colors.gradientBg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`