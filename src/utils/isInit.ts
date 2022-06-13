import { applicationStatus } from "../constants/ApplicationStatus"

export const getIsInit = (appStatus:applicationStatus):boolean => {
    return appStatus === applicationStatus.INIT;
}