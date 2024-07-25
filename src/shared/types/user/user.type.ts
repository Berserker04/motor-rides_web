interface IUser {
  id: number;
  fullName: string;
  email: string;
  photo?: string;
  role: IRole;
}

interface IRole {
  id: number;
  name: string;
}
