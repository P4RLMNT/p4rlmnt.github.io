(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/live/live.component */ "./src/app/components/live/live.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/archive/archive.component */ "./src/app/components/archive/archive.component.ts");
/* harmony import */ var _components_training_training_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/training/training.component */ "./src/app/components/training/training.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'live', component: _components_live_live_component__WEBPACK_IMPORTED_MODULE_3__["LiveComponent"] },
    { path: 'archive', component: _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_5__["ArchiveComponent"] },
    { path: 'training', component: _components_training_training_component__WEBPACK_IMPORTED_MODULE_6__["TrainingComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-margin{\n    margin: 0px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-secondary navbar-dark\">\n  <div class=\"container no-margin\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <span class=\"fa fa-space-shuttle\"></span>&nbsp;{{title}}</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/live\">Live</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/archive\">Archive</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/training\">Training</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br/>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Scribe';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/live/live.component */ "./src/app/components/live/live.component.ts");
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/archive/archive.component */ "./src/app/components/archive/archive.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_training_training_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/training/training.component */ "./src/app/components/training/training.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_live_live_component__WEBPACK_IMPORTED_MODULE_3__["LiveComponent"],
                _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_4__["ArchiveComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_training_training_component__WEBPACK_IMPORTED_MODULE_7__["TrainingComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/clip-display.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/clip-display.ts ***!
  \*****************************************/
/*! exports provided: ClipDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipDisplay", function() { return ClipDisplay; });
var ClipDisplay = /** @class */ (function () {
    function ClipDisplay(newClip, ChannelName) {
        this.clip = newClip;
        this.editing = false;
        this.channel_name = ChannelName;
    }
    return ClipDisplay;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"text-center display-3 text-primary\">About - SCRIBE</h1>\n        <p class=\"\">SCRIBE is an interface for AUDREY; an advanced AI developed by JPL. This application was developed by James Bearss, Jonothan Brownlee, Morgan Cole, and Andrew Gates as their Senior Design project at UCF.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/archive/archive.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/archive/archive.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/archive/archive.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/archive/archive.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\"> Search</div>\n          <div class=\"card-body\">\n            <form class=\"\">\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"fa fa-comment\"></span>&nbsp;Text</label>\n                <input id=\"test\" type=\"email\" class=\"form-control\" placeholder=\"Text\"> </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"fa fa-user\"></span>&nbsp;Speaker</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Speaker\"> </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"fa fa-volume-up\"></span>&nbsp;Channel</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Channel\"> </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"fa fa-clock-o\"></span>&nbsp;Time Range</label>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <input class=\"form-control\" placeholder=\"Start\"> </div>&nbsp;-&nbsp;\n                  <div class=\"col\">\n                    <input class=\"form-control\" placeholder=\"End\"> </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"fa fa-calendar\"></span>&nbsp;Date Range</label>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Start\"> </div> &nbsp;-&nbsp;\n                  <div class=\"col\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"End\"> </div>\n                </div>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary pull-right\">\n                <span class=\"fa fa-search\"></span>&nbsp;Search</button>\n            </form>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/archive/archive.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/archive/archive.component.ts ***!
  \*********************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent() {
    }
    ArchiveComponent.prototype.ngOnInit = function () {
    };
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/components/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.css */ "./src/app/components/archive/archive.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-header\"> Live Stream</div>\n          <div class=\"card-body\">\n            <a routerLink=\"/live\">\n              <h4>Listen to live EVS channels.</h4>\n            </a>\n            <p>This will let you listen to live streams of EVS channels. You can select multiple channels at once, correct the AUDREY-interpreted text, and search through the log of what you've listened to.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">Archived Streams</div>\n          <div class=\"card-body\">\n            <a routerLink=\"/archive\">\n              <h4>Listen to archived EVS audio.</h4>\n            </a>\n            <p>This will let you listen to archived streams of EVS channels. You can filter through the archived data by text, date/time, speaker, and channel. You can also make corrections to the AUDREY-interpreted text.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">Training</div>\n          <div class=\"card-body\">\n            <a routerLink=\"/training\">\n              <h4>Train AUDREY</h4>\n            </a>\n            <p>This will let you use the microphone on your computer, and see the AUDREY-interpreted text as it is generated. You can then make corrections to any errors in the interpreted text.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/live/live.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/live/live.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".channel-button{\n    width:100%; \n    font-size:30px; \n    margin-bottom:10px;\n}"

/***/ }),

/***/ "./src/app/components/live/live.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/live/live.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-md-1 col-md-10\">\n    <div class=\"card\">\n      <div class=\"card-header\"> Live Stream <button (click)=\"getClips()\" class=\"pull-right btn btn-primary\"><span class=\"fa fa-refresh\"></span></button></div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <button class=\"channel-button btn btn-primary text-center\" (click)=\"open(addChannelModal)\">\n              <span class=\"fa fa-plus\"></span>\n            </button>\n            <div *ngFor=\"let channel of activeChannels\">\n                <button class=\"channel-button btn text-center\" [ngClass]=\"getColor(channel.id)\" (click)=\"toggleChannel(channel)\">{{channel.name}}</button>\n            </div>\n          </div>\n          <div class=\"col-10\" style=\"max-height:70vh; overflow-y: scroll;\">\n\n            <!-- Display details for each clip -->\n\n            <div *ngFor=\"let clipDisplay of clipDisplays\">\n\n              <div *ngIf=\"shouldDisplayClip(clipDisplay)\" class=\"card\" [ngClass]=\"getColor(clipDisplay.clip.channel_id)\" style=\"margin-bottom:10px\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-1 d-none d-lg-block\">\n                      <img class=\"img\" style=\"width:100%\" src=\"https://dt.azadicdn.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png?200\">\n                    </div>\n                    <div class=\"col-12 col-lg-11\">\n                      <textarea *ngIf=\"clipDisplay.editing\" class=\"form-control\" [(ngModel)]=\"clipDisplay.clip.text\"></textarea>\n                      <div *ngIf=\"!clipDisplay.editing\">{{clipDisplay.clip.text}}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-footer\">\n                  <span class=\"fa fa-user\"></span>&nbsp;Speaker: {{clipDisplay.clip.speaker}}&nbsp;&nbsp;&nbsp;\n                  <span class=\"fa fa-volume-up\"></span>&nbsp;Channel: {{clipDisplay.channel_name}}&nbsp;&nbsp;&nbsp;\n                  <span class=\"fa fa-time\">{{clipDisplay.clip.created_at}}</span>\n                  <div class=\"pull-right\">\n\n                    <!-- Make/Save Correction Buttons -->\n                    <button *ngIf=\"!clipDisplay.editing\" class=\"btn btn-primary\" (click)=\"makeCorrection(clipDisplay)\"> Make Correction&nbsp;\n                      <span class=\"fa fa-edit\"></span>\n                    </button>\n                    <button *ngIf=\"clipDisplay.editing\" class=\"btn btn-success\" (click)=\"saveCorrection(clipDisplay)\"> Save Correction&nbsp;\n                      <span class=\"fa fa-edit\"></span>\n                    </button>\n\n                    <!-- Play Clip Button -->\n                    <button class=\"btn btn-primary\" (click)=\"playClip(clipDisplay)\" style=\"margin-left:5px\">Play &nbsp;\n                      <span class=\"fa fa-play\"></span>\n                    </button>\n\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div *ngIf=\"showNotification\" class=\"alert alert-success\" role=\"alert\">\n      <button type=\"button\" class=\"close\" (click)=\"closeNotification()\">×</button>\n      <h4 class=\"alert-heading\">Corrections saved</h4>\n      <p class=\"mb-0\">The corrections have been saved to the database.</p>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #addChannelModal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Add Channel</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-inline\">\n            <div class=\"col\" style=\"padding:0px\">\n              <div class=\"input-group\">\n                <input [(ngModel)]=\"channelSearchInput\" (keyup.enter)=\"searchForChannel()\" name=\"channelSearchInput\" type=\"text\" class=\"form-control\" placeholder=\"Search Terms\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"searchForChannel()\">\n                    <span class=\"fa fa-search\"></span>&nbsp;Search </button>\n                </div>\n              </div>\n            </div>\n          </form>\n          <br>\n          <div class=\"card\">\n            <table class=\"table\" style=\"margin-bottom:0px\">\n              <thead>\n                <tr>\n                  <th style=\"width:90%\">Channel Name</th>\n                  <th style=\"width:10%\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let channel of channelSearchResults\">\n                  <td>{{channel.name}}</td>\n                  <td>\n                    <button class=\"btn btn-primary\" (click)=\"addActiveChannel(channel)\">\n                      <span class=\"fa fa-plus\"></span>&nbsp;Add </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('Save click')\">Close</button>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/components/live/live.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/live/live.component.ts ***!
  \***************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_clip_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/clip-display */ "./src/app/classes/clip-display.ts");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/channel.service */ "./src/app/services/channel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clip.service */ "./src/app/services/clip.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LiveComponent = /** @class */ (function () {
    function LiveComponent(channelService, clipService, modalService) {
        this.channelService = channelService;
        this.clipService = clipService;
        this.modalService = modalService;
        this.showNotification = false;
    }
    LiveComponent.prototype.ngOnInit = function () {
        this.activeChannels = [];
        this.clipDisplays = [];
    };
    LiveComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LiveComponent.prototype.addActiveChannel = function (channel) {
        if (this.activeChannels.filter(function (x) { return x.id === channel.id; }).length === 0) {
            this.activeChannels.push(channel);
            this.getClips();
        }
    };
    LiveComponent.prototype.searchForChannel = function () {
        var _this = this;
        this.channelService
            .getChannels(this.channelSearchInput)
            .subscribe(function (channels) {
            _this.channelSearchResults = channels;
        });
    };
    LiveComponent.prototype.getClips = function () {
        var _this = this;
        this.clipDisplays = [];
        this.activeChannels.forEach(function (channel) {
            if (channel !== null) {
                _this.clipService.getClips(channel).subscribe(function (response) { return response.data.forEach(function (clip) {
                    _this.clipDisplays = _this.clipDisplays.concat(new src_app_classes_clip_display__WEBPACK_IMPORTED_MODULE_1__["ClipDisplay"](clip, channel.name));
                }); });
            }
        });
    };
    LiveComponent.prototype.getColor = function (channel) {
        switch (channel) {
            case 1: {
                return "bg-secondary";
            }
            case 2: {
                return "bg-primary";
            }
            case 3: {
                return "bg-light";
            }
            case 4: {
                return "bg-dark";
            }
        }
    };
    LiveComponent.prototype.toggleChannel = function (channel) {
        var c = this.findChannelFromId(channel.id);
        c.displayed = !c.displayed;
    };
    LiveComponent.prototype.findChannelFromId = function (channel_id) {
        return this.activeChannels.filter(function (x) { return x.id === channel_id; })[0];
    };
    LiveComponent.prototype.shouldDisplayClip = function (clipDisplay) {
        var channel = this.findChannelFromId(clipDisplay.clip.channel_id);
        if (channel !== undefined && channel !== null) {
            return channel.displayed;
        }
        return false;
    };
    LiveComponent.prototype.makeCorrection = function (clipDisplay) {
        clipDisplay.editing = true;
    };
    LiveComponent.prototype.saveCorrection = function (clipDisplay) {
        clipDisplay.editing = false;
        // this.showNotification = true;
        this.clipService.saveClip(clipDisplay.clip);
    };
    LiveComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    LiveComponent.prototype.closeNotification = function () {
        this.showNotification = false;
    };
    LiveComponent.prototype.playClip = function (clipDisplay) {
        var audio = new Audio();
        audio.src = clipDisplay.clip.path_to_file;
        audio.load();
        audio.play();
    };
    LiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-live",
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/components/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.css */ "./src/app/components/live/live.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"],
            src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_4__["ClipService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/components/training/training.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/training/training.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/training/training.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/training/training.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-1\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-md-12\"> \n        <div class=\"alert alert-success\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">×</button>\n          <h4 class=\"alert-heading\">Corrections saved</h4>\n          <p class=\"mb-0\">The corrections have been saved to the database.</p>\n        </div>\n      </div>-->\n    </div>\n  </div>\n</div>\n<div class=\"p-0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\"> Live Stream</div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-11 col-md-12\" style=\"max-height:70vh; overflow-y: scroll;\">\n                <div class=\"card bg-light\" style=\"margin-bottom:10px\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-1 d-none d-lg-block\">\n                        <img class=\"img\" style=\"width:100%\" src=\"https://dt.azadicdn.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png?200\"> </div>\n                      <div class=\"col-12 col-lg-11\"> Lorem ipsum dolor sit amet, malorum aliquid docendi mei ea, causae tacimates has ex. </div>\n                    </div>\n                  </div>\n                  <div class=\"card-footer\">\n                    <span class=\"fa fa-user\"></span>&nbsp;Speaker: James Bearss&nbsp;&nbsp;&nbsp;\n                    <span class=\"fa fa-time\">12:48 PM</span>\n                    <div class=\"pull-right\">\n                      <button class=\"btn btn-primary\"> Make Correction&nbsp;\n                        <span class=\"fa fa-edit\" style=\"\"></span>\n                      </button>\n                      <button class=\"btn btn-primary\">Play &nbsp;\n                        <span class=\"fa fa-play\"></span>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card bg-light\" style=\"margin-bottom: 10px;\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-1 d-none d-lg-block\">\n                        <img class=\"img\" style=\"width:100%\" src=\"https://dt.azadicdn.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png?200\"> </div>\n                      <div class=\"col-12 col-lg-11\"> Lorem ipsum dolor sit amet, malorum aliquid docendi mei ea, causae tacimates has ex. </div>\n                    </div>\n                  </div>\n                  <div class=\"card-footer\" contenteditable=\"true\">\n                    <span class=\"fa fa-user\"></span>&nbsp;Speaker: James Bearss&nbsp;&nbsp;&nbsp;\n                    <span class=\"fa fa-time\">12:48 PM</span>\n                    <div class=\"pull-right\">\n                      <button class=\"btn btn-primary\"> Make Correction&nbsp;\n                        <span class=\"fa fa-edit\" style=\"\"></span>\n                      </button>\n                      <button class=\"btn btn-primary\">Play &nbsp;\n                        <span class=\"fa fa-play\"></span>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-primary pull-right\" data-target=\"#addChannelModal\" data-toggle=\"modal\">\n              <span class=\"fa fa-microphone\"></span>&nbsp;Speak </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade \" id=\"addChannelModal\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Speak to AUDREY</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <span class=\"fa fa-microphone\" style=\"font-size:70px\"></span>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/training/training.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/training/training.component.ts ***!
  \***********************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingComponent = /** @class */ (function () {
    function TrainingComponent() {
    }
    TrainingComponent.prototype.ngOnInit = function () {
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/components/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/components/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/mock-channels.ts":
/*!**********************************!*\
  !*** ./src/app/mock-channels.ts ***!
  \**********************************/
/*! exports provided: CHANNELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNELS", function() { return CHANNELS; });
var CHANNELS = [
    {
        id: 1,
        name: 'Control',
        displayed: true,
        subSystem: 'Hyper',
        location: 'NPPF',
        program: 'EGS'
    },
    {
        id: 2,
        name: 'Ground',
        displayed: true,
        subSystem: 'Hyper',
        location: 'NPPF',
        program: 'EGS'
    },
    {
        id: 3,
        name: 'Crew',
        displayed: true,
        subSystem: 'Hyper',
        location: 'NPPF',
        program: 'EGS'
    },
    {
        id: 4,
        name: 'Flight',
        displayed: true,
        subSystem: 'Hyper',
        location: 'NPPF',
        program: 'EGS'
    }
];


/***/ }),

/***/ "./src/app/services/channel.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/channel.service.ts ***!
  \*********************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_channels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-channels */ "./src/app/mock-channels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelService = /** @class */ (function () {
    function ChannelService(http) {
        this.http = http;
        this.channelsUrl = 'api/channels';
    }
    // getChannels(search: string): Observable<Channel[]> {
    //   return this.http.get<Channel[]>(this.channelsUrl, { params: { 'name': search} });
    // }
    ChannelService.prototype.getChannels = function (search) {
        // TODO: send the message _after_ fetching the heroes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_channels__WEBPACK_IMPORTED_MODULE_1__["CHANNELS"]);
    };
    ChannelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ChannelService);
    return ChannelService;
}());



/***/ }),

/***/ "./src/app/services/clip.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/clip.service.ts ***!
  \******************************************/
/*! exports provided: ClipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipService", function() { return ClipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClipService = /** @class */ (function () {
    function ClipService(http) {
        this.http = http;
        this.clipsUrl = 'http://localhost:3000/api/clips';
        this.clipsSaveUrl = 'clipsSave';
    }
    ClipService.prototype.getClips = function (channel) {
        return this.http.get(this.clipsUrl, { params: { channel_id: channel.id.toString() } });
    };
    ClipService.prototype.saveClip = function (clip) {
        this.http.put(this.clipsSaveUrl, {
            params: {
                'clipId': clip.id,
                'text': clip.text
            }
        });
    };
    ClipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClipService);
    return ClipService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/G/scribe/UCF-Scribe/frontend/Scribe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map