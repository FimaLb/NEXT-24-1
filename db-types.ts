export interface Catalog {
  make?: (MakeEntity)[] | null;
  car?: (CarEntity)[] | null;
  color?: (ColorEntity)[] | null;
}
export interface MakeEntity {
  id: string;
  alias: string;
  name: string;
}
export interface CarEntity {
  id: string;
  name: string;
  make: string;
  color?: string | null;
}
export interface ColorEntity {
  id: string;
  name: string;
}
