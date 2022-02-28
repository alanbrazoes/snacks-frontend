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
  type: string;
  name: string;
  preparationTime: number;
  ingredientList: string[];
  price?: number;
  id?: string;
}

interface IPropsSnacksContext {
  snacks: ISnack[];
  setSnacks: React.Dispatch<React.SetStateAction<ISnack[]>>;
}

interface IDrink {
  name: string;
  price: number;
  id?: string;
}

interface IForm {
  name: string;
  preparationTime: number;
  ingredients: { ingredient: string; ingredienList: Array<unknown> };
  price: number;
  type: string;
}

export type { ISnack, IInput, ILogin, ICreateBurguer, IPropsSnacksContext, IDrink, IForm };
