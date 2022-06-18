import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment } from '../environments/environment';
import { Match, matchAttributesMapping } from './match.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  matches$: Observable<Match[]>;
  today: Match[] = [];
  completed: Match[] = [];

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.matches$ = this.googleSheetsDbService.get<Match>(
      environment.matches.spreadsheetId,
      environment.matches.worksheetName,
      matchAttributesMapping
    );
    this.matches$.subscribe((response) => {
      this.today = response.filter(
        (match) => match.date === new Date().toLocaleDateString()
      );
    });
  }
}
