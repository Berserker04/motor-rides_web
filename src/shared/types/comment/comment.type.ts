interface IComment {
  id: number;
  message: string;
  createdAt: string;
  user: IUser;
}

interface ICommentDto extends IComment {
  stars: number;
  comments: IComment[];
}
