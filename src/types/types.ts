interface ISnack {
  _id: string;
  name: string;
  preparationTime?: number;
  ingredients?: string[];
  price: number;
}

interface IDrink {
  name: string;
  price: number;
  type: string;
  _id?: string;
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

export type { ISnack, IDrink, IDishes, IAllSnacks };
