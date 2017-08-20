import { Injectable } from '@angular/core';
import { RecipeInterface } from '../interfaces/recipe';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeFactory {
    create(title: string, author: string) {
        return new Recipe(title, author);
    }
}
