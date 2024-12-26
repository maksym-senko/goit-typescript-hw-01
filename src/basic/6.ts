export interface Address {
    city: string;
    country: string;
};


export interface User {
    name: string;
    age: number;
    email: string;
    address?: Address;
};


export const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA',
    },
};


export const poly: User = {
    name: 'Poly',
    age: 25,
    email: 'poly@example.com',
};


export const printUserInfo = (user: User): void => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    if (user.address) {
        console.log(`Address: ${user.address.city}, ${user.address.country}`);
    } else {
        console.log('No address provided');
    }
};