import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { PerfilComponent } from "./components/perfil/perfil.component";

const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRouterProviders: any[] = [];