import { ActivityInterface } from './../../../interfaces/activity';
import { ExerciseInterface } from './../../../interfaces/exercise';
import { Routine } from './../../../models/routine';
import { UserInterface } from './../../../interfaces/user';
import { RecipeInterface } from './../../../interfaces/recipe';
import { WorkoutInterface } from '../../../interfaces/workout';
import { Category } from '../../../enums/workoutCategories';

export interface ModelFactoryInterface {
    createRecipe(
        title: string,
        author: string,
        userId: string,
        category: string,
        createdOn: number,
        description: string,
        ingradients: any,
        step1: string,
        step2: string,
        step3: string,
        image: string,
        comments?: Array<string>): RecipeInterface;

    createActivity(
        userdId: string,
        title: string,
        author: string,
        category: string,
        description: string,
        location: object,
        eventDate: string,
        createdOn: number,
        image: any,
        participants?: Array<any>,
        comments?: Array<string>): ActivityInterface;

    createArticle();

    createWorkout(
        title: string,
        author: string,
        createdOn: number,
        category: Category,
        routines: Array<Routine>,
        description: string,
        comments: Array<string>): WorkoutInterface;

    createUser(
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        isTrainer: boolean,
        profileImage: any): UserInterface;

    createExercise(name: string): ExerciseInterface;
}
