import { RecipeInterface } from './../interfaces/recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class Recipe implements RecipeInterface {
    public title: string;
    public author: string;
    public category: string;
    public createdOn: Date;
    public description: string;
    public ingradients: string[];
    public steps: any;
    public image: string;
    public comments: string[];

    constructor(
        title: string = '',
        author: string = '',
        category: string = null,
        createdOn: Date = new Date(Date.now()),
        description: string = '',
        ingradients: string[] = null,
        steps: any = '',
        image: string = '',
        comments: string[] = null,
    ) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.createdOn = createdOn;
        this.description = description;
        this.ingradients = ingradients;
        this.steps = steps;
        this.image = image;
        this.comments = comments;
    }
}
