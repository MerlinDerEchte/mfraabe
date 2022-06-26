import { CurriculumVitaeWrapper } from "./CurriculumVitaeWrapper";

import react from 'react';
import { DocumentIcon } from "../DevelopmentIconsSvg/DocumentIcon";


export const ProfessionalDevelopmentTemplate:react.FC<{}> = () => { 



    return(
        <>
            <h1>Companies I worked for as a developer</h1>
            <ul>
                <li>TÜV Süd Industrie Services</li>
                <li>Magnitude Innovations</li> 
                <li>Check24 Kfz-Versicherungen</li>
            </ul>
            <h1>CV</h1>
            <div className="cvWrapper">
                <a href="/mfraabe/images/Merlin_Raabe_CV_2022.pdf" download="Merlin_Raabe_CV_2022">
                 <DocumentIcon />
                </a>
            </div>
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
        </>
    )
}