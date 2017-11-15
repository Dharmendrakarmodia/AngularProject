export interface IEmployee {
    code : string;
    Name : string;
    gender : string;
    salary : number;
    dob? : string;
   
}
export class Employee implements IEmployee {
    constructor( public code : string, public Name : string,public gender : string,
        public  salary : number,public dob : string) {

    }
    
}