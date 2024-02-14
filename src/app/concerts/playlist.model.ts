export class Concert {
    date:string;
    event: string;
    location: string;

    constructor({date, event, location} :
        {date:string, event:string, location:string}) {
            this.date = date;
            this.event = event;
            this.location = location;
        }
}