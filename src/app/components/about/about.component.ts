import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { defaultIfEmpty } from 'rxjs';
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
    banner: new FormControl("", defaultIfEmpty),
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

  editAbout(){
    let myDiv:any = document.querySelector("#aboutFormDiv") ;
    myDiv.style.display="block";
    this.editPerson.patchValue({idPerson: this.myAbout.idPerson, banner: this.myAbout.banner, 
    photo: this.myAbout.photo, name:this.myAbout.name, title:this.myAbout.title, 
    about:this.myAbout.about, mail:this.myAbout.mail, tel:this.myAbout.tel, 
    address: this.myAbout.address, skills: this.myAbout.skills});
  }

  sendForm(form:any){
    let myDiv:any = document.querySelector("#aboutFormDiv") ;
    myDiv.style.display="none";
    this.datosPortfolio.editPerson(form).subscribe(data=> {
      console.log(data);
      this.ngOnInit();
    })
    
  }

}
