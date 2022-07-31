import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { InstitutesService } from 'src/app/services/institutes.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseData:CoursesService) {}

  myCourses:any;
  

  addCourseForm = new FormGroup({
    idCourse: new FormControl(""),
    idInstitute: new FormControl(""),
    dateFrom: new FormControl(""),
    dateTo: new FormControl(""),
    title: new FormControl(""),
  })

  editCourseForm = new FormGroup({
    idCourse: new FormControl(""),
    idInstitute: new FormControl(""),
    dateFrom: new FormControl(""),
    dateTo: new FormControl(""),
    title: new FormControl(""),
  })


  ngOnInit(): void {
    this.courseData.obtenerDatos().subscribe(data => {
      this.myCourses = data;
    });
  }

  addCourse(form:any){
      this.courseData.addCourse2(form).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  editCourse(form:any, id:String){
    
    this.courseData.editCourse2(form, id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
    }

  deleteCourse(id:String){
    this.courseData.deleteCourse2(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
