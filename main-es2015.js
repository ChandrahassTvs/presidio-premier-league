(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chandrahasstvs/Coda Global/Projects/presidio-premier-league/src/main.ts */"zUnb");


/***/ }),

/***/ "1D0Q":
/*!********************************!*\
  !*** ./src/app/match.model.ts ***!
  \********************************/
/*! exports provided: matchAttributesMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchAttributesMapping", function() { return matchAttributesMapping; });
const matchAttributesMapping = {
    id: 'No',
    date: 'Date',
    status: 'Status',
    game: {
        name: 'Game',
        type: 'Type',
    },
    teamOne: {
        name: 'Team 1',
        players: {
            _prefix: 'Team 1 - Player ',
            _listField: true,
        },
        score: 'Team 1 - Score',
    },
    teamTwo: {
        name: 'Team 2',
        players: {
            _prefix: 'Team 2 - Player ',
            _listField: true,
        },
        score: 'Team 2 - Score',
    },
    result: 'Result',
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    googleSheetsApiKey: 'AIzaSyDU-N2P62-nfvbTpapNKxgHizZ2U5qaSXw',
    matches: {
        spreadsheetId: '1RrXH6xxEJtB0luD_EwdCKnlN2Hkn3WpVESbs2AKkEIE',
        worksheetName: 'Fixtures',
    },
    teams: {
        spreadsheetId: '1RrXH6xxEJtB0luD_EwdCKnlN2Hkn3WpVESbs2AKkEIE',
        worksheetName: 'Team',
    },
    scores: {
        spreadsheetId: '1RrXH6xxEJtB0luD_EwdCKnlN2Hkn3WpVESbs2AKkEIE',
        worksheetName: 'Totals',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Efvs":
/*!********************************!*\
  !*** ./src/app/score.model.ts ***!
  \********************************/
/*! exports provided: scoreAttributesMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreAttributesMapping", function() { return scoreAttributesMapping; });
const scoreAttributesMapping = {
    team: 'Team',
    score: 'Score',
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-google-sheets-db */ "3O26");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _match_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match.model */ "1D0Q");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/groupBy */ "bt/X");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/orderBy */ "k8Y/");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _team_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team.model */ "wSvy");
/* harmony import */ var _score_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score.model */ "Efvs");











