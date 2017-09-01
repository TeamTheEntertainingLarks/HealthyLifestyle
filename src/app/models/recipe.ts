import { RecipeInterface } from './../interfaces/recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class Recipe implements RecipeInterface {
    public title: string;
    public author: string;
    public userId: string;
    public category: string;
    public createdOn: number;
    public description: string;
    public ingradients: string;
    public step1: string;
    public step2: string;
    public step3: string;
    public image: string;
    public likes: number;
    public comments: any;

    constructor(
        title: string = '',
        author: string = '',
        userId: string = '',
        category: string = '',
        createdOn: number = null,
        description: string = '',
        ingradients: any = null,
        step1: string = '',
        step2: string = '',
        step3: string = '',
        image: string = '',
        likes: number = 0,
        comments: any = null,
    ) {
        this.title = title;
        this.author = author;
        this.userId = userId;
        this.category = category;
        this.createdOn = createdOn;
        this.description = description;
        this.ingradients = ingradients;
        this.step1 = step1;
        this.step2 = step2;
        this.step3 = step3;
        this.image = image;
        this.likes = likes;
        this.comments = comments;
    }
}
