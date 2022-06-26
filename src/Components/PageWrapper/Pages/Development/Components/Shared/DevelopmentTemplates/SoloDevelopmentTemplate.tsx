import react from 'react';


export const SoloDevelopmentTemplate:react.FC<{}> = () => { 



    return(
        <>
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
        </>
    )
}