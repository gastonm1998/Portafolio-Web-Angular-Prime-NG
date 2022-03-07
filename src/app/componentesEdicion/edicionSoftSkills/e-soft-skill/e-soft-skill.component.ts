import { Component, OnInit } from '@angular/core';
import { SoftSkillsService } from 'src/app/servicios/api/soft-skills.service';
import { SoftSkillsI } from 'src/app/modelos/aboutMeSoftSkills.inerface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-soft-skill',
  templateUrl: './e-soft-skill.component.html',
  styleUrls: ['./e-soft-skill.component.scss']
})
export class ESoftSkillComponent implements OnInit {


  formularioSoftSkills:FormGroup;

  elementosSoftSkills:SoftSkillsI[];

  linkID:any;

  val1:number;

  constructor(
    private softSkills:SoftSkillsService,
    public formulario:FormBuilder,
    public router:Router,
    private activeRoute:ActivatedRoute

  ) {

    //traer id desde la url
    this.linkID = this.activeRoute.snapshot.paramMap.get('id');

    /*creacion del formulario */
    this.formularioSoftSkills = this.formulario.group({
      id:this.linkID,
      softSkill:[""],
      pocentaje:[""]

    });
  }

  ngOnInit(): void {

    this.softSkills.obtenerSoftSkillsIndividual(this.linkID).subscribe(respuesta =>{


      /*agrega los datos de la base de datos a los formularios a modificar */
      this.formularioSoftSkills.setValue({
        id: respuesta.id,
        softSkill : respuesta.softSkill ,
        pocentaje: respuesta.pocentaje
      });

    });

  }

  enviarDatos():any{

    this.softSkills.editarSoftSkills(this.formularioSoftSkills.value).subscribe();
    this.router.navigateByUrl("/lobby");
  }
  volverAlInicio(){
    this.router.navigateByUrl("/lobby");
  }

}
