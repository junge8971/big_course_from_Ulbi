import { counterSchema } from 'entities/Counter';
import { userSchema } from 'entities/User';

export interface StateSchema {
  counter: counterSchema;
  user: userSchema;
}
