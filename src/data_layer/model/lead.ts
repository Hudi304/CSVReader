export class Lead{

    private name!: string;
    private isOwner!: boolean;
    private creditScore!: number;
    private age!: number;
    private phoneNo!: string;
    private email!: string;
    private ethnicity!: string;
    private minIncome!: number;
    private maxIncome!: number;

//   constructor(
//     name: string, 
//     isOwner: string, 
//     creditScore: number, 
//     age: number, 
//     phoneNo: number, 
//     email: string, 
//     ethnicity: string, 
//     minIncome: string, 
//     maxIncome: string
// ) {
//     this.name = name
//     this.isOwner = isOwner
//     this.creditScore = creditScore
//     this.age = age
//     this.phoneNo = phoneNo
//     this.email = email
//     this.ethnicity = ethnicity
//     this.minIncome = minIncome
//     this.maxIncome = maxIncome
//     }
    
    constructor(){}
    
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getIsOwner(): boolean {
        return this.isOwner;
    }
    public setIsOwner(isOwner: boolean): void {
        this.isOwner = isOwner;
    }
    public getCreditScore(): number {
        return this.creditScore;
    }
    public setCreditScore(creditScore: number): void {
        this.creditScore = creditScore;
    }
    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        this.age = age;
    }
    public getPhoneNo(): string {
        return this.phoneNo;
    }
    public setPhoneNo(phoneNo: string): void {
        this.phoneNo = phoneNo;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public getEthnicity(): string {
        return this.ethnicity;
    }
    public setEthnicity(ethnicity: string): void {
        this.ethnicity = ethnicity;
    }
    public getMinIncome(): number {
        return this.minIncome;
    }
    public setMinIncome(minIncome: number): void {
        this.minIncome = minIncome;
    }
    public getMaxIncome(): number {
        return this.maxIncome;
    }
    public setMaxIncome(maxIncome: number): void {
        this.maxIncome = maxIncome;
    }
}