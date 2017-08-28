export interface ActivityInterface {
    userId: string;
    title: string;
    author: string;
    category: string;
    description: string;
    location: object;
    eventDate: string;
    createdOn: number;
    participants: Array<any>;
    comments?: Array<string>;
}
