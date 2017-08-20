import { UserInterface } from './../../../interfaces/user';
import { RecipeInterface } from './../../../interfaces/recipe';
import { WorkoutInterface } from '../../../interfaces/workout';

export interface ModelFactoryInterface {
    createRecipe(title: string, author: string): RecipeInterface;

    createActivity();

    createArticle();

    createWorkout(
        title: string,
        author: string,
        createdOn: Date,
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
