export default class Contact {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;

    constructor(id: number, firstName: string, lastName: string, email: string, phone: string) {
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Phone = phone;
    }
}