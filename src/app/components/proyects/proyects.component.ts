import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor(private projectData:ProjectsService) {}

  myProjects:any;

  addProjectForm = new FormGroup({
    idProject: new FormControl(""),
    title: new FormControl(""),
    iframe: new FormControl(""),
    description: new FormControl(""),
    link: new FormControl(""),
  })

  editProjectForm = new FormGroup({
    idProject: new FormControl(""),
    title: new FormControl(""),
    iframe: new FormControl(""),
    description: new FormControl(""),
    link: new FormControl(""),
  })


  ngOnInit(): void {
    this.projectData.obtenerDatos().subscribe(data => {
      this.myProjects=data;
    });
  }

  showProjectForm(){
    let myForm:any = document.querySelector("#addProjectForm") ;
    myForm.style.display="block";
  }

  addProject(form:any){
    this.projectData.addProject2(form).subscribe(data => {
      console.log(data);
      let myForm:any = document.querySelector("#addProjectForm") ;
      myForm.style.display="none";
      this.ngOnInit();
    })
  }


  showEditProject(btn:FormGroup, id:String){
    let pos:number = 0;
    let projects = Array.from(this.myProjects);
    this.myProjects.forEach((proj: any) => {
      if (id === proj.idProject){
        pos = projects.indexOf(proj);
      }
    });
    btn.patchValue({idProject: this.myProjects[pos].idProject, title: this.myProjects[pos].title, 
      iframe: this.myProjects[pos].iframe, description:this.myProjects[pos].description, link:this.myProjects[pos].link, 
    });
  }

  editProject(form:any, id:String){
    this.projectData.editProject2(form, id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  deleteProject(id:String){
    this.projectData.deleteProject2(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
}

