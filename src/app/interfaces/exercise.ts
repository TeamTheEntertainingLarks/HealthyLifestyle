import { Category } from '../enums/workoutCategories';

export interface ExerciseInterface {
    name: string;
    category: Category;
    image: string;
}
