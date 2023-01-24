import { Component } from '@angular/core';
import packageInfo from '../../../../package.json';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent {
 public version = '';
 public developer = '';
 public appName = '';
 public icon = '';

  constructor() {
   this.version = packageInfo.version;
   this.developer = packageInfo.author;
   this.appName = packageInfo.name;
   this.icon = 'assets/icon/chitchat_logo_gr.png';
  }
}
