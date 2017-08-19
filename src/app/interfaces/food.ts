export interface Food {
    id: number;
    title: string;
    category: string;
    author: string;
    image: string;
    createdOn: Date;
    description: string;
    ingradients: Array<string>;
    steps;
    comments: Array<string>;
}
