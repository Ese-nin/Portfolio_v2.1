import {Container} from "components/Container";
import {Icon} from "components/icon/Icon";
import {Menu} from "components/menu/Menu";
import React from 'react';
import styled from "styled-components";
import {font} from "styles/Common";
import {theme} from "styles/Theme";
import logo from "assets/images/footer_logo.svg"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <TopBlock>
                    <img src={logo} alt="logo"/>
                    <Contacts>
                        <span>+1234567890</span>
                        <span>qwerty@qwerty.com</span>
                        <Links>
                            <a href="#">
                                <Icon iconId='git_contact' height='30' width='30'
                                      viewBox='0 0 40 40'/>
                            </a>
                            <a href="#">
                                <Icon iconId='telegram' height='30' width='30' viewBox='0 0 45 45'/>
                            </a>
                        </Links>
                    </Contacts>
                </TopBlock>
                <Menu/>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const TopBlock = styled.div`
  position: relative;
  height: 50%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    bottom: -20px;

    background-color: rgba(66, 68, 110, 0.3);
  }
  
  @media ${theme.media.mobile} {
    flex-direction: column;
    align-items: center
  }
`

const Contacts = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
  gap: 35px;

  ${font({family: "DM Sans, sans-serif", Fmax: 18, Fmin: 14, color: theme.colors.fontSecond})}
  
  @media ${theme.media.mobile} {
    justify-content: center;
  }
`

const Links = styled.div`
  display: flex;
`