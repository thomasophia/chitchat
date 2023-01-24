import { Component, OnInit } from '@angular/core';
import { Chat } from '../../../models/chat.model';
import { StorageService } from '../../../services/storage.service';
import { ChatService } from '../../../services/chat.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public chats = null;
  public myNumbers;

  constructor(private chatService: ChatService, protected storageService: StorageService) {}

  ionViewWillEnter(){
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }

  add(chatName: string): void {
    chatName = chatName.trim();
    if (!chatName) {return;}
    this.chats = this.chatService.addChat(chatName);
    this.save();
  }

  delete(chat: Chat): void {
    this.chats = this.chatService.deleteChat(chat);
    this.save();
  }

  public async loadData(): Promise<void> {
    try {
      this.chats = await this.storageService.get();
      console.log('Got chats from storage');
    }
    catch (e) {
      console.log(`Something went wrong. ${e}`);
    }
    this.chatService.setChats(this.chats);
  }

  save(): void {
    this.storageService.save(this.chats);
    this.chatService.setChats(this.chats);
  }
}
