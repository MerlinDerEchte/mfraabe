import { applicationStatus } from "../constants/ApplicationStatus"

export const getIsRun = (appStatus:applicationStatus):boolean => {
    return appStatus === applicationStatus.RUN;
}