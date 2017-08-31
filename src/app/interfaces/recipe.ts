export interface RecipeInterface {
    title: string;
    author: string;
    userId: string;
    category: string;
    createdOn: number;
    description: string;
    ingradients: any;
    step1: string;
    step2: string;
    step3: string;
    image: string;
    comments?: any;
}
