//message class should include a timestamp and text attribute

export class Message {

    timestamp: Date;
    text: string;

    constructor(text: string, timestamp: Date) {
        this.text = text;
        this.timestamp = timestamp;
    }

}