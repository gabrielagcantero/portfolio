import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  myCourses:any;
  constructor(private courseData:CoursesService ) {}

  ngOnInit(): void {
    this.courseData.obtenerDatos().subscribe(data => {
      this.myCourses = data;
    });
  }

}
