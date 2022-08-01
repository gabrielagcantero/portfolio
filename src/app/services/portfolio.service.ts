import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('https://gcantero-portfolio.herokuapp.com/show/person');
  }

  editPerson(form: any):Observable<any>{
    return this.http.put('https://gcantero-portfolio.herokuapp.com/edit/person', form);
  }
}
