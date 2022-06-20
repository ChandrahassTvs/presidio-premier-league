import { Observable } from 'rxjs';

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment } from '../environments/environment';
import { Match, matchAttributesMapping } from './match.model';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { Team, teamAttributesMapping } from './team.model';
import { Score, scoreAttributesMapping } from './score.model';

declare var IVSPlayer;
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
  currentView: string = 'live';
  playersGroupedByTeams: any;
  teamScores: Score[] = [];
  loading: boolean;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.switchTab(this.currentView);
  }

  getMatches() {
    if (!this.fixturesGroupedByDates && !this.resultsGroupedByDates) {
      this.loading = true;
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
        this.loading = false;
      });
    }
  }

  getTeams() {
    if (!this.playersGroupedByTeams) {
      this.loading = true;
      this.teams$ = this.googleSheetsDbService.get<Team>(
        environment.teams.spreadsheetId,
        environment.teams.worksheetName,
        teamAttributesMapping
      );

      this.teams$.subscribe((response) => {
        this.playersGroupedByTeams = groupBy(response, 'team');
        this.loading = false;
      });
    }
  }

  getScores() {
    if (!this.teamScores.length) {
      this.loading = true;
      this.scores$ = this.googleSheetsDbService.get<Score>(
        environment.scores.spreadsheetId,
        environment.scores.worksheetName,
        scoreAttributesMapping
      );

      this.scores$.subscribe((response) => {
        response = orderBy(response, 'score', 'desc');
        this.teamScores = response;
        this.loading = false;
      });
    }
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

  switchTab(tab) {
    this.currentView = tab;
    switch (tab) {
      case 'results':
        this.getMatches();
        break;
      case 'fixtures':
        this.getMatches();
        break;
      case 'teams':
        this.getTeams();
        break;
      case 'standings':
        this.getScores();
        break;
      case 'live':
        this.setupLive();
        break;
    }
  }

  setupLive() {
    if (IVSPlayer.isPlayerSupported) {
      const player = IVSPlayer.create();
      player.attachHTMLVideoElement(document.getElementById('video-player'));
      player.load(
        'https://f5e4202d78fc.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.574829994450.channel.ZEBY7ylO0g8u.m3u8'
      );
      player.play();
    }
  }
}
