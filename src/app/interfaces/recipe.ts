export interface RecipeInterface {
    title: string;
    author: string;
    category: string;
    createdOn: Date;
    description: string;
    ingradients: string[];
    steps: any;
    image: string;
    comments?: string[];
}
