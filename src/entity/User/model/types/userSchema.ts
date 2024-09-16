export enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface User {
  id: string;
  username: string;
  role?: UserRoles[];
  avatar?: string;
}

export interface userSchema {
  authData?: User;

  _inited: boolean;
}
