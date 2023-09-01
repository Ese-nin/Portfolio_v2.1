import React from 'react';
import {FlexContainer} from "components/FlexContainer";
import styled from "styled-components";
import {TitleSection} from "components/TitleSection";
import {Work} from "./work/Work";
import proj_1 from "assets/images/projectsIMG/project_1.jpg"
import proj_2 from "assets/images/projectsIMG/project_2.jpg"

export const Works = () => {
    return (
        <StyledWorks>
            <TitleSection title={'Projects'} description={'Things I’ve built so far'}/>
            <FlexContainer justify='space-around'>
                <Work imgSRC={proj_1} workTitle="Project Title goes here"
                      description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                      codeLinkSRC="" previewLinkSRC="" technologies="HTML , JavaScript, SASS, React"
                />
                <Work imgSRC={proj_2} workTitle="Project Title goes here"
                      description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                      codeLinkSRC="" previewLinkSRC="" technologies="HTML , JavaScript, SASS, React"
                />
            </FlexContainer>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
  min-height: 100vh;
`