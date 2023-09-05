import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";

const items = [
    {title: 'Home', link: '#'},
    {title: 'Tech Stack', link: '#'},
    {title: 'Projects', link: '#'},
    {title: 'Contacts', link: '#'},
]


export const Menu = () => {

    const listItems = items.map(({title, link}, index) => {
        return <ListItem key={index}>
            <Link href={link}>
                {title}
                <Mask>
                    <span>{title}</span>
                </Mask>
                <Mask>
                    <span>{title}</span>
                </Mask>
            </Link>
        </ListItem>
    })

    return (
        <StyledMenu>
            <ul>
                {listItems}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`

const Link = styled.a`
  color: transparent;
  text-align: center;
  font-family: DM Sans, sans-serif;
  font-size: 25px;
  font-weight: 500;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.fontSecond};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }
  
  &:hover {
    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(12deg) translateX(2px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-2px);
      }
    }
  }
`