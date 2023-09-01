import React from 'react';
import {Icon} from "components/icon/Icon";

type Props = {
    iconId: string
    title: "Live Preview" | "View Code"
    linkSRC: string
}

export const ProjectLink: React.FC<Props> = (props) => {

    const viewBox = props.title === "View Code" ? "0 0 110 110" : "0 0 25 25"

    return (
        <div>
            <Icon iconId={props.iconId} width="20" height="20" viewBox={viewBox}/>
            <a href={props.linkSRC}>{props.title}</a>
        </div>
    );
};