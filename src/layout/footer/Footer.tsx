import {Icon} from "components/icon/Icon";
import {Menu} from "components/menu/Menu";
import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <TopBlock>
                <Icon iconId='logo' height="70" width="70" viewBox='0 0 70 70'/>
                <Contacts>
                    <span>+1234567890</span>
                    <span>qwerty@qwerty.com</span>
                    <div>
                        <a href="#">
                            <Icon iconId='git_contact' height='30' width='30' viewBox='0 0 40 40'/>
                        </a>
                        <a href="#">
                            <Icon iconId='telegram' height='30' width='30' viewBox='0 0 45 45'/>
                        </a>
                    </div>
                </Contacts>
            </TopBlock>
            <Menu/>
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
  justify-content: space-around;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 5px;
    width: 80%;
    bottom: -20px;

    background-color: rgba(66, 68, 110, 0.3);
  }
`

const Contacts = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
  gap: 50px;

  font-family: DM Sans, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.fontSecond};
`