interface IBurguer {
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
  _id: string;
}

interface IDish {
  _id: string;
  name: string;
  price: number;
  ingredients?: string[];
  preparationTime?: number;
  type?: string;
}

interface IAllSnacks {
  hamburguers: IBurguer[];
  dishes: IDish[];
}

export type { IBurguer, IDrink, IDish, IAllSnacks };
