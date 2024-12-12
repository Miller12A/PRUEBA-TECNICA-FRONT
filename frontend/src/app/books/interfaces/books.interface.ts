export interface Book {
  id: string;
  title: string;
  author: string; 
  publicationDate: Date; 
  generoLiterario: Genero; 
  pages: number; 
  language: Idioma ;
}

export interface Idioma {
  id: string;
  name: string;
}


export interface Genero {
  id: string;
  name: string;
}