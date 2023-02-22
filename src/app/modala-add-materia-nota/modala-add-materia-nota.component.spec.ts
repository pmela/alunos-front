import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalaAddMateriaNotaComponent } from './modala-add-materia-nota.component';

describe('ModalaAddMateriaNotaComponent', () => {
  let component: ModalaAddMateriaNotaComponent;
  let fixture: ComponentFixture<ModalaAddMateriaNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalaAddMateriaNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalaAddMateriaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
