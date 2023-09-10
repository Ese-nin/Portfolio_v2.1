import abstract from "assets/images/Abstract.svg"
import mainPhoto from 'assets/images/mainPhoto.webp'
import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
import React from 'react';
import styled from "styled-components";
import {font} from "styles/Common";
import {theme} from "styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <span>Hello!</span>
                        <Name>I’m Sergey</Name>
                        <span>I build things for web</span>
                    </div>

                    <PhotoBox>
                        <MainPhoto src={mainPhoto} alt="main photo"/>
                    </PhotoBox>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  color: ${theme.colors.fontMainTitle};
  ${font({Fmax: 50, Fmin: 32, weight: 700, lineHeight: "70px"})}
  letter-spacing: -1px;
`

const PhotoBox = styled.div`
  position: relative;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background-image: linear-gradient(to top, #13B0F5 -2.06%, #E70FAA 100%);

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${abstract});
    width: 628px;
    height: 628px;
  }

  @media ${theme.media.mobile} {
    margin-top: 50px;
    width: 330px;
    height: 330px;
  }
`

const MainPhoto = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  transform: translate(10px, 10px);

  @media ${theme.media.mobile} {
    height: 310px;
    width: 310px;
  }
`

const Name = styled.h2`
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  ${font({Fmax: 58, Fmin: 36, weight: 700})}
  letter-spacing: -1px;
`