import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { BookPrueba } from '../../interfaces/books.interface';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],

})
export class  ListBooksComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'nombre', 'autor', 'descripcion', 'idioma', 'generoLiterario', 'publicationDate'];
  dataSource = new MatTableDataSource<BookPrueba>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


const ELEMENT_DATA: BookPrueba[] = [
  {id: 1, nombre: 'Hydrogen', autor: 'Miller Mora', generoLiterario: 'Comedia', idioma: 'francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 2, nombre: 'Helium', autor: 'Gisella Choez', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 3, nombre: 'Lithium', autor: 'Ashley Lopez', generoLiterario: 'Romance', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 4, nombre: 'Beryllium', autor: 'Miller Mora', generoLiterario: 'Comedia', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 5, nombre: 'Boron', autor: 'Gisella Choez', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 6, nombre: 'Carbon', autor: 'Ashley Lopez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 7, nombre: 'Nitrogen', autor: 'Miller Mora', generoLiterario: 'Comedia', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 8, nombre: 'Oxygen', autor: 'Gisella Choez', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 9, nombre: 'Fluorine', autor: 'Ashley Lopez', generoLiterario: 'Romance', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 10, nombre: 'Neon', autor: 'Miller Mora', generoLiterario: 'Comedia', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 11, nombre: 'Sodium', autor: 'Gisella Choez', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 12, nombre: 'Magnesium', autor: 'Ashley Lopez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 13, nombre: 'Aluminum', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 14, nombre: 'Silicon', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 15, nombre: 'Phosphorus', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 16, nombre: 'Sulfur', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 17, nombre: 'Chlorine', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 18, nombre: 'Argon', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 19, nombre: 'Potassium', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 20, nombre: 'Calcium', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 21, nombre: 'Scandium', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 22, nombre: 'Titanium', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 23, nombre: 'Vanadium', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 24, nombre: 'Chromium', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 25, nombre: 'Manganese', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 26, nombre: 'Iron', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 27, nombre: 'Cobalt', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 28, nombre: 'Nickel', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 29, nombre: 'Copper', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 30, nombre: 'Zinc', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 31, nombre: 'Gallium', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 32, nombre: 'Germanium', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 33, nombre: 'Arsenic', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 34, nombre: 'Selenium', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 35, nombre: 'Bromine', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 36, nombre: 'Krypton', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 37, nombre: 'Rubidium', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 38, nombre: 'Strontium', autor: 'Gisella Choez', generoLiterario: 'Romance', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
  {id: 39, nombre: 'Yttrium', autor: 'Ashley Lopez', generoLiterario: 'Comedia', idioma: 'Francés', publicationDate: new Date(), descripcion: 'Lorem Insup'},
  {id: 40, nombre: 'Zirconium', autor: 'Miller Mora', generoLiterario: 'Terror', idioma: 'Ingles', publicationDate: new Date(), descripcion: 'Lorem  Insup'},
];

