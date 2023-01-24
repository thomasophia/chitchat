import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatComponent } from './chat.component';

import { ChatRoutingModule} from './chat-routing.module';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [ChatComponent],
  exports: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    IonicModule,
    FormsModule,
    AutosizeModule
  ]
})
export class ChatModule { }
