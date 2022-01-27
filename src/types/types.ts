interface ISnack {
  _id: string;
  name: string;
  preparationTime: number;
  ingredients?: string[];
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
}

export type { ISnack, ISnacks, IInput };
