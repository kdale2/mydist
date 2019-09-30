//message class should include a timestamp and text attribute

import { User } from './user';

export class Message {

    timestamp: Date;
    text: string;

    constructor(text: string, timestamp: Date) {
        this.text = text;
        this.timestamp = timestamp;
    }

}