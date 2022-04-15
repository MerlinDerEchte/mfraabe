import react from 'react';
import { ServicesWrapper } from './ServicesWrapper/ServicesWrapper';
import { ServiceCardComponent } from './ServicesWrapper/ServiceCardComponent/ServiceCardComponent';
import { FreelancerIcon } from './ServiceIconsSvg/FreelancerIcon';
import { ScriptIcon } from './ServiceIconsSvg/ScriptIcon';
import { WebsiteIcon } from './ServiceIconsSvg/WebsiteIcon';
import { EServiceType } from '../../../../../Types/EServiceType';
import { ServiceContentComponent } from './ServicesWrapper/ServiceContentComponent/ServiceContentComponent';
import { CallToActionButton } from '../../../../Shared/Button/CallToActionButton';
import { ServiceDeselect } from './ServicesWrapper/ServiceDeselect/ServiceDeselect';

export const ServiceCards: react.FC = () => {
    const handleOnContactButtonClick = () => {

    }
    
    return(
        <ServicesWrapper>
            <ServiceCardComponent service={EServiceType.FREELANCE} index={0}  >
                <FreelancerIcon />
            </ServiceCardComponent>
            <ServiceCardComponent  service={EServiceType.WEBSITES} index={1} >
                <WebsiteIcon />
            </ServiceCardComponent>
            <ServiceCardComponent service={EServiceType.SCRIPTING} index={2} >
                  <ScriptIcon />
            </ServiceCardComponent>
            <ServiceContentComponent service={EServiceType.FREELANCE}>
                <h1>Prefered tech stack</h1>
                <p>I am pretty fast to adapt, but this would by my favourite tech stack:</p>
                
                <ul>
                    <li>React</li>
                    <li>Node and Express or JAVA and Sping</li>
                    <li>Typescript</li>
                    <li>any relational database</li>
                    </ul>
               
                <h1>
                    Remote work
                </h1>
                <p>
                    Temporary move is possible, remote work prefered.
                </p>
                <h1>Payment</h1>
                <p>
                    I charge 85,- € / hour.
                </p>
                <div className="centered">
                    <CallToActionButton title='Contact me for availability or further skill information' callback={handleOnContactButtonClick()}/>
                </div>
                
            </ServiceContentComponent>
            <ServiceContentComponent service={EServiceType.WEBSITES} >
                <h1>Why i create Websites:</h1>
                <p>
                    My first web developing project was to create my moms website, which (luckily) doesn't exist anymore and i immediatly fell in love.<br/>
                    Over the years i was working as a web developper for several companies but i maintained the fun to create personal websites and therefore digital appearances.<br />
                    Most of my customers already have an idea what they want to create but what they don't have is the technical knowledge to create it, so i help them to make their vision become true.
                </p>
                <h1>What i offer:</h1>
                <ul>
                    <li>Your design implemented by me</li>
                    <li>A modern Single Page Application together with easy Content Management for you</li>
                    <li>Initial Search Engine Optimization</li>
                    <li>Pixel-perfect animations</li>
                </ul>
                <h1>
                    What i need to work:
                </h1>
                <p>In the best case szenario you already have a mockup that you want to implement.
                    Evendough i am not a designer, i can advise you how to create a mockup or connect you with some webdesigners to get a mockup.
                    If you have no idea what you want to have, it's a step to early to contact me.
                </p>
                <h1>What i charge:</h1>
                <ul>
                    <li> After an initial talk i will send you an individual offer. My offer will be based on a daily rate of 600,- €</li>
                </ul>
            </ServiceContentComponent>
            <ServiceContentComponent service={EServiceType.SCRIPTING} >

            </ServiceContentComponent>

            <ServiceDeselect />
        </ServicesWrapper>
    )
}