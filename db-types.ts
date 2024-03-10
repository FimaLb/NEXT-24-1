export interface Catalog {
  cakesCatalog?: (CakesCatalogEntity)[] | null;
  cakes?: (CakesEntity)[] | null;
  size?: (SizeEntityOrWheightEntity)[] | null;
  wheight?: (SizeEntityOrWheightEntity)[] | null;
}
export interface CakesCatalogEntity {
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
  alias: string;
  alt: string;
  description: string;
  src: string;
  catalogId: string;
  size: string;
  wheight: string;
}
export interface SizeEntityOrWheightEntity {
  id: string;
  value: string;
}
