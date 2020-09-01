import { ResumeWorkExperience } from './resume-work-experience';
import { ResumeEducation } from './resume-education';
import { ResumeOrganization } from './resume-organization';
import { ResumeLanguage } from './resume-language';
import { PersonalDetail } from './personal-detail';
import { CourseCertificate } from './course-certificate'

export class ResumeDetail {
    firstName:string;
    lastName: string;
    designation:string;
    summary: string;
    emailId:string;
    currentLocation:string;
    linkdinLink: string;
    phoneNumber:string;
    skills: string[];
    workExperiences : ResumeWorkExperience[];
    educations: ResumeEducation[];
    organizations: ResumeOrganization[];
    knownLanguages: ResumeLanguage[];
    personalDetail: PersonalDetail;
    courseOrCertificates: CourseCertificate[];
    objective: string;

    constructor(){
        debugger;
       this.courseOrCertificates = new Array<CourseCertificate>()
    }
}
