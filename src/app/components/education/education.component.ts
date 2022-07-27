import { Component, OnInit } from '@angular/core';
import { EducationsService } from 'src/app/services/educations.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  myEducation:any;
  constructor(private eduData:EducationsService) {}

  ngOnInit(): void {
    this.eduData.obtenerDatos().subscribe(data => {
      this.myEducation=data;
    });
  }

}
