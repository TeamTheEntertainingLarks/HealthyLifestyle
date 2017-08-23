import { Routine } from './../../models/routine';
import { Injectable } from '@angular/core';

import { ModelFactoryInterface } from './interfaces/model.factory';

import { Recipe } from '../../models/recipe';
import { User } from '../../models/user';
import { Workout } from './../../models/workout';
import { Category } from '../../enums/workoutCategories';

@Injectable()
export class ModelFactory implements ModelFactoryInterface {
    createRecipe(
        title: string,
        author: string,
        category: string,
        createdOn: number,
        description: string,
        ingradients: any,
        step1: string,
        step2: string,
        step3: string,
        image: string,
        comments?: Array<string>) {
        return new Recipe(title, author, category, createdOn, description, ingradients, step1, step2, step3, image, comments);
    }

    createActivity() {
        // TODO: Implement activity class
    }

    createArticle() {
        // TODO: Implement article class
    }

    createWorkout(
        title: string,
        author: string,
        createdOn: number,
        category: Category,
        routines: Array<Routine>,
        description: string,
        comments: Array<string>) {
        return new Workout(title, author, createdOn, category, routines, description, comments);
    }

    createUser(
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        isTrainer: boolean,
        profileImage: any) {
        return new User(username, firstName, lastName, email, isTrainer, profileImage);
    }
}
