import { ActivityInterface } from './../interfaces/activity';

export class Activity implements ActivityInterface {
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

    constructor(
        userdId: string,
        title: string,
        author: string,
        category: string,
        description: string,
        location: object,
        eventDate: string,
        createdOn: number,
        participants?: Array<any>,
        comments?: Array<string>) {
        this.userId = userdId;
        this.title = title;
        this.author = author;
        this.category = category;
        this.description = description;
        this.location = location;
        this.eventDate = eventDate;
        this.createdOn = createdOn;
        this.participants = participants;
        this.comments = comments;
    }
}
