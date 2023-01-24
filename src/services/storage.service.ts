import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Chat } from '../models/chat.model';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageKey = 'chats';

  constructor(protected storage: Storage) { }

  public save(chats: Array<Chat>): Promise<any>{
    return this.storage.set(this.storageKey, chats);
  }

  public get(): Promise<Array<Chat>> {
    return this.storage.get(this.storageKey);
    //throw new Error("storage error")              //simulate an Error
  }
}
