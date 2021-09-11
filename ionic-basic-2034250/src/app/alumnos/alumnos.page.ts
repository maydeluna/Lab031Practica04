import { Component, OnInit } from '@angular/core';
import {Alumno } from './alumno.model';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos : Alumno[];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnosService.getAlumnos();
    this.alumnosService.getPersnajes().subscribe((response: any)=>{
      console.log(response);
    })
  }

  ionViewWillEnter(){
    this.alumnos = this.alumnosService.getAlumnos();
  }

}
