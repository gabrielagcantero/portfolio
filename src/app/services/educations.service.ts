import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('http://localhost:8080/show/edus');
  }

  addEducation2(form: any):Observable<any>{
    return this.http.post('http://localhost:8080/add/education', form);
  }

  editEducation2(form: any, id:any):Observable<any>{
    return this.http.put('http://localhost:8080/edit/education/?idEducation=' + id, form);
  }

  deleteEducation2(id:String):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'aplication/json'
      }),
      body: id
    }
    return this.http.delete('http://localhost:8080/delete/education', options);
  }
}
