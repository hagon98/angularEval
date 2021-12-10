import { Component } from '@angular/core'
import { Statistique } from './models/statistique'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evalStat'
  tabStat: Statistique[] = []
  constructor () {
    let statBasket = new Statistique(
      'beshfh-10-qdhgx',
      'Basket-ball Statistique',
      '55M'
    )
    let statAthle = new Statistique('gdbec-789-xhhx-bdvsh', 'Athlétisme', '45M')

    this.tabStat.push(statBasket, statAthle)
  }
}
