import { RecipeInterface } from './../interfaces/recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class Recipe implements RecipeInterface {
    title: string;
    author: string;
    category?: string;
    createdOn?: Date;
    description?: string;
    ingradients?: string[];
    steps?: any;
    image?: string;
    comments?: string[];

    constructor(
        title: string,
        author: string,
        category: string = '',
        createdOn: Date = null,
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
