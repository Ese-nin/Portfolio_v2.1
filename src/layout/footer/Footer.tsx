import React from 'react';
import styled from "styled-components";
import {Menu} from "components/menu/Menu";
import {Icon} from "components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <TopBlock>
                <Icon iconId='git_skill' height="50" width="50" viewBox='0 0 100 100'/>
                <StyledContacts>
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
                </StyledContacts>
            </TopBlock>
            <Menu/>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  height: 120px;
  background-color: chocolate;
`

const TopBlock = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
`

const StyledContacts = styled.div`
  display: flex;
  justify-content: end;

  div {

  }
`