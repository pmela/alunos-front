import { TestBed } from '@angular/core/testing';

import { ListaAlunoService } from './lista-aluno.service';

describe('ListaLivroService', () => {
  let service: ListaAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
