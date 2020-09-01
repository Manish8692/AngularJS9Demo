export class ResumeOrganization {
    id: number;
    designation: string;
    fromDate: Date;
    name: string;    
    toDate: Date;
    

    constructor(id: number, name:string, fromDate:Date, toDate:Date, designation:string){
        this.id = id;
        this.name = name;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.designation = designation;
    }
      
}
