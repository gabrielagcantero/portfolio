import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,} from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private jobsData:JobsService) {}

  myJobs:any;

  addExpForm = new FormGroup({
    idJob: new FormControl(""),
    logo: new FormControl(""),
    name: new FormControl(""),
    dateFrom: new FormControl(""),
    dateTo: new FormControl(""),
    job: new FormControl(""),
    tasks: new FormControl(""),
  })

  editExpForm = new FormGroup({
    idJob: new FormControl(""),
    logo: new FormControl(""),
    name: new FormControl(""),
    dateFrom: new FormControl(""),
    dateTo: new FormControl(""),
    job: new FormControl(""),
    tasks: new FormControl(""),
  })

  

  ngOnInit(): void {
    this.jobsData.obtenerDatos().subscribe(data => {
      this.myJobs=data;
    });
  }

  addExp(form:any){
    this.jobsData.addExp2(form).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  editExp(form:any, id:String){
    
    this.jobsData.editExp2(form, id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
    }

  deleteExp(id:String){
    this.jobsData.deleteExp2(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  showEditExp(btn:FormGroup, id:String){
    let pos:number = 0;
    let jobs = Array.from(this.myJobs);
    this.myJobs.forEach((job: any) => {
      if (id === job.idJob){
        pos = jobs.indexOf(job);
      }
    });
    btn.patchValue({idJob: this.myJobs[pos].idJob, logo: this.myJobs[pos].logo, 
      name: this.myJobs[pos].name, dateFrom:this.myJobs[pos].dateFrom, dateTo:this.myJobs[pos].dateTo, 
      job: this.myJobs[pos].job, tasks:this.myJobs[pos].tasks
    });
  }

  editJob(form:any, id:String){
    this.jobsData.editExp2(form, id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  deleteJob(id:String){
    this.jobsData.deleteExp2(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
  


