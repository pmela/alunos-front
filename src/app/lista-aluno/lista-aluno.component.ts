import { Component, OnInit } from '@angular/core';
import { ListaAlunoService } from '../lista-aluno.service';
import { Aluno } from '../models';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'nascimento'];
  dataSource: Aluno[] = []

  constructor(private alunoService: ListaAlunoService) { }

  ngOnInit(): void {
    this.alunoService.listaAlunoBack().subscribe((alunos)=>{
      this.dataSource=alunos
    })
  }

}