let AppComponent = class AppComponent {
    constructor(googleSheetsDbService) {
        this.googleSheetsDbService = googleSheetsDbService;
        this.currentView = 'standings';
        this.teamScores = [];
    }
    ngOnInit() {
        this.switchTab(this.currentView);
    }
    getMatches() {
        if (!this.fixturesGroupedByDates && !this.resultsGroupedByDates) {
            this.loading = true;
            this.matches$ = this.googleSheetsDbService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].matches.spreadsheetId, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].matches.worksheetName, _match_model__WEBPACK_IMPORTED_MODULE_6__["matchAttributesMapping"]);
            this.matches$.subscribe((response) => {
                this.fixturesGroupedByDates = lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default()(response.filter((a) => a.status != 'Completed'), 'date');
                this.resultsGroupedByDates = lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default()(response.filter((a) => a.status == 'Completed'), 'date');
                this.loading = false;
            });
        }
    }
    getTeams() {
        if (!this.playersGroupedByTeams) {
            this.loading = true;
            this.teams$ = this.googleSheetsDbService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].teams.spreadsheetId, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].teams.worksheetName, _team_model__WEBPACK_IMPORTED_MODULE_9__["teamAttributesMapping"]);
            this.teams$.subscribe((response) => {
                this.playersGroupedByTeams = lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default()(response, 'team');
                this.loading = false;
            });
        }
    }
    getScores() {
        if (!this.teamScores.length) {
            this.loading = true;
            this.scores$ = this.googleSheetsDbService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].scores.spreadsheetId, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].scores.worksheetName, _score_model__WEBPACK_IMPORTED_MODULE_10__["scoreAttributesMapping"]);
            this.scores$.subscribe((response) => {
                response = lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default()(response, 'score', 'desc');
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
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__["GoogleSheetsDbService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navigation\">\n  <div class=\"container\">\n    <div class=\"title-container\">\n      <div class=\"title\">Presidio Premier League</div>\n      <div>2022</div>\n    </div>\n    <div class=\"menu-list\">\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'fixtures'\"\n        (click)=\"switchTab('fixtures')\"\n      >\n        Fixtures\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'results'\"\n        (click)=\"switchTab('results')\"\n      >\n        Results\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'standings'\"\n        (click)=\"switchTab('standings')\"\n      >\n        Standings\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'teams'\"\n        (click)=\"switchTab('teams')\"\n      >\n        Teams\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"matches\" *ngIf=\"currentView === 'fixtures'\">\n  <ng-container *ngFor=\"let group of fixturesGroupedByDates | keyvalue\">\n    <div>\n      <div class=\"date\">{{ group.key }}</div>\n      <ng-container *ngFor=\"let match of group.value\">\n        <div class=\"match\" *ngIf=\"match.status != 'Completed'\">\n          <div class=\"game\">{{ match.game.name }} - {{ match.game.type }}</div>\n          <div class=\"fixture\">\n            <div class=\"team-one\">\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamOne.players\">\n                  {{ payer }}\n                </div>\n              </div>\n              <div class=\"logo {{ getLogoName(match.teamOne.name) }}\"></div>\n            </div>\n            <div class=\"vs\">VS</div>\n            <div class=\"team-two\">\n              <div class=\"logo {{ getLogoName(match.teamTwo.name) }}\"></div>\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamTwo.players\">\n                  {{ payer }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n<div class=\"matches\" *ngIf=\"currentView === 'results'\">\n  <ng-container *ngFor=\"let group of resultsGroupedByDates | keyvalue\">\n    <div>\n      <div class=\"date\">{{ group.key }}</div>\n      <ng-container *ngFor=\"let match of group.value\">\n        <div class=\"match\" *ngIf=\"match.status == 'Completed'\">\n          <div class=\"game\">{{ match.game.name }} - {{ match.game.type }}</div>\n          <div class=\"fixture\">\n            <div\n              class=\"team-one\"\n              [class.out]=\"match.teamOne.name != match.result\"\n            >\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamOne.players\">\n                  {{ payer }}\n                </div>\n              </div>\n              <div class=\"logo {{ getLogoName(match.teamOne.name) }}\"></div>\n            </div>\n            <div class=\"vs\">\n              <span>{{ match.teamOne.score }}</span> -\n              <span>{{ match.teamTwo.score }}</span>\n            </div>\n            <div\n              class=\"team-two\"\n              [class.out]=\"match.teamTwo.name != match.result\"\n            >\n              <div class=\"logo {{ getLogoName(match.teamTwo.name) }}\"></div>\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamTwo.players\">\n                  {{ payer }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"teams\" *ngIf=\"currentView === 'teams'\">\n  <ng-container *ngFor=\"let group of playersGroupedByTeams | keyvalue\">\n    <div class=\"team\">\n      <div class=\"name\">\n        <div class=\"logo-large {{ getLogoName(group.key) }}\"></div>\n      </div>\n      <div class=\"players\">\n        <div class=\"player\" *ngFor=\"let player of group.value; let i = index\">\n          <span class=\"player-name\">\n            <span class=\"icon\" *ngIf=\"!i\">👑</span>\n            {{ player.name }}\n          </span>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"standings\" *ngIf=\"currentView === 'standings'\">\n  <ng-container *ngFor=\"let item of teamScores\">\n    <div class=\"team\">\n      <div class=\"name\">\n        <div class=\"logo-large {{ getLogoName(item.team) }}\"></div>\n      </div>\n      <div class=\"score\">\n        {{ item.score }}\n      </div>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"loader-wrapper\">\n  <div class=\"loader\" *ngIf=\"loading\"></div>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-google-sheets-db */ "3O26");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"],
            {
                provide: ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__["API_KEY"],
                useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleSheetsApiKey,
            },
            ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__["GoogleSheetsDbService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "wSvy":
/*!*******************************!*\
  !*** ./src/app/team.model.ts ***!
  \*******************************/
/*! exports provided: teamAttributesMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamAttributesMapping", function() { return teamAttributesMapping; });
const teamAttributesMapping = {
    name: 'Name',
    team: 'Team',
};


/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 24px;\n}\n.container .title-container {\n  font-family: \"Gloria Hallelujah\", cursive;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 36px;\n}\n.container .title-container .title {\n  font-size: 36px;\n}\n.container .menu-list {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n}\n.container .menu-list .menu-item {\n  border: 1px solid #ffffff2b;\n  padding: 10px 16px;\n  background-color: transparent;\n  color: white;\n  display: inline-block;\n  margin: 8px;\n  border-radius: 16px;\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n}\n.container .menu-list .menu-item.active {\n  background-color: #811333;\n  color: white;\n}\n.logo {\n  min-width: 50px;\n  height: 50px;\n  margin: 8px;\n  background-size: 50px;\n  display: none;\n}\n.logo.water-tribe {\n  background-image: url('WaterT.png');\n}\n.logo.air-nomad {\n  background-image: url('Air.png');\n}\n.logo.fire-nation {\n  background-image: url('Fire.png');\n}\n.logo.earth-kingdom {\n  background-image: url('Land.png');\n}\n.logo-large {\n  width: auto;\n  height: 80px;\n  margin-bottom: 16px;\n  background-size: auto 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.logo-large.water-tribe {\n  background-image: url('WaterTribe.png');\n}\n.logo-large.air-nomad {\n  background-image: url('AirNomad.png');\n}\n.logo-large.fire-nation {\n  background-image: url('FireNation.png');\n}\n.logo-large.earth-kingdom {\n  background-image: url('EarthKingdom.png');\n}\n.date {\n  font-size: 20px;\n  margin-bottom: 24px;\n}\n.matches {\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  align-items: center;\n  text-align: center;\n  color: white;\n}\n.matches .match {\n  width: 340px;\n  margin: 10px 0;\n  border-radius: 10px;\n  padding: 16px 0;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  border-top: 30px solid #0000007a;\n  position: relative;\n}\n.matches .match .game {\n  position: absolute;\n  top: -22px;\n  font-size: 14px;\n  text-align: center;\n  width: 100%;\n}\n.matches .match:last-child {\n  margin-bottom: 32px;\n}\n.matches .result {\n  background-color: #811333;\n  color: white;\n}\n.matches .players {\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1.4;\n  margin: 0 16px;\n}\n.matches .players .player {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.matches .players .player:last-child {\n  margin-bottom: 0;\n}\n.matches .fixture {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.matches .vs {\n  margin: 0 16px;\n  font-size: 14px;\n  width: 10%;\n}\n.matches .vs .won {\n  font-weight: 600;\n}\n.matches .team-one,\n.matches .team-two {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 45%;\n}\n.matches .team-one.out,\n.matches .team-two.out {\n  opacity: 0.3;\n}\n.matches .team-two {\n  justify-content: flex-start;\n}\n.matches .team-two .players {\n  text-align: left;\n}\n.matches .team-one .players {\n  align-items: flex-end;\n}\n.teams {\n  display: grid;\n  padding: 24px 0;\n}\n.teams .team {\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  margin: 0 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  border-radius: 10px;\n}\n.teams .team .name {\n  background: #0000007a;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.teams .team .players {\n  color: white;\n  padding: 0 16px;\n  line-height: 1.4;\n}\n.teams .team .players .player {\n  margin-bottom: 10px;\n}\n.teams .team .players .player .player-name {\n  position: relative;\n}\n.teams .team .players .player .icon {\n  font-size: 20px;\n  margin-right: 8px;\n  position: absolute;\n  left: -30px;\n  top: -4px;\n}\n.standings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 0;\n}\n.standings .team {\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  margin: 0 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  border-radius: 10px;\n  display: flex;\n  width: 94%;\n  max-width: 400px;\n}\n.standings .team .name {\n  flex: 1;\n}\n.standings .team .score {\n  width: 100px;\n  background: #0000007a;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  color: white;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.standings .logo-large {\n  margin-bottom: 0;\n  background-position-x: 10px;\n}\n.loader-wrapper {\n  position: absolute;\n  top: 300px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50px;\n  height: 50px;\n}\n.loader {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: inline-block;\n  border-top: 3px solid #fff;\n  border-right: 3px solid transparent;\n  box-sizing: border-box;\n  transform: translate(-50%);\n  -webkit-animation: rotation 1s linear infinite;\n          animation: rotation 1s linear infinite;\n}\n@-webkit-keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (min-width: 576px) {\n  .teams {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 768px) {\n  .teams {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .vs {\n    font-size: 16px;\n  }\n\n  .matches .match {\n    width: 600px;\n  }\n  .matches .logo {\n    display: block;\n  }\n}\n@media (min-width: 992px) {\n  .teams {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBRUU7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtBQUNOO0FBRUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBQ0k7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFUjtBQUlBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBREY7QUFFRTtFQUNFLG1DQUFBO0FBQUo7QUFFRTtFQUNFLGdDQUFBO0FBQUo7QUFFRTtFQUNFLGlDQUFBO0FBQUo7QUFFRTtFQUNFLGlDQUFBO0FBQUo7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUdFO0VBQ0UsdUNBQUE7QUFESjtBQUdFO0VBQ0UscUNBQUE7QUFESjtBQUdFO0VBQ0UsdUNBQUE7QUFESjtBQUdFO0VBQ0UseUNBQUE7QUFESjtBQUtBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRUk7RUFDRSxtQkFBQTtBQUFOO0FBR0U7RUFDRSx5QkFqSFc7RUFrSFgsWUFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUdJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUROO0FBRU07RUFDRSxnQkFBQTtBQUFSO0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUpKO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBT0U7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBTEo7QUFNSTs7RUFDRSxZQUFBO0FBSE47QUFPRTtFQUNFLDJCQUFBO0FBTEo7QUFNSTtFQUNFLGdCQUFBO0FBSk47QUFRRTtFQUNFLHFCQUFBO0FBTko7QUFVQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBUEY7QUFRRTtFQUNFLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQU9JO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBTE47QUFPSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU1NO0VBQ0UsbUJBQUE7QUFKUjtBQUtRO0VBQ0Usa0JBQUE7QUFIVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUhWO0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFQRjtBQVFFO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQU9JO0VBQ0UsT0FBQTtBQUxOO0FBT0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBTko7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUEY7QUFTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQU5GO0FBU0E7RUFDRTtJQUNFLHVCQUFBO0VBTkY7RUFRQTtJQUNFLHlCQUFBO0VBTkY7QUFDRjtBQUFBO0VBQ0U7SUFDRSx1QkFBQTtFQU5GO0VBUUE7SUFDRSx5QkFBQTtFQU5GO0FBQ0Y7QUFVQTtFQUNFO0lBQ0UscUNBQUE7RUFSRjtBQUNGO0FBWUE7RUFDRTtJQUNFLHFDQUFBO0VBVkY7O0VBWUE7SUFDRSxlQUFBO0VBVEY7O0VBWUU7SUFDRSxZQUFBO0VBVEo7RUFXRTtJQUNFLGNBQUE7RUFUSjtBQUNGO0FBY0E7RUFDRTtJQUNFLHFDQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5Q29sb3I6ICM4MTEzMzM7XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4O1xuICAudGl0bGUtY29udGFpbmVyIHtcbiAgICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgY3Vyc2l2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG4gIH1cbiAgLm1lbnUtbGlzdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAubWVudS1pdGVtIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYyYjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeUNvbG9yLCAxKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubG9nbyB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4O1xuICBkaXNwbGF5OiBub25lO1xuICAmLndhdGVyLXRyaWJlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9XYXRlclQucG5nJyk7XG4gIH1cbiAgJi5haXItbm9tYWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0Fpci5wbmcnKTtcbiAgfVxuICAmLmZpcmUtbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9GaXJlLnBuZycpO1xuICB9XG4gICYuZWFydGgta2luZ2RvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvTGFuZC5wbmcnKTtcbiAgfVxufVxuXG4ubG9nby1sYXJnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byA4MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgJi53YXRlci10cmliZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvV2F0ZXJUcmliZS5wbmcnKTtcbiAgfVxuICAmLmFpci1ub21hZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvQWlyTm9tYWQucG5nJyk7XG4gIH1cbiAgJi5maXJlLW5hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvRmlyZU5hdGlvbi5wbmcnKTtcbiAgfVxuICAmLmVhcnRoLWtpbmdkb20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0VhcnRoS2luZ2RvbS5wbmcnKTtcbiAgfVxufVxuXG4uZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm1hdGNoZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLm1hdGNoIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCAjMDAwMDAwN2E7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5nYW1lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTIycHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuICB9XG4gIC5yZXN1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnBsYXllcnMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgICAucGxheWVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpeHR1cmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC52cyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMCU7XG4gICAgLndvbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gIC50ZWFtLW9uZSxcbiAgLnRlYW0tdHdvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogNDUlO1xuICAgICYub3V0IHtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG4gIH1cblxuICAudGVhbS10d28ge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAucGxheWVycyB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC50ZWFtLW9uZSAucGxheWVycyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG59XG5cbi50ZWFtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgLnRlYW0ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLm5hbWUge1xuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDdhO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAucGxheWVycyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgLnBsYXllciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIC5wbGF5ZXItbmFtZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3RhbmRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAwO1xuICAudGVhbSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAubmFtZSB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAuc2NvcmUge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDdhO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5sb2dvLWxhcmdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTBweDtcbiAgfVxufVxuXG4ubG9hZGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmxvYWRlciB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAudGVhbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudGVhbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbiAgLnZzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLm1hdGNoZXMge1xuICAgIC5tYXRjaCB7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50ZWFtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgfVxufVxuXG4vLyBYLUxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xufVxuXG4vLyBYWC1MYXJnZSBkZXZpY2VzIChsYXJnZXIgZGVza3RvcHMsIDE0MDBweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG59XG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map