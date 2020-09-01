import { DatePipe } from '@angular/common';

export class ResumeWorkExperience {
  designation: string;
  fromDate: Date;
  location: string;
  organization: string;
  projectDescription: string[];
  projectName : string;
  toDate: Date;

  constructor(designationOrRole: string, organization: string, fromDate: Date, toDate: Date, location: string, description: string[],projectName: string) {
    this.designation = designationOrRole;
    this.organization = organization;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.location = location;
    this.projectName = projectName;
    this.projectDescription = description;
  }
}
