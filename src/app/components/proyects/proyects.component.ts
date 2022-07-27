import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  myProjects:any;
  constructor(private projectData:ProjectsService) {}

  ngOnInit(): void {
    this.projectData.obtenerDatos().subscribe(data => {
      this.myProjects=data;
    });
  }

}
