import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "styles/Theme";

const items = [
    {title: 'Home', link: '#'},
    {title: 'Tech Stack', link: '#'},
    {title: 'Projects', link: '#'},
    {title: 'Contacts', link: '#'},
]


export const MobileMenu = () => {

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

            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    {listItems}
                </ul>
            </MobileMenuPopup>

        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(24, 24, 24, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 50;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fontMainTitle};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fontMainTitle};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fontMainTitle};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
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