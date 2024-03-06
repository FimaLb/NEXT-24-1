export interface Category {
  id: string;
  title: string;
  alt: string;
  scr: string;
  description?: string;
}

export interface Good {
  id: string;
  title: string;
  alt: string;
  scr: string;
  description?: string;
  categoryId: string;
}
