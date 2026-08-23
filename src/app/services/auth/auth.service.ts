import { Injectable } from '@angular/core';

interface signUpLoginBody  {
    email: string,
    password: string,
}

@Injectable({providedIn: 'root'})
export class AuthService{
async signUp(signUpUserData: signUpLoginBody) {
    const response = await fetch(' http://localhost:3000/register', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(signUpUserData)
    })

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json();
    console.log(data);
    return data;
}

}
