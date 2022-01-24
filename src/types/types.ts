export interface ISnack {
  _id: string;
  name: string;
  preparationTime: number;
  ingredients: string[];
}

export interface ISnacks {
  name: string;
  preparationTime: number;
  _id: string;
}
