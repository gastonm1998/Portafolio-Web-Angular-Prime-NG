import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SoftSkillsService } from 'src/app/servicios/api/soft-skills.service';

@Component({
  selector: 'app-a-soft-skill',
  templateUrl: './a-soft-skill.component.html',
  styleUrls: ['./a-soft-skill.component.scss']
})
export class ASoftSkillComponent implements OnInit {

  val1: number;
  formularioSoftSkills:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private softSkills:SoftSkillsService,
    public router:Router
  ) {

    this.formularioSoftSkills = this.formulario.group({

      softSkill:[""],
      pocentaje:[""]

    })

  }

  ngOnInit(): void {
  }

  enviarDatos():any{

    this.softSkills.agregarSoftSkills(this.formularioSoftSkills.value).subscribe();
    this.router.navigateByUrl("/lobby");
  }
  volverAlInicio(){
    this.router.navigateByUrl("/lobby");
  }

}
