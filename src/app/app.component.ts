import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment } from '../environments/environment';
import { Match, matchAttributesMapping } from './match.model';
import groupBy from 'lodash/groupBy';
import { Team, teamAttributesMapping } from './team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  matches$: Observable<Match[]>;
  teams$: Observable<Team[]>;
  fixturesGroupedByDates: any;
  resultsGroupedByDates: any;
  currentView: string = 'teams';
  playersGroupedByTeams: any;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.getMatches();
    this.getTeams();
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
      console.log(this.playersGroupedByTeams);
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
      case 'Air Nomad':
        return 'air-nomad';
    }
  }
}
