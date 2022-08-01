import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('https://gcantero-portfolio.herokuapp.com/show/edus');
  }

  addEducation2(form: any):Observable<any>{
    return this.http.post('https://gcantero-portfolio.herokuapp.com/add/education', form);
  }

  editEducation2(form: any, id:any):Observable<any>{
    return this.http.put('https://gcantero-portfolio.herokuapp.com/edit/education/?idEducation=' + id, form);
  }

  deleteEducation2(id:String):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'aplication/json'
      }),
      body: id
    }
    return this.http.delete('https://gcantero-portfolio.herokuapp.com/delete/education', options);
  }
}
