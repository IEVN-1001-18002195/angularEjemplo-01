import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  alumno!: FormGroup;
  ngOnInit(): void {

    this.alumno = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      correo: new FormControl(''),
    });
  }

  onSubmit(){
    console.log(this.alumno.controls['matricula'].valueChanges);
    console.log(this.alumno.controls['nombre'].valueChanges);
    console.log(this.alumno.controls['apaterno'].valueChanges);
    console.log(this.alumno.controls['amaterno'].valueChanges);
    console.log(this.alumno.controls['correo'].valueChanges);
  }

}
