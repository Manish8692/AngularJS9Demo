export class ResumeEducation {
    university: string;
    streamOrField: string;
    fromDate: Date;
    toDate: Date;
    percentage: number;

    constructor(univerity:string, streamOrField: string, fromDate: Date, toDate: Date, percentage: number){
        this.university =univerity;
        this.streamOrField = streamOrField;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.percentage = percentage;
    }

}
