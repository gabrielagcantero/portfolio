import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EducationsService } from 'src/app/services/educations.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private eduData:EducationsService) {}

  myEducation:any;

  addEduForm = new FormGroup({
    idEducation: new FormControl(""),
    idInstitute: new FormControl(""),
    dateFrom: new FormControl(""),
    dateTo: new FormControl(""),
    title: new FormControl(""),
    prom: new FormControl(""),
  })

  editEduForm = new FormGroup({
    idEducation: new FormControl(""),
    idInstitute: new FormControl(""),
    dateFrom: new FormControl(""),
    dateTo: new FormControl(""),
    title: new FormControl(""),
    prom: new FormControl(""),
  })


  ngOnInit(): void {
    this.eduData.obtenerDatos().subscribe(data => {
      this.myEducation=data;
    });
  }

  addEducation(form:any){
    this.eduData.addEducation2(form).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  editEducation(form:any, id:String){
    
    this.eduData.editEducation2(form, id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
    }

  deleteEducation(id:String){
    this.eduData.deleteEducation2(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
}

