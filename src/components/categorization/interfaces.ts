export interface Tag {
  id?: number;
  name: string;
  type: keyof SupplierData; // should be enum if I would know the data options
}

export interface SupplierData {
  "tags-general": Tag[];
  "tags-portfolio": Tag[];
  "tags-certificates": Tag[];
}
