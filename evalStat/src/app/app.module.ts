import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UneStatComponent } from './une-stat/une-stat.component'
import { NouvelleStatComponent } from './nouvelle-stat/nouvelle-stat.component'
import { LesStatComponent } from './les-stat/les-stat.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UneStatComponent,
    NouvelleStatComponent,
    LesStatComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
