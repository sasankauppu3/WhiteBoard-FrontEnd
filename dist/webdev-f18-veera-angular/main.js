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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _course_grid_component_course_grid_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-grid-component/course-grid-component.component */ "./src/app/course-grid-component/course-grid-component.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _course_grid_component_course_grid_component_component__WEBPACK_IMPORTED_MODULE_2__["CourseGridComponentComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: '**', component: _course_grid_component_course_grid_component_component__WEBPACK_IMPORTED_MODULE_2__["CourseGridComponentComponent"] }
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n<router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'webdev-f18-veera-angular';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _course_grid_component_course_grid_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-grid-component/course-grid-component.component */ "./src/app/course-grid-component/course-grid-component.component.ts");
/* harmony import */ var _module_list_component_module_list_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-list-component/module-list-component.component */ "./src/app/module-list-component/module-list-component.component.ts");
/* harmony import */ var _lesson_tabs_component_lesson_tabs_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lesson-tabs-component/lesson-tabs-component.component */ "./src/app/lesson-tabs-component/lesson-tabs-component.component.ts");
/* harmony import */ var _topic_pills_component_topic_pills_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic-pills-component/topic-pills-component.component */ "./src/app/topic-pills-component/topic-pills-component.component.ts");
/* harmony import */ var _widget_list_component_widget_list_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-list-component/widget-list-component.component */ "./src/app/widget-list-component/widget-list-component.component.ts");
/* harmony import */ var _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/CourseServiceClient */ "./src/app/services/CourseServiceClient.ts");
/* harmony import */ var _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/ModuleServiceClient */ "./src/app/services/ModuleServiceClient.ts");
/* harmony import */ var _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/LessonServiceClient */ "./src/app/services/LessonServiceClient.ts");
/* harmony import */ var _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/TopicServiceClient */ "./src/app/services/TopicServiceClient.ts");
/* harmony import */ var _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/WidgetServiceClient */ "./src/app/services/WidgetServiceClient.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _heading_widget_heading_widget_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./heading-widget/heading-widget.component */ "./src/app/heading-widget/heading-widget.component.ts");
/* harmony import */ var _image_widget_image_widget_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./image-widget/image-widget.component */ "./src/app/image-widget/image-widget.component.ts");
/* harmony import */ var _link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./link-widget/link-widget.component */ "./src/app/link-widget/link-widget.component.ts");
/* harmony import */ var _list_widget_list_widget_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-widget/list-widget.component */ "./src/app/list-widget/list-widget.component.ts");
/* harmony import */ var _paragraph_widget_paragraph_widget_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./paragraph-widget/paragraph-widget.component */ "./src/app/paragraph-widget/paragraph-widget.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _course_grid_component_course_grid_component_component__WEBPACK_IMPORTED_MODULE_4__["CourseGridComponentComponent"],
                _module_list_component_module_list_component_component__WEBPACK_IMPORTED_MODULE_5__["ModuleListComponentComponent"],
                _lesson_tabs_component_lesson_tabs_component_component__WEBPACK_IMPORTED_MODULE_6__["LessonTabsComponentComponent"],
                _topic_pills_component_topic_pills_component_component__WEBPACK_IMPORTED_MODULE_7__["TopicPillsComponentComponent"],
                _widget_list_component_widget_list_component_component__WEBPACK_IMPORTED_MODULE_8__["WidgetListComponentComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_14__["CourseViewerComponent"],
                _heading_widget_heading_widget_component__WEBPACK_IMPORTED_MODULE_15__["HeadingWidgetComponent"],
                _image_widget_image_widget_component__WEBPACK_IMPORTED_MODULE_16__["ImageWidgetComponent"],
                _link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_17__["LinkWidgetComponent"],
                _list_widget_list_widget_component__WEBPACK_IMPORTED_MODULE_18__["ListWidgetComponent"],
                _paragraph_widget_paragraph_widget_component__WEBPACK_IMPORTED_MODULE_19__["ParagraphWidgetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [
                _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_9__["CourseServiceClient"],
                _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_11__["LessonServiceClient"],
                _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_10__["ModuleServiceClient"],
                _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_12__["TopicServiceClient"],
                _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_13__["WidgetServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course-grid-component/course-grid-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/course-grid-component/course-grid-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1ncmlkLWNvbXBvbmVudC9jb3Vyc2UtZ3JpZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course-grid-component/course-grid-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/course-grid-component/course-grid-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-primary navbar-custom tg-bar\">\n    <a class=\"navbar-brand\" href=\"#\">WhiteBoard</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </nav>\n</div>\n\n\n<div class=\"container course-grid\">\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3 mb-3\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n      </div>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>\n        <a routerLink = '/course/{{course.id}}' class=\"btn btn-primary\">Browse Course</a>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let number of [0,1,2,3,4,6,7,8]\" class=\"col-sm-3 mb-3\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Sample Course</h5>\n      </div>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n        <a href=\"#\" class=\"btn btn-primary\">Browse Course</a>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid-component/course-grid-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/course-grid-component/course-grid-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: CourseGridComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponentComponent", function() { return CourseGridComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/CourseServiceClient */ "./src/app/services/CourseServiceClient.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponentComponent = /** @class */ (function () {
    function CourseGridComponentComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseGridComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses().then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid-component',
            template: __webpack_require__(/*! ./course-grid-component.component.html */ "./src/app/course-grid-component/course-grid-component.component.html"),
            styles: [__webpack_require__(/*! ./course-grid-component.component.css */ "./src/app/course-grid-component/course-grid-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseGridComponentComponent);
    return CourseGridComponentComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS12aWV3ZXIvY291cnNlLXZpZXdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-dark bg-dark fixed-top course-editor-navbar\" >\n  <div class=\"row w-100\">\n    <div class=\"col-3\">\n      <span class=\"col-2 mr-2\">\n        <a routerLink=\"/home\">\n        <i class=\"course-cross fa fa-times fa-2x action-icon\"></i>\n        </a>\n      </span>\n      <div class=\"navbar-brand text-white text-bold\">\n        {{course.title}}\n      </div>\n    </div>\n  </div>\n</nav>\n<app-module-list-component></app-module-list-component>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/CourseServiceClient */ "./src/app/services/CourseServiceClient.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId).then(function (res) { return _this.course = res; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/heading-widget/heading-widget.component.css":
/*!*************************************************************!*\
  !*** ./src/app/heading-widget/heading-widget.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRpbmctd2lkZ2V0L2hlYWRpbmctd2lkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/heading-widget/heading-widget.component.html":
/*!**************************************************************!*\
  !*** ./src/app/heading-widget/heading-widget.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"widget.size == 1 || !widget.size\">{{widget.text}}</h1>\n<h2 *ngIf=\"widget.size == 2\">{{widget.text}}</h2>\n<h3 *ngIf=\"widget.size == 3\">{{widget.text}}</h3>\n"

/***/ }),

/***/ "./src/app/heading-widget/heading-widget.component.ts":
/*!************************************************************!*\
  !*** ./src/app/heading-widget/heading-widget.component.ts ***!
  \************************************************************/
/*! exports provided: HeadingWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingWidgetComponent", function() { return HeadingWidgetComponent; });
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

var HeadingWidgetComponent = /** @class */ (function () {
    function HeadingWidgetComponent() {
    }
    HeadingWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeadingWidgetComponent.prototype, "widget", void 0);
    HeadingWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heading-widget',
            template: __webpack_require__(/*! ./heading-widget.component.html */ "./src/app/heading-widget/heading-widget.component.html"),
            styles: [__webpack_require__(/*! ./heading-widget.component.css */ "./src/app/heading-widget/heading-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadingWidgetComponent);
    return HeadingWidgetComponent;
}());



/***/ }),

/***/ "./src/app/image-widget/image-widget.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-widget/image-widget.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXdpZGdldC9pbWFnZS13aWRnZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/image-widget/image-widget.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-widget/image-widget.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src={{widget.src}}/>\n"

/***/ }),

/***/ "./src/app/image-widget/image-widget.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-widget/image-widget.component.ts ***!
  \********************************************************/
/*! exports provided: ImageWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWidgetComponent", function() { return ImageWidgetComponent; });
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

var ImageWidgetComponent = /** @class */ (function () {
    function ImageWidgetComponent() {
    }
    ImageWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageWidgetComponent.prototype, "widget", void 0);
    ImageWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-widget',
            template: __webpack_require__(/*! ./image-widget.component.html */ "./src/app/image-widget/image-widget.component.html"),
            styles: [__webpack_require__(/*! ./image-widget.component.css */ "./src/app/image-widget/image-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageWidgetComponent);
    return ImageWidgetComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs-component/lesson-tabs-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/lesson-tabs-component/lesson-tabs-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlc3Nvbi10YWJzLWNvbXBvbmVudC9sZXNzb24tdGFicy1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lesson-tabs-component/lesson-tabs-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/lesson-tabs-component/lesson-tabs-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-2\">\n  <ul class=\"nav nav-pills col-md-9\">\n    <li routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\" class=\"nav-link nav-item topic-cell col-md-2 m-1\" [ngClass]=\"{'active':lesson.id==lessonId}\"  *ngFor=\"let lesson of lessons\" >\n    <input class=\"topic-titles\" disabled value={{lesson.title}}/>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/lesson-tabs-component/lesson-tabs-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/lesson-tabs-component/lesson-tabs-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: LessonTabsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponentComponent", function() { return LessonTabsComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/LessonServiceClient */ "./src/app/services/LessonServiceClient.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponentComponent = /** @class */ (function () {
    function LessonTabsComponentComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponentComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLesson(params['moduleId']);
    };
    LessonTabsComponentComponent.prototype.loadLesson = function (moduleId) {
        var _this = this;
        this.service.findLessonsForModule(moduleId).then(function (res) { return _this.lessons = res; });
    };
    LessonTabsComponentComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs-component',
            template: __webpack_require__(/*! ./lesson-tabs-component.component.html */ "./src/app/lesson-tabs-component/lesson-tabs-component.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs-component.component.css */ "./src/app/lesson-tabs-component/lesson-tabs-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LessonTabsComponentComponent);
    return LessonTabsComponentComponent;
}());



/***/ }),

/***/ "./src/app/link-widget/link-widget.component.css":
/*!*******************************************************!*\
  !*** ./src/app/link-widget/link-widget.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmstd2lkZ2V0L2xpbmstd2lkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/link-widget/link-widget.component.html":
/*!********************************************************!*\
  !*** ./src/app/link-widget/link-widget.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href={{widget.href}}>{{widget.title}}</a>\n"

/***/ }),

