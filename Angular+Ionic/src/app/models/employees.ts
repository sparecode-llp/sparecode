export interface Employees {
    firstName: string,
    lastName: string,
    orgRegCode: string,
    empId: string,
    email: string,
    designation?: string,
    department?: string,
    reportTo?: string,
    number: number,
    doj?: Date,
    salary?: number,
    idProof: string,
    idProofValue: any,
    password: string,
    confirmPassword: string,
}