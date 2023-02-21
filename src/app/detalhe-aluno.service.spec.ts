import { TestBed } from '@angular/core/testing';

import { DetalheAlunoService } from './detalhe-aluno.service';

describe('DetalheAlunoService', () => {
  let service: DetalheAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
