export interface Staff{
    StaffId: Int32Array;
    LastName: string;
    FirstName: string;
    Description?: string;
    PositionId: Int32Array;
    Contacts: StaffContacts;
    Positions: StaffPosition;
}
interface StaffContacts{
    Email: string;
    PhoneNumber: string;
}

interface StaffPosition{
    PositionId: Int32Array;
    PositionName: Positions;
    StaffMembers: Staff;
}

export enum Positions{
    Librarian = "Librarian",
    Administrator = "Administrator",
    Other = "Other"
}