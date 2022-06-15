import react, {useContext} from 'react';
import { GlobalContext } from '../../GlobalContext';
import { createCompanyLogoStyles } from './CompanyLogoStyles';
import { SloganLetter } from './SloganLetter/SloganLetter';
import { useLocation } from 'react-router';
import { EPaths } from '../../constants/paths';
import { createMobileCompanyLogoStyles } from './CompanyLogoStylesMobile';


export const CompanyLogo:react.FC<{}> = () => {
    const { isInit, isStart, screenHeight, screenWidth, isMobile } = useContext(GlobalContext);
    const location = useLocation();
    
  
    const isInitialPath = location.pathname === EPaths.NONE;
    const companyLogoStyles = createCompanyLogoStyles({isInit, isStart, isInitialPath, screenHeight, screenWidth });
    const companyLogoStylesMobile = createMobileCompanyLogoStyles({isInit, isStart, isInitialPath, screenHeight, screenWidth});
    //const StyledCompanyLogoDiv = isMobile ? styled.div(comanyLogoStylesM) : styled.div(companyLogoStyles)
    
    return(
        <div className={companyLogoStylesMobile}>
            <div id="LogoSvg" >
                <svg viewBox="0 0 2000 1968.75" stroke="3">
                    <g>
                        <path id='svgPath' d="M988.52,1103.28v584.68h89.72v-506.73l459.67,399.36c113.49-13.32,513.85-279.81,440.52-786.15
                            c-33.4-230.59-164.81-435.26-348.26-579.83c-92.66-73.02-197.16-127.86-310.58-162.98C1223.76,21.94,1123.42,7,1020.42,7
                            c-24.98,0-50.1,0.88-75.37,2.64C664.49,29.18,402.41,165.08,226.02,382.5C138.86,489.92,76.63,610.9,41.06,742.09
                            c-37.2,137.17-43.16,278.67-17.71,420.57c41.97,234.04,170.35,443.69,361.51,590.32c192.4,147.59,433.56,219.46,679.03,202.36
                            c198.19-13.8,385.53-84.51,542.62-204.68l-51.89-53.87c-146.18,109.3-311.86,171.08-492.66,183.68
                            c-227.87,15.86-450.76-49.74-627.62-184.75c-175.86-134.25-294.11-327.47-332.95-544.07c-22.93-127.86-17.76-256.35,15.35-381.9
                            c31.9-120.94,87.87-232.7,166.35-332.18c78.78-99.86,175.31-181.05,286.91-241.32C686.6,133.26,813.59,96.61,947.47,87.28
                            c237.36-16.53,453.14,43.82,624,174.52c82.89,63.41,152.38,141.57,206.53,232.3c54.94,92.05,93.23,195.09,112.86,306.41
                            c67.42,382.29-222.92,669.67-335.44,673.86l-0.37,2.23l-379.67-329.82c238.21-15.75,425.53-180.72,425.53-381.89
                            c0-155.66-112.18-289.64-273.26-349.6v-70.64H603.14v89.71h373.54l0,0L782.15,805.18L575.39,625.55l-89.72-77.94v118.82v922.37
                            h89.72V744.37l163.95,142.44l69.56,60.45l42.85-81.66l136.78-260.73v256.16h-69.03v89.72h69.03v33.71V1103.28z M1526.79,764.9
                            c0,168.19-174.07,304.54-388.83,304.54c-18.71,0-37.1-1.02-55.09-3.03l-4.64-4.01V950.74h164.34v-89.72h-164.34V463.88
                            c19.47-2.33,39.43-3.55,59.72-3.55C1352.72,460.32,1526.79,596.68,1526.79,764.9z"/>
                
                    </g>
                </svg>
            </div>
            <div className="CompanySlogan">
                <div className="CompanySloganRow">
                    <SloganLetter title="W" index={0}></SloganLetter>
                    <SloganLetter title="e" index={1}></SloganLetter>
                    
                    <SloganLetter title="b" index={2} isSpace></SloganLetter>

                    <SloganLetter title='&' index={3} isSpace></SloganLetter>
                    
                    <SloganLetter title='S' index={4} ></SloganLetter>
                    
                    <SloganLetter title="c" index={5}></SloganLetter>

                    <SloganLetter title="r" index={6}></SloganLetter>
              
                    <SloganLetter title="i" index={7}></SloganLetter>
            
                    <SloganLetter title="p" index={8}></SloganLetter>
             
                    <SloganLetter title="t" index={9}></SloganLetter>
                   
                </div>

                <div className="CompanySloganRow">
                    <SloganLetter title="D" index={10}></SloganLetter>
                  
                    <SloganLetter title="e" index={11}></SloganLetter>

                    <SloganLetter title="v" index={12}></SloganLetter>

                    <SloganLetter title="e" index={13}></SloganLetter>

                    <SloganLetter title="l" index={14}></SloganLetter>

                    <SloganLetter title="o" index={15}></SloganLetter>

                    <SloganLetter title="p" index={16}></SloganLetter>

                    <SloganLetter title="m" index={17}></SloganLetter>

                    <SloganLetter title="e" index={18}></SloganLetter>

                    <SloganLetter title="n" index={19}></SloganLetter>

                    <SloganLetter title="t" index={20}></SloganLetter>
                </div>
            </div>
            <div id="Underline"></div>
        </div>
    )
}
