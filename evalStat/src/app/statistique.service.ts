import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Injectable, Type } from '@angular/core'

import { Statistique } from './models/statistique'

type donneServ = {
  id: string
  title: string
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  tabStat: Statistique[] = []
  crossStat = new Statistique('deddcsdf-5545', 'Cross', '41M')
  constructor (private http: HttpClient) {
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
  lancerRecherche () {
    this.http
      .get(` https://stats.naminilamy.fr`)
      .toPromise()
      .then(data => {
        let donneesServeur = data as donneServ[]

        this.tabStat.push()
        for (let d of data as any) {
          this.tabStat.push(new Statistique(d.id, d.title, d.value))
        }
      })
  }
}
