import { Injectable } from '@angular/core'
import { Statistique } from './models/statistique'

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  tabStat: Statistique[] = []
  crossStat = new Statistique('deddcsdf-5545', 'Cross', '41M')
  constructor () {
    let statBasket = new Statistique(
      'beshfh-10-qdhgx',
      'Basket-ball Statistique',
      '55M'
    )
    let statAthle = new Statistique('gdbec-789-xhhx-bdvsh', 'Athlétisme', '45M')
    setTimeout(() => {
      let statCross = new Statistique('fbdhs-789-fhfjfvb', 'Cross', '41M')
    }, 2000)

    setTimeout(() => {
      this.crossStat
      this.tabStat.push(this.crossStat)
    }, 4000)

    this.tabStat.push(statBasket, statAthle)
  }
}
