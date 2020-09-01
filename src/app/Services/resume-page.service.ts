import { Injectable } from '@angular/core';
import { ResumeDetail } from '../Model/resume-detail';
import { ResumeWorkExperience } from '../Model/resume-work-experience';
import { ResumeEducation } from '../Model/resume-education';
import { ResumeLanguage } from '../Model/resume-language';
import { ResumeOrganization } from '../Model/resume-organization';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumePageService {

  resumeDetail: ResumeDetail;

  constructor(private httpService: HttpClient) { }

  dataInitialize(): ResumeDetail {

    this.resumeDetail = new ResumeDetail();
    this.resumeDetail.firstName = "Manish";
    this.resumeDetail.lastName = "Sonar";
    this.resumeDetail.designation = "Senior Software Engineer";
    this.resumeDetail.summary = "6+ years experience on variopus Microsoft Technologies";
    this.resumeDetail.emailId= "sonarmanish9@gmail.com";
    this.resumeDetail.phoneNumber="+91-8421203947";
    this.resumeDetail.currentLocation = "Pune,MH India";
    this.resumeDetail.linkdinLink = "Linkdin";
    this.resumeDetail.skills =  ["Asp.Net",  "Dot Net Web API", "AngularJs" , "Microsoft Azure", "NodeJs API"];
    
    this.resumeDetail.workExperiences = new Array<ResumeWorkExperience>(); 
    var description = new Array<string>();
    description.push("Developer");
    description.push("Developer 2");
    this.resumeDetail.workExperiences.push(new ResumeWorkExperience("Senior Software Engineer", "Cybage Software", new Date(), new Date(), "Pune,MH India", description,"TRIBE TKO"))

    this.resumeDetail.educations = new Array<ResumeEducation>();
    this.resumeDetail.educations.push(new ResumeEducation("Gujarat Technological University","B.E. Computer Science",new Date(),new Date(),6.33))

    this.resumeDetail.knownLanguages = new Array<ResumeLanguage>();
    this.resumeDetail.knownLanguages.push(new ResumeLanguage(1,"English","Proficiency"));
    this.resumeDetail.knownLanguages.push(new ResumeLanguage(2,"Hindi","Native"));

    this.resumeDetail.organizations = new Array<ResumeOrganization>();
    this.resumeDetail.organizations.push(new ResumeOrganization(1,"Cybage Software", new Date(),null, "Senior Software Engineer"));
    this.resumeDetail.organizations.push(new ResumeOrganization(2,"Websym Solution Pvt Ltd", new Date(),new Date(), "Software Engineer"));

    return this.resumeDetail;
  }

  initResumeDetail(): Observable<ResumeDetail>
  {
    var detail = this.httpService.get<ResumeDetail>(this.getBasePath() + "/MS-resume.json");
    return detail;
  }

  getBasePath(): string {
    return "http://192.168.1.9:8866";
  }

}
