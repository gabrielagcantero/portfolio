import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  myJobs:any;
  constructor(private jobsData:JobsService) {}

  ngOnInit(): void {
    this.jobsData.obtenerDatos().subscribe(data => {
      this.myJobs=data;
    });
  }

}
