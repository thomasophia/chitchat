import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messageArray = null;

  constructor() { }

  public setMessages(messages: Array<Message>) {
    this.messageArray = messages;
  }

  public addMessage(message: string): Array<Message> {
    this.messageArray.push({
      user: 'me',
      timeStamp: new Date().getTime(),
      msg: message
    });
    return this.messageArray;
  }

  public addBotMessage(): Array<Message> {
    this.messageArray.push({
      user: 'ChitChatBot',
      timeStamp: new Date().getTime(),
      msg: this.messageArray[this.messageArray.length-1].msg
    });
    return this.messageArray;
  }
}
