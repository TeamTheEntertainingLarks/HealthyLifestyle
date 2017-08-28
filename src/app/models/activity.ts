export class Activity {
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

    constructor(
        userdId: string,
        title: string,
        author: string,
        category: string,
        description: string,
        location: string,
        eventDate: string,
        createdOn: Date,
        image: string,
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
        this.image = image;
        this.participants = participants;
        this.comments = comments;
    }
}
