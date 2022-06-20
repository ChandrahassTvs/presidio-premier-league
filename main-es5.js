(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/chandrahasstvs/Coda Global/Projects/presidio-premier-league/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1D0Q":
    /*!********************************!*\
      !*** ./src/app/match.model.ts ***!
      \********************************/

    /*! exports provided: matchAttributesMapping */

    /***/
    function D0Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matchAttributesMapping", function () {
        return matchAttributesMapping;
      });

      var matchAttributesMapping = {
        id: 'No',
        date: 'Date',
        status: 'Status',
        game: {
          name: 'Game',
          type: 'Type'
        },
        teamOne: {
          name: 'Team 1',
          players: {
            _prefix: 'Team 1 - Player ',
            _listField: true
          },
          score: 'Team 1 - Score'
        },
        teamTwo: {
          name: 'Team 2',
          players: {
            _prefix: 'Team 2 - Player ',
            _listField: true
          },
          score: 'Team 2 - Score'
        },
        result: 'Result'
      };
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        googleSheetsApiKey: 'AIzaSyDU-N2P62-nfvbTpapNKxgHizZ2U5qaSXw',
        matches: {
          spreadsheetId: '1RrXH6xxEJtB0luD_EwdCKnlN2Hkn3WpVESbs2AKkEIE',
          worksheetName: 'Fixtures'
        },
        teams: {
          spreadsheetId: '1RrXH6xxEJtB0luD_EwdCKnlN2Hkn3WpVESbs2AKkEIE',
          worksheetName: 'Team'
        },
        scores: {
          spreadsheetId: '1RrXH6xxEJtB0luD_EwdCKnlN2Hkn3WpVESbs2AKkEIE',
          worksheetName: 'Totals'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Efvs":
    /*!********************************!*\
      !*** ./src/app/score.model.ts ***!
      \********************************/

    /*! exports provided: scoreAttributesMapping */

    /***/
    function Efvs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scoreAttributesMapping", function () {
        return scoreAttributesMapping;
      });

      var scoreAttributesMapping = {
        team: 'Team',
        score: 'Score'
      };
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-google-sheets-db */
      "3O26");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _match_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./match.model */
      "1D0Q");
      /* harmony import */


      var lodash_groupBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! lodash/groupBy */
      "bt/X");
      /* harmony import */


      var lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash/orderBy */
      "k8Y/");
      /* harmony import */


      var lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _team_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./team.model */
      "wSvy");
      /* harmony import */


      var _score_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./score.model */
      "Efvs");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(googleSheetsDbService) {
          _classCallCheck(this, AppComponent);

          this.googleSheetsDbService = googleSheetsDbService;
          this.currentView = 'live';
          this.teamScores = [];
        }

        _createClass(AppComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.switchTab(this.currentView);
          }
        }, {
          key: "getMatches",
          value: function getMatches() {
            var _this = this;

            if (!this.fixturesGroupedByDates && !this.resultsGroupedByDates) {
              this.loading = true;
              this.matches$ = this.googleSheetsDbService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].matches.spreadsheetId, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].matches.worksheetName, _match_model__WEBPACK_IMPORTED_MODULE_6__["matchAttributesMapping"]);
              this.matches$.subscribe(function (response) {
                _this.fixturesGroupedByDates = lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default()(response.filter(function (a) {
                  return a.status != 'Completed';
                }), 'date');
                _this.resultsGroupedByDates = lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default()(response.filter(function (a) {
                  return a.status == 'Completed';
                }), 'date');
                _this.loading = false;
              });
            }
          }
        }, {
          key: "getTeams",
          value: function getTeams() {
            var _this2 = this;

            if (!this.playersGroupedByTeams) {
              this.loading = true;
              this.teams$ = this.googleSheetsDbService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].teams.spreadsheetId, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].teams.worksheetName, _team_model__WEBPACK_IMPORTED_MODULE_9__["teamAttributesMapping"]);
              this.teams$.subscribe(function (response) {
                _this2.playersGroupedByTeams = lodash_groupBy__WEBPACK_IMPORTED_MODULE_7___default()(response, 'team');
                _this2.loading = false;
              });
            }
          }
        }, {
          key: "getScores",
          value: function getScores() {
            var _this3 = this;

            if (!this.teamScores.length) {
              this.loading = true;
              this.scores$ = this.googleSheetsDbService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].scores.spreadsheetId, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].scores.worksheetName, _score_model__WEBPACK_IMPORTED_MODULE_10__["scoreAttributesMapping"]);
              this.scores$.subscribe(function (response) {
                response = lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default()(response, 'score', 'desc');
                _this3.teamScores = response;
                _this3.loading = false;
              });
            }
          }
        }, {
          key: "getLogoName",
          value: function getLogoName(name) {
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
        }, {
          key: "switchTab",
          value: function switchTab(tab) {
            this.currentView = tab;

            if (this.player) {
              this.player["delete"]();
            }

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
        }, {
          key: "setupLive",
          value: function setupLive() {
            var _this4 = this;

            setTimeout(function () {
              if (IVSPlayer.isPlayerSupported) {
                _this4.player = IVSPlayer.create();

                _this4.player.attachHTMLVideoElement(document.getElementById('video-player'));

                _this4.player.load('https://f5e4202d78fc.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.574829994450.channel.ZEBY7ylO0g8u.m3u8');

                _this4.player.play();
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__["GoogleSheetsDbService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navigation\">\n  <div class=\"container\">\n    <div class=\"title-container\">\n      <div class=\"title\">Presidio Premier League 2022</div>\n      <div class=\"location\">Chennai & Bangalore</div>\n    </div>\n    <div class=\"menu-list\">\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'live'\"\n        (click)=\"switchTab('live')\"\n      >\n        Live\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'fixtures'\"\n        (click)=\"switchTab('fixtures')\"\n      >\n        Fixtures\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'results'\"\n        (click)=\"switchTab('results')\"\n      >\n        Results\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'standings'\"\n        (click)=\"switchTab('standings')\"\n      >\n        Standings\n      </div>\n      <div\n        class=\"menu-item\"\n        [class.active]=\"currentView == 'teams'\"\n        (click)=\"switchTab('teams')\"\n      >\n        Teams\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"matches\" *ngIf=\"currentView === 'fixtures'\">\n  <ng-container *ngFor=\"let group of fixturesGroupedByDates | keyvalue\">\n    <div>\n      <div class=\"date\">{{ group.key }}</div>\n      <ng-container *ngFor=\"let match of group.value\">\n        <div class=\"match\" *ngIf=\"match.status != 'Completed'\">\n          <div class=\"game\">{{ match.game.name }} - {{ match.game.type }}</div>\n          <div class=\"fixture\">\n            <div class=\"team-one\">\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamOne.players\">\n                  {{ payer }}\n                </div>\n              </div>\n              <div class=\"logo {{ getLogoName(match.teamOne.name) }}\"></div>\n            </div>\n            <div class=\"vs\">VS</div>\n            <div class=\"team-two\">\n              <div class=\"logo {{ getLogoName(match.teamTwo.name) }}\"></div>\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamTwo.players\">\n                  {{ payer }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n<div class=\"matches\" *ngIf=\"currentView === 'results'\">\n  <ng-container *ngFor=\"let group of resultsGroupedByDates | keyvalue\">\n    <div>\n      <div class=\"date\">{{ group.key }}</div>\n      <ng-container *ngFor=\"let match of group.value\">\n        <div class=\"match\" *ngIf=\"match.status == 'Completed'\">\n          <div class=\"game\">{{ match.game.name }} - {{ match.game.type }}</div>\n          <div class=\"fixture\">\n            <div\n              class=\"team-one\"\n              [class.out]=\"match.teamOne.name != match.result\"\n            >\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamOne.players\">\n                  {{ payer }}\n                </div>\n              </div>\n              <div class=\"logo {{ getLogoName(match.teamOne.name) }}\"></div>\n            </div>\n            <div class=\"vs\">\n              <span>{{ match.teamOne.score }}</span> -\n              <span>{{ match.teamTwo.score }}</span>\n            </div>\n            <div\n              class=\"team-two\"\n              [class.out]=\"match.teamTwo.name != match.result\"\n            >\n              <div class=\"logo {{ getLogoName(match.teamTwo.name) }}\"></div>\n              <div class=\"players\">\n                <div class=\"player\" *ngFor=\"let payer of match.teamTwo.players\">\n                  {{ payer }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"teams\" *ngIf=\"currentView === 'teams'\">\n  <ng-container *ngFor=\"let group of playersGroupedByTeams | keyvalue\">\n    <div class=\"team\">\n      <div class=\"name\">\n        <div class=\"logo-large {{ getLogoName(group.key) }}\"></div>\n      </div>\n      <div class=\"players\">\n        <div class=\"player\" *ngFor=\"let player of group.value; let i = index\">\n          <span class=\"player-name\">\n            <span class=\"icon\" *ngIf=\"!i\">👑</span>\n            {{ player.name }}\n          </span>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"standings\" *ngIf=\"currentView === 'standings'\">\n  <ng-container *ngFor=\"let item of teamScores\">\n    <div class=\"team\">\n      <div class=\"name\">\n        <div class=\"logo-large {{ getLogoName(item.team) }}\"></div>\n      </div>\n      <div class=\"score\">\n        {{ item.score }}\n      </div>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"loader-wrapper\">\n  <div class=\"loader\" *ngIf=\"loading\"></div>\n</div>\n\n<div class=\"live\" *ngIf=\"currentView === 'live'\">\n  <video id=\"video-player\" playsinline></video>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-google-sheets-db */
      "3O26");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"], {
          provide: ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__["API_KEY"],
          useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleSheetsApiKey
        }, ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__["GoogleSheetsDbService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
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

      /***/

    },

    /***/
    "wSvy":
    /*!*******************************!*\
      !*** ./src/app/team.model.ts ***!
      \*******************************/

    /*! exports provided: teamAttributesMapping */

    /***/
    function wSvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "teamAttributesMapping", function () {
        return teamAttributesMapping;
      });

      var teamAttributesMapping = {
        name: 'Name',
        team: 'Team'
      };
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  padding: 24px;\n}\n.container .title-container {\n  font-family: \"James Fajardo\";\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 36px;\n}\n.container .title-container .title {\n  font-size: 64px;\n  font-weight: 400;\n}\n.container .title-container .location {\n  font-weight: 400;\n  font-size: 36px;\n}\n.container .menu-list {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  z-index: 1;\n}\n.container .menu-list .menu-item {\n  border: 1px solid #ffffff2b;\n  padding: 10px 16px;\n  background-color: transparent;\n  color: white;\n  display: inline-block;\n  margin: 8px;\n  border-radius: 16px;\n  font-weight: 400;\n  text-align: center;\n  width: 100px;\n  cursor: pointer;\n}\n.container .menu-list .menu-item:hover {\n  background-color: rgba(129, 19, 51, 0.2);\n}\n.container .menu-list .menu-item.active {\n  background-color: #811333;\n}\n.logo {\n  min-width: 50px;\n  height: 50px;\n  margin: 8px;\n  background-size: 50px;\n  display: none;\n}\n.logo.water-tribe {\n  background-image: url('WaterT.png');\n}\n.logo.air-nomad {\n  background-image: url('Air.png');\n}\n.logo.fire-nation {\n  background-image: url('Fire.png');\n}\n.logo.earth-kingdom {\n  background-image: url('Land.png');\n}\n.logo-large {\n  width: auto;\n  height: 80px;\n  margin-bottom: 16px;\n  background-size: auto 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.logo-large.water-tribe {\n  background-image: url('WaterTribe.png');\n}\n.logo-large.air-nomad {\n  background-image: url('AirNomad.png');\n}\n.logo-large.fire-nation {\n  background-image: url('FireNation.png');\n}\n.logo-large.earth-kingdom {\n  background-image: url('EarthKingdom.png');\n}\n.date {\n  font-size: 20px;\n  margin-bottom: 24px;\n}\n.matches {\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  align-items: center;\n  text-align: center;\n  color: white;\n}\n.matches .match {\n  width: 340px;\n  margin: 10px 0;\n  border-radius: 10px;\n  padding: 16px 0;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  border-top: 30px solid #0000007a;\n  position: relative;\n}\n.matches .match .game {\n  position: absolute;\n  top: -22px;\n  font-size: 14px;\n  text-align: center;\n  width: 100%;\n}\n.matches .match:last-child {\n  margin-bottom: 32px;\n}\n.matches .result {\n  background-color: #811333;\n  color: white;\n}\n.matches .players {\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1.4;\n  margin: 0 16px;\n}\n.matches .players .player {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.matches .players .player:last-child {\n  margin-bottom: 0;\n}\n.matches .fixture {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.matches .vs {\n  margin: 0 8px;\n  font-size: 14px;\n  width: 8%;\n}\n.matches .vs .won {\n  font-weight: 600;\n}\n.matches .team-one,\n.matches .team-two {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 45%;\n}\n.matches .team-one.out,\n.matches .team-two.out {\n  opacity: 0.3;\n}\n.matches .team-two {\n  justify-content: flex-start;\n}\n.matches .team-two .players {\n  margin-right: 24px;\n}\n.matches .team-two .player {\n  text-align: left;\n}\n.matches .team-one .players {\n  align-items: flex-end;\n  margin-left: 24px;\n}\n.teams {\n  display: grid;\n  padding: 24px 0;\n}\n.teams .team {\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  margin: 0 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  border-radius: 10px;\n}\n.teams .team .name {\n  background: #0000007a;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.teams .team .players {\n  color: white;\n  padding: 0 16px;\n  line-height: 1.4;\n}\n.teams .team .players .player {\n  margin-bottom: 10px;\n}\n.teams .team .players .player .player-name {\n  position: relative;\n}\n.teams .team .players .player .icon {\n  font-size: 20px;\n  margin-right: 8px;\n  position: absolute;\n  left: -30px;\n  top: -4px;\n}\n.standings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 0;\n}\n.standings .team {\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  margin: 0 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  border-radius: 10px;\n  display: flex;\n  width: 94%;\n  max-width: 400px;\n}\n.standings .team .name {\n  flex: 1;\n}\n.standings .team .score {\n  width: 100px;\n  background: #0000007a;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  color: white;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.standings .logo-large {\n  margin-bottom: 0;\n  background-position-x: 10px;\n}\n.loader-wrapper {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50px;\n  height: 50px;\n}\n.loader {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: inline-block;\n  border-top: 3px solid #fff;\n  border-right: 3px solid transparent;\n  box-sizing: border-box;\n  transform: translate(-50%);\n  -webkit-animation: rotation 1s linear infinite;\n          animation: rotation 1s linear infinite;\n}\n.live {\n  padding: 24px 0;\n  text-align: center;\n}\n.live #video-player {\n  width: 94%;\n}\n@-webkit-keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (min-width: 576px) {\n  .teams {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 768px) {\n  .live {\n    text-align: center;\n  }\n  .live #video-player {\n    width: 90%;\n  }\n\n  .teams {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .vs {\n    width: 10%;\n    margin: 0 16px;\n    font-size: 16px;\n  }\n\n  .matches .match {\n    width: 600px;\n  }\n  .matches .logo {\n    display: block;\n  }\n}\n@media (min-width: 992px) {\n  .live {\n    text-align: center;\n  }\n  .live #video-player {\n    width: 75%;\n  }\n\n  .teams {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBRUU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBRUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBSjtBQUNJO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ047QUFBTTtFQUNFLHdDQUFBO0FBRVI7QUFBTTtFQUNFLHlCQUFBO0FBRVI7QUFJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQURGO0FBRUU7RUFDRSxtQ0FBQTtBQUFKO0FBRUU7RUFDRSxnQ0FBQTtBQUFKO0FBRUU7RUFDRSxpQ0FBQTtBQUFKO0FBRUU7RUFDRSxpQ0FBQTtBQUFKO0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBREY7QUFHRTtFQUNFLHVDQUFBO0FBREo7QUFHRTtFQUNFLHFDQUFBO0FBREo7QUFHRTtFQUNFLHVDQUFBO0FBREo7QUFHRTtFQUNFLHlDQUFBO0FBREo7QUFLQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBREo7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBTjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUdFO0VBQ0UseUJBMUhXO0VBMkhYLFlBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7QUFHSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUVNO0VBQ0UsZ0JBQUE7QUFBUjtBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFKSjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQU9FOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQUxKO0FBTUk7O0VBQ0UsWUFBQTtBQUhOO0FBT0U7RUFDRSwyQkFBQTtBQUxKO0FBTUk7RUFDRSxrQkFBQTtBQUpOO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBUUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFVQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBUEY7QUFRRTtFQUNFLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQU9JO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBTE47QUFPSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU1NO0VBQ0UsbUJBQUE7QUFKUjtBQUtRO0VBQ0Usa0JBQUE7QUFIVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUhWO0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFQRjtBQVFFO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQU9JO0VBQ0UsT0FBQTtBQUxOO0FBT0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBTko7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUEY7QUFTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQU5GO0FBU0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFORjtBQU9FO0VBQ0UsVUFBQTtBQUxKO0FBU0E7RUFDRTtJQUNFLHVCQUFBO0VBTkY7RUFRQTtJQUNFLHlCQUFBO0VBTkY7QUFDRjtBQUFBO0VBQ0U7SUFDRSx1QkFBQTtFQU5GO0VBUUE7SUFDRSx5QkFBQTtFQU5GO0FBQ0Y7QUFVQTtFQUNFO0lBQ0UscUNBQUE7RUFSRjtBQUNGO0FBWUE7RUFDRTtJQUNFLGtCQUFBO0VBVkY7RUFXRTtJQUNFLFVBQUE7RUFUSjs7RUFZQTtJQUNFLHFDQUFBO0VBVEY7O0VBV0E7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFSRjs7RUFXRTtJQUNFLFlBQUE7RUFSSjtFQVVFO0lBQ0UsY0FBQTtFQVJKO0FBQ0Y7QUFhQTtFQUNFO0lBQ0Usa0JBQUE7RUFYRjtFQVlFO0lBQ0UsVUFBQTtFQVZKOztFQWFBO0lBQ0UscUNBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnlDb2xvcjogIzgxMTMzMztcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnSmFtZXMgRmFqYXJkbyc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAubG9jYXRpb24ge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG4gIH1cbiAgLm1lbnUtbGlzdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjJiO1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnlDb2xvciwgMC4yKTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeUNvbG9yLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ28ge1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgJi53YXRlci10cmliZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvV2F0ZXJULnBuZycpO1xuICB9XG4gICYuYWlyLW5vbWFkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9BaXIucG5nJyk7XG4gIH1cbiAgJi5maXJlLW5hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvRmlyZS5wbmcnKTtcbiAgfVxuICAmLmVhcnRoLWtpbmdkb20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0xhbmQucG5nJyk7XG4gIH1cbn1cblxuLmxvZ28tbGFyZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gODBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICYud2F0ZXItdHJpYmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL1dhdGVyVHJpYmUucG5nJyk7XG4gIH1cbiAgJi5haXItbm9tYWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0Fpck5vbWFkLnBuZycpO1xuICB9XG4gICYuZmlyZS1uYXRpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0ZpcmVOYXRpb24ucG5nJyk7XG4gIH1cbiAgJi5lYXJ0aC1raW5nZG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9FYXJ0aEtpbmdkb20ucG5nJyk7XG4gIH1cbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5tYXRjaGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIC5tYXRjaCB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGJvcmRlci10b3A6IDMwcHggc29saWQgIzAwMDAwMDdhO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZ2FtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0yMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cbiAgfVxuICAucmVzdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5wbGF5ZXJzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgLnBsYXllciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maXh0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudnMge1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA4JTtcbiAgICAud29uIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgLnRlYW0tb25lLFxuICAudGVhbS10d28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgJi5vdXQge1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbiAgfVxuXG4gIC50ZWFtLXR3byB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC5wbGF5ZXJzIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG4gICAgLnBsYXllciB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC50ZWFtLW9uZSAucGxheWVycyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICB9XG59XG5cbi50ZWFtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgLnRlYW0ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLm5hbWUge1xuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDdhO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAucGxheWVycyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgLnBsYXllciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIC5wbGF5ZXItbmFtZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3RhbmRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAwO1xuICAudGVhbSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAubmFtZSB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAuc2NvcmUge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDdhO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5sb2dvLWxhcmdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTBweDtcbiAgfVxufVxuXG4ubG9hZGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubG9hZGVyIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubGl2ZSB7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAjdmlkZW8tcGxheWVyIHtcbiAgICB3aWR0aDogOTQlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnRlYW1zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5cbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxpdmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAjdmlkZW8tcGxheWVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICB9XG4gIC50ZWFtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxuICAudnMge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5tYXRjaGVzIHtcbiAgICAubWF0Y2gge1xuICAgICAgd2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubGl2ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICN2aWRlby1wbGF5ZXIge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnRlYW1zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG59XG5cbi8vIFgtTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG59XG5cbi8vIFhYLUxhcmdlIGRldmljZXMgKGxhcmdlciBkZXNrdG9wcywgMTQwMHB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map