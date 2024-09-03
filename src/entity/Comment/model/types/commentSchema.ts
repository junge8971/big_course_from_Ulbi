import { User } from 'entity/User';

export type Comment = {
  id: string;
  text: string;
  user: User;
};
