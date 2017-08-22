import { WorkoutInterface } from './../interfaces/workout';
import { Injectable } from '@angular/core';

@Injectable()
export class Workout implements WorkoutInterface {
    public title: string;
    public author: string;
    public createdOn: Date;
    public image: string;
    public description: string;
    public content: string;
    public comments: string[];

    constructor(
        title: string,
        author: string,
        createdOn: Date,
        image: string,
        description: string,
        content: string,
        comments: Array<string>
    ) {
        this.title = title;
        this.author = author;
        this.createdOn = createdOn;
        this.image = image;
        this.description = description;
        this.content = content;
        this.comments = comments;
    }
}
