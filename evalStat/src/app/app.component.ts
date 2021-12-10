import { Component } from '@angular/core'
import { Statistique } from './models/statistique'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statBasket = new Statistique(
    'beshfh-10-qdhgx',
    'Basket-ball Statistique',
    '55M'
  )
  statAthle = new Statistique('gdbec-789-xhhx-bdvsh', 'Athlétisme', '45M')
  title = 'evalStat'
}
