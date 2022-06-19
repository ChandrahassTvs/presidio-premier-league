import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment } from '../environments/environment';
import { Match, matchAttributesMapping } from './match.model';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { Team, teamAttributesMapping } from './team.model';
import { Score, scoreAttributesMapping } from './score.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  matches$: Observable<Match[]>;
  teams$: Observable<Team[]>;
  scores$: Observable<Score[]>;
  fixturesGroupedByDates: any;
  resultsGroupedByDates: any;
  currentView: string = 'standings';
  playersGroupedByTeams: any;
  teamScores: Score[] = [];

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.getMatches();
    this.getTeams();
    this.getScores();
  }

  getMatches() {
    this.matches$ = this.googleSheetsDbService.get<Match>(
      environment.matches.spreadsheetId,
      environment.matches.worksheetName,
      matchAttributesMapping
    );
    this.matches$.subscribe((response) => {
      this.fixturesGroupedByDates = groupBy(
        response.filter((a) => a.status != 'Completed'),
        'date'
      );
      this.resultsGroupedByDates = groupBy(
        response.filter((a) => a.status == 'Completed'),
        'date'
      );
    });
  }

  getTeams() {
    this.teams$ = this.googleSheetsDbService.get<Team>(
      environment.teams.spreadsheetId,
      environment.teams.worksheetName,
      teamAttributesMapping
    );

    this.teams$.subscribe((response) => {
      this.playersGroupedByTeams = groupBy(response, 'team');
    });
  }

  getScores() {
    this.scores$ = this.googleSheetsDbService.get<Score>(
      environment.scores.spreadsheetId,
      environment.scores.worksheetName,
      scoreAttributesMapping
    );

    this.scores$.subscribe((response) => {
      response = orderBy(response, 'score', 'desc');
      this.teamScores = response;
    });
  }

  getLogoName(name) {
    switch (name) {
      case 'Fire Nation':
        return 'fire-nation';
      case 'Water Tribe':
        return 'water-tribe';
      case 'Earth Kingdom':
        return 'earth-kingdom';
      case 'Air Nomads':
        return 'air-nomad';
    }
  }
}
