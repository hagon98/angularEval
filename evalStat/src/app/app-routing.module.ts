import { Component, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { LesStatComponent } from './les-stat/les-stat.component'
import { NouvelleStatComponent } from './nouvelle-stat/nouvelle-stat.component'

const routes: Routes = [
  { path: 'nouvelle-stat', component: NouvelleStatComponent },
  { path: 'les-stat', component: LesStatComponent },
  { path: '**', redirectTo: 'les-stat' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
