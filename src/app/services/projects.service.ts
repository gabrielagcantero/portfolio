import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('https://gcantero-portfolio.herokuapp.com/show/projects');
  }

  addProject2(form: any):Observable<any>{
    return this.http.post('http://localhost:8080/add/project', form);
  }

  editProject2(form: any, id:any):Observable<any>{
    return this.http.put('http://localhost:8080/edit/project/?idProject=' + id, form);
  }

  deleteProject2(id:String):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'aplication/json'
      }),
      body: id
    }
    return this.http.delete('http://localhost:8080/delete/project', options);
  }
}
