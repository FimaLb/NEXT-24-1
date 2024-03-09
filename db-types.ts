export interface Catalog {
  cakesCatalog?: CakesCatalogEntity[] | null;
  cakes?: CakeEntity[] | null;
}
export interface CakesCatalogEntity {
  id: string;
  title: string;
  alias: string;
  alt: string;
  description: string;
  src: string;
}
export interface CakeEntity {
  id: string;
  title: string;
  alias: string;
  alt: string;
  description: string;
  src: string;
  catalogId: string;
}
