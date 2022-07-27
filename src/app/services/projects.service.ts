import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('http://localhost:8080/show/projects');
  }
}
