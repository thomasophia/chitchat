import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';


const routes: Routes = [
  {
    path: ':name',
    component: ChatComponent,
  },
  {
    path: '',
    redirectTo:'newChat',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}

