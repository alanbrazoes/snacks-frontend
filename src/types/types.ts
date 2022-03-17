interface ISnack {
  _id: string;
  name: string;
  preparationTime?: number;
  ingredients?: string[];
  price: number;
}

interface ISnacks {
  burguers: ISnack[] | [];
  dishes: IDishes[] | [];
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

interface ICreateDishes {
  _id?: string;
  name: string;
  price: number;
  ingredientList: string[];
  preparationTime: number;
  type: string;
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
  _id: string;
}

interface IForm {
  name: string;
  preparationTime: number;
  ingredients: { ingredient: string; ingredienList: Array<unknown> };
  price: number;
  type: string;
}

interface IDishes {
  _id: string;
  name: string;
  price: number;
  ingredientList: string[];
  preparationTime: number;
  type: string;
}

interface IAllSnacks {
  hamburguers: ISnack[];
  dishes: IDishes[];
  drink: IDrink[];
}

export type {
  ISnack,
  IInput,
  ILogin,
  ICreateBurguer,
  IPropsSnacksContext,
  IDrink,
  IForm,
  IDishes,
  ICreateDishes,
  ISnacks,
  IAllSnacks,
};
