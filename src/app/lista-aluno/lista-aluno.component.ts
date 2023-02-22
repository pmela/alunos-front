import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListaAlunoService } from '../lista-aluno.service';
import { ModalaAddAlunoComponent } from '../modala-add-aluno/modala-add-aluno.component';
import { Aluno } from '../models';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css'],
})
export class ListaAlunoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'nascimento'];
  dataSource: Aluno[] = [];

  constructor(
    private alunoService: ListaAlunoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.alunoService.listaAlunoBack().subscribe((alunos) => {
      this.dataSource = alunos;
    });
  }

  abreModal() {
    this.dialog.open(ModalaAddAlunoComponent,{
      width: '40em'
    });
  }
}
