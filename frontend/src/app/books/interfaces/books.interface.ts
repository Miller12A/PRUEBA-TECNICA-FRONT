export interface Book {
  id: number;
  nombre: string;
  autor: string; 
  descripcion: string;
  publicationDate: Date; 
  generoLiterario: Genero; 
  idioma: Idioma ;
}

export interface Idioma {
  id: string;
  name: string;
}


export interface Genero {
  id: number;
  name: string;
}

export interface BookPrueba {
  id: number;
  nombre: string;
  autor: string; 
  descripcion: string;
  publicationDate: Date; 
  generoLiterario: string; 
  idioma: string ;
}