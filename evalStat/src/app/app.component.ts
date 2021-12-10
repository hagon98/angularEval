import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Statistique } from './models/statistique'
import { StatistiqueService } from './statistique.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evalStat'
  constructor (private router: Router) {}

  naviguer () {
    this.router.navigate(['/nouvelle-stat'])
  }

  nouvellePage () {
    this.router.navigate(['/les-stat'])
  }
}
