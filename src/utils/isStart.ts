import { applicationStatus } from "../constants/ApplicationStatus"

export const getIsStart = (appStatus:applicationStatus):boolean => {
    return appStatus === applicationStatus.START;
}