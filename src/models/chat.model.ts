import {Message} from './message.model';

export interface Chat {
  id: number;
  name: string;
  messages: Array<Message>;
}
