export interface RecipeInterface {
    title: string;
    author: string;
    category?: string;
    createdOn?: Date;
    description?: string;
    ingredients?: string[];
    steps?: any;
    image?: string;
    comments?: string[];
}
