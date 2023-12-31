import {Container} from "components/Container";
import React from 'react';
import {FlexContainer} from "components/FlexContainer";
import styled from "styled-components";
import {TitleSection} from "components/TitleSection";
import {Work} from "./work/Work";
import proj_1 from "assets/images/projects/project_1.jpg"
import proj_2 from "assets/images/projects/project_2.jpg"
import proj_3 from "assets/images/projects/project_3.jpg"

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <TitleSection title={'Projects'} description={'Things I’ve built so far'}/>
                <FlexContainer justify='space-between' wrap='wrap'>
                    <Work imgSRC={proj_1} workTitle="Project Title goes here"
                          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                          codeLinkSRC="https://www.google.com" previewLinkSRC="https://www.ya.ru" technologies="HTML , JavaScript, SASS, React"
                    />
                    <Work imgSRC={proj_2} workTitle="Project Title goes here"
                          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                          codeLinkSRC="https://www.google.com" previewLinkSRC="https://www.ya.ru" technologies="HTML , JavaScript, SASS, React"
                    />
                    <Work imgSRC={proj_3} workTitle="Project Title goes here"
                          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                          codeLinkSRC="https://www.google.com" previewLinkSRC="https://www.ya.ru" technologies="HTML , JavaScript, SASS, React"
                    />
                </FlexContainer>
            </Container>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
  
`