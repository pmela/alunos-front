import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalaAddMateriaNotaComponent } from '../modala-add-materia-nota/modala-add-materia-nota.component';
import { Aluno } from '../models';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {
  displayedColumns: string[] = ['materia', 'nota'];
  dataSource: Aluno[] = []


  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  abreModalMateria() {
    this.dialog.open(ModalaAddMateriaNotaComponent,{
      width: '40em'
    });
  }
}
