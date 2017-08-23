import { ExerciseInterface } from './../interfaces/exercise';
import { Category } from '../enums/workoutCategories';

export class Exercise implements ExerciseInterface {
    public name: string;
    public category: Category;
    public image: string;

    constructor(name: string, category: Category, image: string) {
        this.name = name;
        this.category = category;
        this.image = image;
    }
}
