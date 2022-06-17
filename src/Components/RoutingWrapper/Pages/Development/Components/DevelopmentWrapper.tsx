import react, { useContext } from 'react';
import { createDevelopmentWrapperStyles } from './DevelopmentWrapperStyles';
import styled from '@emotion/styled';
import { EDevelopmentType } from '../EDevelopmentType';
import { DevelopmentCard } from './DevelopmentCard/DevelopmentCard';
import { FreelancerIcon } from './DeveelopmentIconsSvg/FreelancerIcon';
import { WebsiteIcon } from './DeveelopmentIconsSvg/WebsiteIcon';
import { ScriptIcon } from './DeveelopmentIconsSvg/ScriptIcon';
import { DevelopmentContent } from './DevelopmentContent/DevelopmentContent';
import { DevelopmentCancel } from './DevelopmentCancel/DevelopmentCancel';
import { CurriculumVitaeWrapper } from './CurriculumVitaeWrapper';
import { GlobalContext } from '../../../../GlobalContext';



export const DevelopmentWrapper:react.FC<{}> = () => {
    const { screenWidth } = useContext(GlobalContext);
    const StyledServicesWrapper = styled.div( createDevelopmentWrapperStyles(screenWidth) )
    return(
        <StyledServicesWrapper>
              <DevelopmentCard service={EDevelopmentType.DEVELOPMENT_IN_TEAMS} index={0}  >
                <FreelancerIcon />
            </DevelopmentCard>
            <DevelopmentCard  service={EDevelopmentType.WEBSITES} index={1} >
                <WebsiteIcon />
            </DevelopmentCard>
            <DevelopmentCard service={EDevelopmentType.RECOMMENDATIONS} index={2} >
                  <ScriptIcon />
            </DevelopmentCard>
            <DevelopmentContent service={EDevelopmentType.DEVELOPMENT_IN_TEAMS}>
                <h1>Companies I worked for as a developer</h1>
                <p>
                    TÜV Süd Industrie Services <br />
                    Magnitude Innovations <br />
                    Check24 Kfz-Versicherungen
                </p>
                <h1>CV</h1>
                <CurriculumVitaeWrapper />
                <h1>Favourite tech stack</h1>
                <ul>
                    <li>React or Angular (both with TypeScript and a strong type system)</li>
                    <li>Scss in a style framework or styled components</li>
                    <li>Redux</li>
                    <li>Rest Apis</li>
                    <li>Node and in the best case Express Backend (Typescript)</li>
                </ul>

                <h1>Working on a big codebase</h1>
                <p>
                    For me the work on a big code base differs drastically from working on a solo project. <br />
                    In a perfect codebase, everything would be well structured with few dependencies. Everything would be documented, there would be rules how code should be written and tested.<br />
                    The newest technologie would be used and everything would be divided into small components.<br />
                    Too many 'would's ? Well most of the big code bases aren't like the perfect world scenario and miss some of the mentioned points. So working on them is always a mixture of maintance, replacement and implementation of new features. <br />
                    But there is also another difference: Others depend on your work.
                    Sometimes more than one developer works on a task. Therefore more frequent commits and communication about the progress are needed.  
                    
                </p>

                <h1>Working in a development team</h1>
                <p>
                    Given the right circumstances i enjoy working in a scrum team. For me those are, that the overall spirit is commitment to work on the one hand 
                    and having fun in the daily business on the other hand.<br/>
                    I also really enjoy a team culture, where everybody is willing to share his knowledge and is open for objective criticism in both directions.<br />
                    Nothing motivates me more than passionated collegues that i can challenge with and learn from. <br />
                    It is not important to me to share my free time with my collegues but i want to have a friendly relationship with them.
                </p>
                <h1>Working with Product Managers and Quality Assurers</h1>
                <p>
                    For me as a developer with focus on the frontend it is important to have propper, fixed mockups and clean written tickets.<br />
                    A good Project Manager knows the product and the technical side so well,<br/> 
                    that he knows when to ask a developer what needs to be considered in the creation of a ticket.<br />
                    The Quality Assurer needs to be even more familiar with the product. He needs to know every special case and needs to have an eye for even small imperfections.<br />
                    When i work on a logical problem i sometimes miss small optical anomalies and therefore i am really thankful for this instance.
                    A positve relationship with both of the parties is key for me to have an enjoyable and therefore more productive time in a team.
                </p>
                
            </DevelopmentContent>
            <DevelopmentContent service={EDevelopmentType.WEBSITES} >
                <h1>Github</h1>
                <p><a href="https://github.com/MerlinDerEchte">Go to my github repository.</a></p>
                <h1>Algorithmic challenges</h1>
                <p><a href="https://www.codewars.com/users/Raabenilson/completed_solutions">Go to my Codewars solutions.</a></p>
                <h1>Splitscreen chess</h1>
                <p>
                    I developped a chess web-app that you can use to play chess on the same screen if you only have one device,
                    or play online via Link invitation.<br />
                    <a href="https://merlinderechte.github.io/splitscreen-chess-frontend">Live demo</a>
                </p>
                <h1>Websites for small Businesses:</h1>
                <p>
                    I create website for people around me.<br/>
                    For some of them i design the websites too, but i wouldn't consider myself to be a web designer.
                    Right now the websites for Sc München Süd and Florian Kuhn (<a href="https://merlinderechte.github.io/florian-kuhn/#/work">Live demo</a>) are in the making.
                </p>
                <h1>Excel and Googlesheets scripting</h1>
                <p>
                    I actually don't use Excel or Googlesheets that much for my work but Excel makros have been my first touch with programming and
                    i still enjoy to solve some problems with a makro whenever someone reaches out to me.
                </p>
                <h1>
                    Raspberry Pi Projects
                </h1>
                <p>
                    Norbert: <br/>
                    A physical command listener used to turn on and of roomlights.  
                </p>
                <p>
                    An alarm that controlls a coffe machine and a phonograph. 
                </p>

            </DevelopmentContent>
            <DevelopmentContent service={EDevelopmentType.RECOMMENDATIONS} >
                <h1>Books</h1>
                <p><q>Programming TypeScript: Making Your JavaScript Applications Scale</q></p>
                <p><q>Javascript: The Definitive Guide</q></p>
                <p><q>Clean Code</q> and <q>Clean Architecture</q></p>
                <p><q>Node: Up and running</q></p>
                <h1>Websites</h1>
                <p><a href="https://www.w3schools.com">w3schools</a></p>
                <p><a href="https://medium.com/">Medium</a></p>
                <p><a href="https://www.theodinproject.com/">The Odin Project</a></p>
                <h1>Youtube channels</h1>
                <p><a href="https://www.youtube.com/c/WebDevSimplified">Web Dev Simplified</a> - (small Web Development topics perfectly explained)</p>
                <p><a href="https://www.youtube.com/c/DevEd">Dev Ed</a> - (longer Frontend and Web design tutorials)</p>
                <p><a href="https://www.youtube.com/c/Fireship">Fireship</a> - (short introductions)</p>
                <p><a href="https://www.youtube.com/c/programmingwithmosh">Programming with Mosh</a> - (longer Fullstack tutorials)</p>
            </DevelopmentContent>
            <DevelopmentCancel />
        </StyledServicesWrapper>
    )
}