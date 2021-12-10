import { Component } from '@angular/core'
import { Statistique } from './models/statistique'
import { StatistiqueService } from './statistique.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evalStat'

  constructor (public monService: StatistiqueService) {}

  deleteFilm (uneStat: Statistique) {
    let index = this.monService.tabStat.indexOf(uneStat)
    this.monService.tabStat.splice(index, 1)
  }
}
