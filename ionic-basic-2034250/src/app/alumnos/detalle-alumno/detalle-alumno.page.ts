import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../alumno.model';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {

  idAlumno: string;
  alumno: Alumno;

  constructor(private activatedRoute: ActivatedRoute, private alumnoService: AlumnosService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.idAlumno = paramMap.get('idAlumno');
      this.alumno = this.alumnoService.getAlumno(this.idAlumno);
    });
  }
  borrarAlumnos(){
    this.alumnoService.borrarAlumno(this.idAlumno);
    this.router.navigate(["/alumnos"]);
  }
}
