type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
};


export function createOrUpdateUser(initialValues: Partial<User>) {
    console.log(initialValues);
}
  
createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
});