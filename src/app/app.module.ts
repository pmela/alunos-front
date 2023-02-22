import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { ModalaAddAlunoComponent } from './modala-add-aluno/modala-add-aluno.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalaAddMateriaNotaComponent } from './modala-add-materia-nota/modala-add-materia-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    DetalheAlunoComponent,
    TelaPrincipalComponent,
    ModalaAddAlunoComponent,
    ModalaAddMateriaNotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    NgChartsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
