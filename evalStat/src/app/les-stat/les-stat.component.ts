import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Statistique } from '../models/statistique'
import { StatistiqueService } from '../statistique.service'

@Component({
  selector: 'app-les-stat',
  templateUrl: './les-stat.component.html',
  styleUrls: ['./les-stat.component.css']
})
export class LesStatComponent implements OnInit {
  constructor (public monService: StatistiqueService) {}

  deleteStat (uneStat: Statistique) {
    let index = this.monService.tabStat.indexOf(uneStat)
    this.monService.tabStat.splice(index, 1)
  }

  ngOnInit (): void {}
}
