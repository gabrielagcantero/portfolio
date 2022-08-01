import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('https://cantero-portfolio-back.herokuapp.com/courses');
  }

  addCourse2(form: any):Observable<any>{
    return this.http.post('https://cantero-portfolio-back.herokuapp.com/add/course', form);
  }

  editCourse2(form: any, id:any):Observable<any>{
    return this.http.put('https://cantero-portfolio-back.herokuapp.com/edit/course/?idCourse=' + id, form);
  }

  deleteCourse2(id:String):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'aplication/json'
      }),
      body: id
    }
    return this.http.delete('https://cantero-portfolio-back.herokuapp.com/delete/course', options);
  }
}
