import { Component, OnInit } from '@angular/core'
import { Statistique } from '../models/statistique'
import { StatistiqueService } from '../statistique.service'

@Component({
  selector: 'app-nouvelle-stat',
  templateUrl: './nouvelle-stat.component.html',
  styleUrls: ['./nouvelle-stat.component.css']
})
export class NouvelleStatComponent implements OnInit {
  unIdentifiant!: string
  unTitre!: string
  uneValeur!: string

  constructor (private singletonStat: StatistiqueService) {}

  creerStat () {
    let nouvelleStat = new Statistique(
      this.unTitre + Math.random(),
      this.unTitre,
      this.uneValeur
    )

    this.singletonStat.tabStat.push(nouvelleStat)
  }

  ngOnInit (): void {}
}
