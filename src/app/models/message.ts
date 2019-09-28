//message class should include a timestamp and text attribute
import { User } from './user';

export class Message {

    timestamp: number;
    text: string;

    constructor(text: string, timestamp: number) {
        this.text = text;
        this.timestamp = timestamp;
    }

}