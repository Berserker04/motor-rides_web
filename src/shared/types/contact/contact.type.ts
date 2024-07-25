interface IContact {
  fullName: string;
  email: string;
  subject?: string;
  cellPhone?: string;
  message: string;
}

interface IContactDto {
  id: number;
  fullName: string;
  email: string;
  cellPhone: string;
  subject: string;
  message: string;
  replies: IContactDto[];
  state: IContactState;
}

interface IContactState {
  id: number;
  name: string;
}

interface IFormInputContact {
  fullName: string;
  email: string;
  cellPhone?: string;
  subject?: string;
  message: string;
}
