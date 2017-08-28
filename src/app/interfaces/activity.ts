export interface ActivityInterface {
    userId: string;
    title: string;
    author: string;
    category: string;
    description: string;
    location: string;
    eventDate: string;
    createdOn: Date;
    image: string;
    participants: Array<any>;
    comments?: Array<string>;
}
