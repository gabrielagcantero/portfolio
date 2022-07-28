import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) {}

  myAbout:any;
  

  editPerson = new FormGroup({
    idPerson: new FormControl("1"),
    banner: new FormControl(""),
    photo: new FormControl(""),
    name: new FormControl(""),
    title: new FormControl(""),
    about: new FormControl(""),
    mail: new FormControl(""),
    tel: new FormControl(""),
    address: new FormControl(""),
    skills: new FormControl(""),
  })

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.myAbout=data;
    });

  }

  sendForm(form:any){
    this.datosPortfolio.editPerson(form).subscribe(data=> {
      console.log(data);
      this.ngOnInit();
    })
    
  }

}