/***/ "./src/app/link-widget/link-widget.component.ts":
/*!******************************************************!*\
  !*** ./src/app/link-widget/link-widget.component.ts ***!
  \******************************************************/
/*! exports provided: LinkWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWidgetComponent", function() { return LinkWidgetComponent; });
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

var LinkWidgetComponent = /** @class */ (function () {
    function LinkWidgetComponent() {
    }
    LinkWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinkWidgetComponent.prototype, "widget", void 0);
    LinkWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-link-widget',
            template: __webpack_require__(/*! ./link-widget.component.html */ "./src/app/link-widget/link-widget.component.html"),
            styles: [__webpack_require__(/*! ./link-widget.component.css */ "./src/app/link-widget/link-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkWidgetComponent);
    return LinkWidgetComponent;
}());



/***/ }),

/***/ "./src/app/list-widget/list-widget.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-widget/list-widget.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtd2lkZ2V0L2xpc3Qtd2lkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list-widget/list-widget.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-widget/list-widget.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget.orderedFlag\"><ol><li *ngFor=\"let item of htmlList\">{{item}}</li></ol></div>\n<div *ngIf=\"!widget.orderedFlag\"><ul><li *ngFor=\"let item of htmlList\">{{item}}</li></ul></div>\n"

/***/ }),

