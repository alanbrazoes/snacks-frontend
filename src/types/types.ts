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

export type { ISnack, ISnacks };
