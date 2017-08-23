import { UserInterface } from './../interfaces/user';
import { Injectable } from '@angular/core';

@Injectable()
export class User implements UserInterface {
    public username: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public isTrainer: boolean;

    constructor(
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        isTrainer: boolean
    ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isTrainer = isTrainer;
    }
}