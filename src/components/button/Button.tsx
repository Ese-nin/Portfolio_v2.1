import React from 'react';
import styled from "styled-components";

type Props = {
    title: string
    callBack: () => void
}

export const Button: React.FC<Props> = (props) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <StyledButton onClick={onClickHandler}>{props.title}</StyledButton>
    );
};


const StyledButton = styled.button`
  background-color: crimson;
`