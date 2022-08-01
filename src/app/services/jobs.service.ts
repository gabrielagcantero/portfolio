import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('https://gcantero-portfolio.herokuapp.com/show/jobs');
  }

  addExp2(form: any):Observable<any>{
    return this.http.post('https://gcantero-portfolio.herokuapp.com/add/job', form);
  }

  editExp2(form: any, id:any):Observable<any>{
    return this.http.put('https://gcantero-portfolio.herokuapp.com/edit/job/?idJob=' + id, form);
  }

  deleteExp2(id:String):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'aplication/json'
      }),
      body: id
    }
    return this.http.delete('https://gcantero-portfolio.herokuapp.com/delete/job', options);
  }
}
