import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";

type Props = {
    iconId: string
    title: "Live Preview" | "View Code"
    linkSRC: string
}

export const ProjectLink: React.FC<Props> = (props) => {

    const viewBox = props.title === "View Code" ? "0 0 110 110" : "0 0 25 25"

    return (
        <LinkBlock>
            <Icon iconId={props.iconId} width="20" height="20" viewBox={viewBox}/>
            <Link href={props.linkSRC}>{props.title}</Link>
        </LinkBlock>
    );
};

const LinkBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const Link = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
`