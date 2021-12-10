import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Statistique } from '../models/statistique'

@Component({
  selector: 'app-une-stat',
  templateUrl: './une-stat.component.html',
  styleUrls: ['./une-stat.component.css']
})
export class UneStatComponent implements OnInit {
  @Input() uneStat!: Statistique
  @Output() demandeSuppression = new EventEmitter()
  constructor () {}

  /**
   * fonction qui permet d'avoir un événement au click
   */
  reagirAuClick () {
    this.demandeSuppression.emit()
  }
  ngOnInit (): void {}
}
