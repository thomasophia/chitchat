import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { Chat } from '../../../models/chat.model';
import { IonContent } from '@ionic/angular';
import { MessageService } from '../../../services/message.service';
import { ChatService } from '../../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat = '';
  public messageItem = '';
  public currentUser = 'me';
  public messages = null;
  public allChats = new Array<Chat>();
  public selectedChat;

  @ViewChild(IonContent) content: IonContent;

  constructor(private route: ActivatedRoute, protected storageService: StorageService,
              protected messageService: MessageService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.getMessagesfromChat();
  }

  ionViewWillEnter(){
    this.scrollToBottom();
  }

  async getMessagesfromChat(): Promise<void> {
    this.chat = String(this.route.snapshot.paramMap.get('name'));
    if (this.chat === 'newChat') {
      await this.createNewRandomChat();
    }
    try {
      this.allChats = await this.storageService.get();
      console.log('Got chats from storage');
    }
    catch (e) {
      console.log(`Something went wrong. ${e}`);
    }
    this.selectedChat = this.allChats.filter(c => c.name === this.chat);
    this.messages = this.selectedChat[0].messages;
    this.messageService.setMessages(this.messages);
  };

  sendMessage(): void {
    this.messageService.addMessage(this.messageItem);
    this.messageItem = '';
    this.scrollToBottom();
    this.sendBotAnswer();
  }

  save(): void {
    this.storageService.save(this.allChats);
  }

  sendBotAnswer(): void {
    setTimeout(async () => {
      this.messageService.addBotMessage();
      this.save();
      this.scrollToBottom();
      }, 1000);
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  async createNewRandomChat(): Promise<void> {
    let max = 15;
    this.chat = 'Chat ' + Math.floor(Math.random() * max);
    this.allChats = this.chatService.addChat(this.chat);
    await this.storageService.save(this.allChats);
  }
 }