/***/ "./src/app/list-widget/list-widget.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-widget/list-widget.component.ts ***!
  \******************************************************/
/*! exports provided: ListWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWidgetComponent", function() { return ListWidgetComponent; });
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

var ListWidgetComponent = /** @class */ (function () {
    function ListWidgetComponent() {
    }
    ListWidgetComponent.prototype.ngOnInit = function () {
        var list = this.widget.items ? this.widget.items.split(',') : [];
        this.htmlList = list;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListWidgetComponent.prototype, "widget", void 0);
    ListWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-widget',
            template: __webpack_require__(/*! ./list-widget.component.html */ "./src/app/list-widget/list-widget.component.html"),
            styles: [__webpack_require__(/*! ./list-widget.component.css */ "./src/app/list-widget/list-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListWidgetComponent);
    return ListWidgetComponent;
}());



/***/ }),

/***/ "./src/app/module-list-component/module-list-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/module-list-component/module-list-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1saXN0LWNvbXBvbmVudC9tb2R1bGUtbGlzdC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/module-list-component/module-list-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/module-list-component/module-list-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row course-editor-body\">\n  <div class=\"col-2\">\n    <ul class=\"list-group mt-2\">\n      <li class=\"list-group-item module-cell-header\">\n        <h5>Modules</h5>\n      </li>\n      <li routerLink=\"/course/{{courseId}}/module/{{module.id}}\" class=\"list-group-item module-cell\" [ngClass]=\"{'active':module.id==moduleId}\" *ngFor=\"let module of modules\">\n\n        <a >{{module.title}}</a>\n\n      </li>\n\n    </ul>\n  </div>\n  <div class=\"col-10 module-body\">\n    <app-lesson-tabs-component></app-lesson-tabs-component>\n    <app-topic-pills-component></app-topic-pills-component>\n    <app-widget-list-component></app-widget-list-component>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list-component/module-list-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module-list-component/module-list-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModuleListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponentComponent", function() { return ModuleListComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ModuleServiceClient */ "./src/app/services/ModuleServiceClient.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponentComponent = /** @class */ (function () {
    function ModuleListComponentComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponentComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadCourse(params['courseId']);
    };
    ModuleListComponentComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findModulesForCourse(courseId).then(function (res) { return _this.modules = res; });
    };
    ModuleListComponentComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list-component',
            template: __webpack_require__(/*! ./module-list-component.component.html */ "./src/app/module-list-component/module-list-component.component.html"),
            styles: [__webpack_require__(/*! ./module-list-component.component.css */ "./src/app/module-list-component/module-list-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponentComponent);
    return ModuleListComponentComponent;
}());



