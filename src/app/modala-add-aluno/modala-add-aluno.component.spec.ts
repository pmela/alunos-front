import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalaAddAlunoComponent } from './modala-add-aluno.component';

describe('ModalaAddAlunoComponent', () => {
  let component: ModalaAddAlunoComponent;
  let fixture: ComponentFixture<ModalaAddAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalaAddAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalaAddAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
