import { Injectable } from '@angular/core';

import { ModelFactoryInterface } from './interfaces/model.factory';

import { Recipe } from '../../models/recipe';
import { User } from '../../models/user';
import { Workout } from './../../models/workout';

@Injectable()
export class ModelFactory implements ModelFactoryInterface {
    createRecipe(title: string, author: string) {
        return new Recipe(title, author);
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
        createdOn: Date,
        image: string,
        description: string,
        content: string,
        comments: Array<string>) {
        return new Workout(title, author, createdOn, image, description, content, comments);
    }

    createUser(username: string,
        firstName: string,
        lastName: string,
        email: string,
        isTrainer: boolean) {
        return new User(username, firstName, lastName, email, isTrainer);
    }
}
