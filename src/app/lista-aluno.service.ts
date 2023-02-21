import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './models';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunoService {
  constructor(private http: HttpClient) {}

  listaAlunoBack(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>('http://127.0.0.1:8000/alunos/')

  }
}
