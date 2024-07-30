import { counterSchema } from 'entity/Counter';
import { userSchema } from 'entity/User';
import { loginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter?: counterSchema;
  user?: userSchema;
  login?: loginSchema;
}
