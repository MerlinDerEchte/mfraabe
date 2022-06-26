import React, { ReactElement, ReactNode } from 'react';
import { EDevelopmentType } from "../../EDevelopmentType";
import { FreelancerIcon } from "./DevelopmentIconsSvg/FreelancerIcon";
import { MonitorIcon } from "./DevelopmentIconsSvg/MonitorIcon";
import { ScriptIcon } from "./DevelopmentIconsSvg/ScriptIcon";
import { ProfessionalDevelopmentTemplate } from './DevelopmentTemplates/ProfessionalDevelopmentTemplate';
import { RecommandationsDevelopmentTemplate } from './DevelopmentTemplates/RecommandationsDevelopmentTemplate';
import { SoloDevelopmentTemplate } from './DevelopmentTemplates/SoloDevelopmentTemplate';

export const mapDevelopmentTypeToSVG = (developmentType: EDevelopmentType) =>{

    switch(developmentType){
        case EDevelopmentType.PROFESSIONAL: return React.createElement(FreelancerIcon);
        case EDevelopmentType.RECOMMENDATIONS: return React.createElement(ScriptIcon);
        case EDevelopmentType.SOLO: return React.createElement(MonitorIcon);
        default: React.createElement('') ;
    }

}

export const mapDevelopmentTypeToTemplate = (developmentType: EDevelopmentType) => {
    switch(developmentType){
        case EDevelopmentType.PROFESSIONAL: return React.createElement(ProfessionalDevelopmentTemplate);
        case EDevelopmentType.SOLO: return React.createElement(SoloDevelopmentTemplate);
        case EDevelopmentType.RECOMMENDATIONS: return React.createElement(RecommandationsDevelopmentTemplate);
        default: return React.createElement('');
    }
}