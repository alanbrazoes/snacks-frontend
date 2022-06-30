interface ISnack {
  _id: string;
  name: string;
  preparationTime?: number;
  ingredients?: string[];
  price: number;
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

interface IDishes {
  _id: string;
  name: string;
  price: number;
  ingredientList?: string[];
  preparationTime?: number;
  type?: string;
}

interface IAllSnacks {
  hamburguers: ISnack[];
  dishes: IDishes[];
  drink: IDrink[];
}

export type { 
  ISnack, IPropsSnacksContext, IDrink, IDishes, IAllSnacks };
