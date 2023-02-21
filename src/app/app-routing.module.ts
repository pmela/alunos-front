import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';


const routes: Routes = [
  { path: 'alunos', component: ListaAlunoComponent },
  { path: 'aluno', component: DetalheAlunoComponent},
  { path: 'telaprincipal', component: TelaPrincipalComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
