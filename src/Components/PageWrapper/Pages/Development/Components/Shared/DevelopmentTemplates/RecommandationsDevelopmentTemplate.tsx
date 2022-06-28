import react from 'react';


export const RecommandationsDevelopmentTemplate:react.FC<{}> = ( )=>{


    return(
        <>
            <h1>Books</h1>
            <ul>
                <li><q>Programming TypeScript: Making Your JavaScript Applications Scale</q></li>
                <li><q>Javascript: The Definitive Guide</q></li>
                <li><q>Clean Code</q> and <q>Clean Architecture</q></li>
                <li><q>Node: Up and running</q></li>
            </ul>
            <h1>Websites</h1>
            <ul>
                <li><a href="https://www.w3schools.com">w3schools</a> - (good documentation espacially for html)</li>
                <li><a href="https://medium.com/">Medium</a> - (short inspirement reads)</li>
                <li><a href="https://www.theodinproject.com/">The Odin Project</a> - (a free guide to Web Development)</li>
            </ul>
            <h1>Youtube channels</h1>
            <ul>
                <li><a href="https://www.youtube.com/c/WebDevSimplified">Web Dev Simplified</a> - (small Web Development topics perfectly explained)</li>
                <li><a href="https://www.youtube.com/c/DevEd">Dev Ed</a> - (longer Frontend and Web design tutorials)</li>
                <li><a href="https://www.youtube.com/c/Fireship">Fireship</a> - (short introductions)</li>
                <li><a href="https://www.youtube.com/c/programmingwithmosh">Programming with Mosh</a> - (longer Fullstack tutorials)</li>
            </ul>
        </>
    )
}