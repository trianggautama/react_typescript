import { UserListModel } from "../Models/UserListModel";

export class UserService {
    private static  users:UserListModel[] = [
        {
            'serial_number' : '001',
            'name'          : 'tri',
            'age'           : 25,
            'designation'   : 'Software Engineer',
            'company'       : 'Diskominfotik'
        },
        {
            'serial_number' : '002',
            'name'          : 'Angga',
            'age'           : 24,
            'designation'   : 'Database Designer',
            'company'       : 'Diskominfotik'
        },
        {
            'serial_number' : '003',
            'name'          : 'Utama',
            'age'           : 22,
            'designation'   : 'DevOps',
            'company'       : 'Diskominfotik'
        },
    ]

    public static getAllUsers(){
        return this.users
    }
    
}