/***/ }),

/***/ "./src/app/paragraph-widget/paragraph-widget.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/paragraph-widget/paragraph-widget.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFncmFwaC13aWRnZXQvcGFyYWdyYXBoLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/paragraph-widget/paragraph-widget.component.html":
/*!******************************************************************!*\
  !*** ./src/app/paragraph-widget/paragraph-widget.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{widget.text}}</p>\n"

/***/ }),

/***/ "./src/app/paragraph-widget/paragraph-widget.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/paragraph-widget/paragraph-widget.component.ts ***!
  \****************************************************************/
/*! exports provided: ParagraphWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidgetComponent", function() { return ParagraphWidgetComponent; });
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

var ParagraphWidgetComponent = /** @class */ (function () {
    function ParagraphWidgetComponent() {
    }
    ParagraphWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParagraphWidgetComponent.prototype, "widget", void 0);
    ParagraphWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paragraph-widget',
            template: __webpack_require__(/*! ./paragraph-widget.component.html */ "./src/app/paragraph-widget/paragraph-widget.component.html"),
            styles: [__webpack_require__(/*! ./paragraph-widget.component.css */ "./src/app/paragraph-widget/paragraph-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParagraphWidgetComponent);
    return ParagraphWidgetComponent;
}());



/***/ }),

/***/ "./src/app/services/CourseServiceClient.ts":
/*!*************************************************!*\
  !*** ./src/app/services/CourseServiceClient.ts ***!
  \*************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.java_conn = 'http://localhost:8080';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.java_conn + '/api/course', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.java_conn + '/api/course/' + courseId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    CourseServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CourseServiceClient);
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/LessonServiceClient.ts":
/*!*************************************************!*\
  !*** ./src/app/services/LessonServiceClient.ts ***!
  \*************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
        this.java_conn = 'http://localhost:8080';
    }
    LessonServiceClient.prototype.findAllLessons = function () {
        return fetch(this.java_conn + '/api/lesson/', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    LessonServiceClient.prototype.findLessonsForModule = function (moduleId) {
        return fetch(this.java_conn + '/api/module/' + moduleId + '/lesson', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    LessonServiceClient.prototype.findLessonById = function (lessonId) {
        return fetch(this.java_conn + '/api/lesson/' + lessonId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    LessonServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LessonServiceClient);
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/ModuleServiceClient.ts":
/*!*************************************************!*\
  !*** ./src/app/services/ModuleServiceClient.ts ***!
  \*************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.java_conn = 'http://localhost:8080';
    }
    ModuleServiceClient.prototype.findAllModules = function () {
        return fetch(this.java_conn + '/api/module', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.java_conn + '/api/course/' + courseId + '/module', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    ModuleServiceClient.prototype.findModuleById = function (moduleId) {
        return fetch(this.java_conn + '/api/module/' + moduleId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    ModuleServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ModuleServiceClient);
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/TopicServiceClient.ts":
/*!************************************************!*\
  !*** ./src/app/services/TopicServiceClient.ts ***!
  \************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
        this.java_conn = 'http://localhost:8080';
    }
    TopicServiceClient.prototype.findAllTopics = function () {
        return fetch(this.java_conn + '/api/topic', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    TopicServiceClient.prototype.findTopicsForLesson = function (lessonId) {
        return fetch(this.java_conn + '/api/lesson/' + lessonId + '/topic', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    TopicServiceClient.prototype.findTopicById = function (topicId) {
        return fetch(this.java_conn + '/api/topic/' + topicId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    TopicServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TopicServiceClient);
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/WidgetServiceClient.ts":
/*!*************************************************!*\
  !*** ./src/app/services/WidgetServiceClient.ts ***!
  \*************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        this.java_conn = 'http://localhost:8080';
    }
    WidgetServiceClient.prototype.findAllWidgets = function () {
        return fetch(this.java_conn + '/api/widget', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    WidgetServiceClient.prototype.findWidgetsForTopic = function (topicId) {
        return fetch(this.java_conn + '/api/topic/' + topicId + '/widget', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    WidgetServiceClient.prototype.findWidgetById = function (widgetId) {
        return fetch(this.java_conn + '/api/widget/' + widgetId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) { return res.json(); });
    };
    WidgetServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WidgetServiceClient);
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-pills-component/topic-pills-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/topic-pills-component/topic-pills-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljLXBpbGxzLWNvbXBvbmVudC90b3BpYy1waWxscy1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topic-pills-component/topic-pills-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/topic-pills-component/topic-pills-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-2\">\n  <ul class=\"nav nav-pills col-md-9\">\n    <li routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\" class=\"nav-link nav-item topic-cell col-md-2 m-1\" [ngClass]=\"{'active':topic.id==topicId}\"  *ngFor=\"let topic of topics\" >\n      <input class=\"topic-titles\" disabled value={{topic.title}}/>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/topic-pills-component/topic-pills-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/topic-pills-component/topic-pills-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: TopicPillsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponentComponent", function() { return TopicPillsComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TopicServiceClient */ "./src/app/services/TopicServiceClient.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicPillsComponentComponent = /** @class */ (function () {
    function TopicPillsComponentComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponentComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.loadTopic(params['lessonId']);
    };
    TopicPillsComponentComponent.prototype.loadTopic = function (lessonId) {
        var _this = this;
        this.service.findTopicsForLesson(lessonId).then(function (res) { return _this.topics = res; });
    };
    TopicPillsComponentComponent.prototype.ngOnInit = function () {
    };
    TopicPillsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-pills-component',
            template: __webpack_require__(/*! ./topic-pills-component.component.html */ "./src/app/topic-pills-component/topic-pills-component.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills-component.component.css */ "./src/app/topic-pills-component/topic-pills-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicPillsComponentComponent);
    return TopicPillsComponentComponent;
}());



