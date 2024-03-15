import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TrackInfoComponent } from './track-info/track-info.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'musica', component: TrackInfoComponent},
  { path: '**', pathMatch:'full',redirectTo:'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
