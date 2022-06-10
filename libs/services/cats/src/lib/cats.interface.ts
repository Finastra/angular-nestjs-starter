export interface Cat {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Breed {
  [any: string]: string;
}
