import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  alunos!: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    // this.alunoService.getAll().then((data) => {
    //   this.alunos = data;
    // });
  }

}