/***/ }),

/***/ "./src/app/widget-list-component/widget-list-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/widget-list-component/widget-list-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1saXN0LWNvbXBvbmVudC93aWRnZXQtbGlzdC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/widget-list-component/widget-list-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/widget-list-component/widget-list-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgets.length>0\" class=\"card\">\n  <div *ngIf=\"widgets.length>0\" class=\"card-body\">\n  <br/>\n  <ul class=\"widget-list\">\n    <li class=\"p-2\" *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.type\">\n      <app-heading-widget *ngSwitchCase=\"'HEADING'\" [widget] = \"widget\"></app-heading-widget>\n      <app-paragraph-widget *ngSwitchCase=\"'PARAGRAPH'\" [widget] = \"widget\"></app-paragraph-widget>\n      <app-link-widget *ngSwitchCase=\"'LINK'\" [widget] = \"widget\"></app-link-widget>\n      <app-list-widget *ngSwitchCase=\"'LIST'\" [widget] = \"widget\"></app-list-widget>\n      <app-image-widget *ngSwitchCase=\"'IMAGE'\" [widget] = \"widget\"></app-image-widget>\n    </li>\n  </ul>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list-component/widget-list-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget-list-component/widget-list-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: WidgetListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponentComponent", function() { return WidgetListComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/WidgetServiceClient */ "./src/app/services/WidgetServiceClient.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponentComponent = /** @class */ (function () {
    function WidgetListComponentComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    WidgetListComponentComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.widgetId = params['widgetId'];
        this.loadWidget(params['topicId']);
    };
    WidgetListComponentComponent.prototype.loadWidget = function (topicId) {
        var _this = this;
        this.service.findWidgetsForTopic(topicId).then(function (res) { return _this.widgets = res; })
            .then(function (res) { return _this.widgets = _this.widgets.sort(function (w1, w2) { return (w1.listind < w2.listind) ? -1 : (w1.listind > w2.listind) ? 1 : 0; }); });
    };
    WidgetListComponentComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list-component',
            template: __webpack_require__(/*! ./widget-list-component.component.html */ "./src/app/widget-list-component/widget-list-component.component.html"),
            styles: [__webpack_require__(/*! ./widget-list-component.component.css */ "./src/app/widget-list-component/widget-list-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponentComponent);
    return WidgetListComponentComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sasankauppu/Documents/GitHub/webdev-f18-veera-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map