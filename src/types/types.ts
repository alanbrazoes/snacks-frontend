interface ISnack {
  _id: string;
  name: string;
  preparationTime: number;
  ingredients: string[];
}

interface ISnacks {
  name: string;
  preparationTime: number;
  _id: string;
}

interface IInput {
  name: string;
  onChange?: undefined;
  value: string;
  label: string;
  type?: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface ICreateBurguer {
  name: string;
  preparationTime: number;
  ingredients: string[];
  price?: number;
  id?: string;
}

export type { ISnack, ISnacks, IInput, ILogin, ICreateBurguer };
