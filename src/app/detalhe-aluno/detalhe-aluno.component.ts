import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {
  displayedColumns: string[] = ['materia', 'nota'];
  dataSource: Aluno[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
