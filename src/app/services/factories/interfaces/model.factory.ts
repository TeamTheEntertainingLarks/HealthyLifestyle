import { UserInterface } from './../../../interfaces/user';
import { RecipeInterface } from './../../../interfaces/recipe';
import { WorkoutInterface } from '../../../interfaces/workout';

export interface ModelFactoryInterface {
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
        comments?: Array<string>): RecipeInterface;

    createActivity();

    createArticle();

    createWorkout(
        title: string,
        author: string,
        createdOn: number,
        image: string,
        description: string,
        content: string,
        comments: Array<string>): WorkoutInterface;

    createUser(
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        isTrainer: boolean): UserInterface;
}
