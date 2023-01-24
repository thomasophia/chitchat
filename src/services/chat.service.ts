import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chatsArray = null;

  constructor() { }

  public setChats(chats: Array<Chat>) {
    this.chatsArray = chats;
  }

  public addChat(chatName: string): Array<Chat> {
    if (this.chatsArray === null) {
      this.chatsArray = new Array<Chat>();
    }
    this.chatsArray.push({
      id: ChatService.genID(this.chatsArray),
      name: chatName,
      messages: new Array<Message>(),
    });
    return this.chatsArray;
  }

  public deleteChat(chat: Chat): Array<Chat> {
    this.chatsArray = this.chatsArray.filter(c => c !== chat);
    return this.chatsArray;
  }

  private static genID(chats: Array<Chat>): number {
    return chats.length + 1;
  }
}
