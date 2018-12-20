import { Component, OnInit } from '@angular/core';
import { HistoriqueSearchService } from './historique-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Historique } from './historique';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
})
export class HistoriqueComponent implements OnInit {

  historiques: Historique[];

  constructor(public rest: HistoriqueSearchService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.getHistoriques();
  }

  getHistoriques() {
    this.historiques = [];
    this.rest.getHistoriques().subscribe(historiques => this.historiques = historiques);
  }

}
