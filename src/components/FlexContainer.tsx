import styled from "styled-components";

type Props = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  gap: ${props => props.gap || "0px"};
  height: 100%;
`