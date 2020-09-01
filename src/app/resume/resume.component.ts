import { Component, OnInit } from '@angular/core';
import { ResumeWorkExperience } from '../Model/resume-work-experience'
import { strict } from 'assert';
import { ResumeEducation } from '../Model/resume-education';
import { ResumeLanguage } from '../Model/resume-language';
import { ResumeDetail } from '../Model/resume-detail';
import { ResumeOrganization } from '../Model/resume-organization';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ResumePageService }  from '../Services/resume-page.service'
import { PersonalDetail } from '../Model/personal-detail';
import { CourseCertificate } from '../Model/course-certificate';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  skills: any[];
  wrokExperience: ResumeWorkExperience[]
  description: string[];
  education: ResumeEducation[];
  languages: ResumeLanguage[];
  organizations: ResumeOrganization[];
  resumeForm: FormGroup;
  isPreview: boolean;
  hideWorkExperience: boolean;
  hideEducation: boolean;
  resumeDetail: ResumeDetail;
  hideOrganization : boolean;
  hideLanguage : boolean;
  isShowObjective : boolean;
  isShowCourseCertificate: boolean;
  hideCertificate: boolean;

  columnDefs = [
    {headerName: 'Skills', field: 'name' }
  ];

  constructor(private resumePageService : ResumePageService) { }

  ngOnInit(): void {
    this.hideWorkExperience = true;
    this.hideEducation = true;
    this.hideOrganization = true;
    this.hideLanguage = true;   
    this.hideCertificate = true;

    this.isShowObjective = false;
    this.isShowCourseCertificate = false;
    
    this.description = new Array<string>(); 
    this.resumeDetail = new ResumeDetail();
    //this.resumeDetail = this.resumePageService.dataInitialize();
    this.resumePageService.initResumeDetail().subscribe(
      (response : ResumeDetail) => {
        this.resumeDetail = response;  
        if(this.resumeDetail.courseOrCertificates == undefined) {
          this.resumeDetail.courseOrCertificates = new Array<CourseCertificate>();
        }     
        this.formInitialization();
      }
    );    
  }

  formInitialization(){
    this.resumeForm = new FormGroup(
      {
        firstName : new FormControl(this.resumeDetail.firstName),
        lastName : new FormControl(this.resumeDetail.lastName),
        currentDesignation: new FormControl(this.resumeDetail.designation),
        summary : new FormControl(this.resumeDetail.summary),
        emailId: new FormControl(this.resumeDetail.emailId),
        phoneNumber:new FormControl(this.resumeDetail.phoneNumber),
        currentLocation: new FormControl(this.resumeDetail.currentLocation),
        linkdinLink: new FormControl(this.resumeDetail.linkdinLink),
        skill: new FormControl(),
        objective : new FormControl(),
        workExperience : new FormGroup({
          designation : new FormControl(),
          organization : new FormControl(),
          fromDate: new FormControl(),
          toDate: new FormControl(),
          location: new FormControl(),
          projectDescription: new FormControl(),
          projectName: new FormControl()
        }),
        education : new FormGroup({
          university : new FormControl(),
          streamOrField : new FormControl(),
          fromDate: new FormControl(),
          toDate: new FormControl(),
          percentage: new FormControl()
        }),
        organization : new FormGroup({
          id : new FormControl(),
          designation: new FormControl(),
          fromDate: new FormControl(),
          name : new FormControl(),          
          toDate: new FormControl()          
        }),
        knownLanguage : new FormGroup({
          id : new FormControl(),
          name: new FormControl(),
          level: new FormControl()      
        }),
        personalDetail : new FormGroup({
          dateOfBirth : new FormControl(this.resumeDetail.personalDetail.dateOfBirth),
          permanentAddress : new FormControl(this.resumeDetail.personalDetail.permanentAddress),
          gender : new FormControl(this.resumeDetail.personalDetail.gender),
          maritalStatus : new FormControl(this.resumeDetail.personalDetail.maritalStatus),
          languageKnown : new FormControl(this.resumeDetail.personalDetail.languageKnown),
          hobbies : new FormControl(this.resumeDetail.personalDetail.hobbies),
          nationality : new FormControl(this.resumeDetail.personalDetail.nationality)
        }),
        courseOrCertificate: new FormGroup({
          courseOrCertificateName: new FormControl(),
          platform: new FormControl(),
          complitionDate: new FormControl()
        })
      }
    );
  }

  showPreview(isPreview:number){  
    debugger;
    this.isPreview = false;
    if(isPreview == 1){
      this.isPreview = true;
      this.resumeDetail.firstName = this.resumeForm.value.firstName;
      this.resumeDetail.lastName = this.resumeForm.value.lastName;
      this.resumeDetail.designation = this.resumeForm.value.currentDesignation;
      this.resumeDetail.emailId = this.resumeForm.value.emailId;
      this.resumeDetail.currentLocation = this.resumeForm.value.currentLocation;
      this.resumeDetail.linkdinLink = this.resumeForm.value.linkdinLink;
      this.resumeDetail.phoneNumber = this.resumeForm.value.phoneNumber;
      this.resumeDetail.summary = this.resumeForm.value.summary;

      this.resumeDetail.personalDetail = new PersonalDetail();
      this.resumeDetail.personalDetail.dateOfBirth = this.resumeForm.value.personalDetail.dateOfBirth;
      this.resumeDetail.personalDetail.permanentAddress = this.resumeForm.value.personalDetail.permanentAddress;
      this.resumeDetail.personalDetail.gender = this.resumeForm.value.personalDetail.gender;
      this.resumeDetail.personalDetail.maritalStatus = this.resumeForm.value.personalDetail.maritalStatus;
      this.resumeDetail.personalDetail.hobbies = this.resumeForm.value.personalDetail.hobbies;
      this.resumeDetail.personalDetail.nationality = this.resumeForm.value.personalDetail.nationality;
      this.resumeDetail.personalDetail.languageKnown = this.resumeForm.value.personalDetail.languageKnown;

      console.log(JSON.stringify(this.resumeDetail));
    }
  }

  // Skill
  addSkill(){
    this.resumeDetail.skills.push(this.resumeForm.value.skill);
    this.resumeForm.get("skill").reset();
  }

  removeSkill(index){
    this.resumeDetail.skills.splice(index,1);
  }

  //Work Experience
  removeDescription(index){
    this.description.splice(index,1);
  }

  addWorkExperienceDescription(){
    this.description.push(this.resumeForm.value.workExperience.projectDescription);
    this.resumeForm.get("workExperience").get("projectDescription").reset();
  }

  addWorkExperience(){
    this.resumeDetail.workExperiences.push(this.resumeForm.value.workExperience);
    this.resumeForm.get("workExperience").reset();
    this.resumeDetail.workExperiences[this.resumeDetail.workExperiences.length - 1].projectDescription = this.description;
    this.description= new Array<string>();
  }

  removeWorkExperience(index){
    this.resumeDetail.workExperiences.splice(index,1);
  }

  // Education
  addEducation(){
    this.resumeDetail.educations.push(this.resumeForm.value.education);
    this.resumeForm.get("education").reset();
  }

  removeEducation(index){
    this.resumeDetail.educations.splice(index,1);
  }

    // Organization
    addOrganization(){
      this.resumeDetail.organizations.push(this.resumeForm.value.organization);
      this.resumeForm.get("organization").reset();
    }
  
    removeOrganization(index){
      this.resumeDetail.organizations.splice(index,1);
    }

    // Organization
    addLanguage(){
      this.resumeDetail.knownLanguages.push(this.resumeForm.value.knownLanguage);
      this.resumeForm.get("knownLanguage").reset();
    }
    
    removeLanguage(index){
      this.resumeDetail.knownLanguages.splice(index,1);
    }

    addCertificate(){
      this.resumeDetail.courseOrCertificates.push(this.resumeForm.value.courseOrCertificate);
      this.resumeForm.get("courseOrCertificate").reset();
    }

    removeCertificate(index){
      this.resumeDetail.courseOrCertificates.splice(index,1);
    }

}
