export interface Catalog {
  catalogs?: CatalogsEntity[] | null;
  cakes?: CakesEntity[] | null;
  sizes?: SizesEntityOrWheightsEntity[] | null;
  wheights?: SizesEntityOrWheightsEntity[] | null;
  users?: UsersEntity[] | null;
}
export interface CatalogsEntity {
  id: string;
  title: string;
  alias: string;
  alt: string;
  description: string;
  src: string;
}
export interface CakesEntity {
  id: string;
  title: string;
  alt: string;
  description: string;
  src: string;
  alias: string;
  catalogId: string;
  sizeId: string;
  wheightId: string;
}
export interface SizesEntityOrWheightsEntity {
  id: string;
  value: string;
}
export interface UsersEntity {
  id: string;
  name: string;
  email: string;
  password: string;
}
