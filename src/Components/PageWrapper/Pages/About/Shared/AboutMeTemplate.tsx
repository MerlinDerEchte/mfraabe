import react from 'react';


export const AboutMeTemplate:react.FC<{}> = () =>{

    return( <>    
                <h1>About myself and coding</h1>    
                 <p>
                    As a child i was always fascinated by logical problems.
                    I played lots of chess and strategie games and math was the only subject at school 
                    that i was honestly interested in. <br />
                    Unfortunately during school i never came in touch with coding. This happened only while i was already studying statsics.
                    I was immediately fascinated by the possibilties and logical challenges coding provides.
                    At that time i have been working for Tüv Süd as a working student. I had to transform very big excel sheets and 
                    had therefore a very practical use for my new (very little) knowledge. Fortunately my superior recognized my interest and gave me 
                    the chance to work in a web development team. I finsihed my studies but decided to work as a developper. <br />
                    The feeling to create something in a structured and maintainable way satisfies me more than the work as a statistican. <br />
                </p>
                 <h1>
                     Other hobbies
                 </h1>
                 <ul>
                    <li>Football<br />
                     I play in an amateur division for Sc München Süd.
                    </li>
                    
                    <li>

                     Chess <br />
                     Chess is my favourite game as it is purely logical and there is no luck included at all.
                     I admire chess pros for their ability to calculate through hundreds of possibilities and to memorize thousands of played positions and the corresponding evaluations.
                    </li>
                     
                    <li>

                     Skateboarding<br />
                     As teenager i skated everyday for about 2 years. Some injuries later i stopped and 
                     restarted a year ago but with more focus on the movement rather than on (some times) dangerous tricks.
              
                    </li>
                 </ul>
            </>
    )
};