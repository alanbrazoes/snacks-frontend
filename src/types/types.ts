interface ISnack {
  _id: string;
  name: string;
  preparationTime: number;
  ingredients: string[];
  price: number;
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

interface IPropsSnacksContext {
  snacks: ISnack[];
  setSnacks: React.Dispatch<React.SetStateAction<ISnack[]>>;
}

export type { ISnack, IInput, ILogin, ICreateBurguer, IPropsSnacksContext };
