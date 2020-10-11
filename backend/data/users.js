import bcrypt from 'bcryptjs';
const users =[

    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Watson',
        email:'john@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Mary Watson',
        email:'mary@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users;