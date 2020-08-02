export class PersonalDetail {
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public fatherName: string;
    public addressLine1: string;
    public addressLine2: string;
    public addressLine3: string;
    public cityName: string;
    public stateName: string;
    public maritalStatus: string;
    public emailId: string;
    public mobile: string;
    public phone: string;
    public facebookId: string;
    public corporateId: string;
    public education: string;
    public collegeName: string;
    public highestEducation: string;
    public heightInFeets: string;
    public heightInInches: string;
    public weight: string;
}

export class EmploymentDetails {
    public yearExperience: string;
    public monthExperience: string;
    public annualIncome: string;
    public designation: string;
    public compName: string;
    public employmentType: string;
}
export class DocUpload {
    public file: File;
}

export interface CIty {
    id: string;
    name: string;
} 