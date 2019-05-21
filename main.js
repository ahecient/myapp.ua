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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  background: black;\n  padding: 10px 0px 10px 0px; }\n\napp-order, app-price, app-contact {\n  margin-top: 100px; }\n\napp-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: black;\n  color: #a12424;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcc2Nzc1xcX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJDR2dCO0VERmhCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGlCQ0FxQixFQUFBOztBREd6QjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQ1RnQjtFRFVoQixjQ2hCYztFRGlCZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyXCI7XHJcblxyXG5hcHAtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWxheW91dDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG5hcHAtb3JkZXIsIGFwcC1wcmljZSwgYXBwLWNvbnRhY3R7XHJcbiAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXRvcC1jb250ZW50O1xyXG59XHJcblxyXG5hcHAtZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWxheW91dCw7XHJcbiAgICBjb2xvcjogJGRlZXAtcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiIsIiRkZWVwLXJlZDogI2ExMjQyNDtcclxuJGRlZXAtcmVkLWJhY2tncm91bmQ6cmdiYSgxNjMsIDM2LCAzNiwgMC4yKTtcclxuJGxpZ2h0LWdyYXk6IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuJG1vcmUtbGlnaHQtZ3JheTpyZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiRkYXJrLWdyYXk6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuJHRleHQtYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcclxuJGNvbG9yLWxheW91dDogYmxhY2s7XHJcblxyXG4kbWFyZ2luLXRvcC1jb250ZW50OjEwMHB4OyJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"] },
    { path: 'price', component: _price_price_component__WEBPACK_IMPORTED_MODULE_11__["PriceComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_11__["PriceComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"wraper-contacts\" id=\"contacts\">\n  <h1 class = \"h1-contact\">Contacts</h1>\n\n  <div class = phones >\n    <p *ngFor = \"let item of phones\">{{item}}</p>\n  </div>\n  \n  <div class = adress>\n      <p *ngFor = \"let item of adress\">{{item}}</p>\n  </div>\n</div>\n\n\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10150.044270269302!2d30.793543449999998!3d50.506056949999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1552941287252\" width=\"1900\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 20px;\n  color: #a8a8a8;\n  text-align: center; }\n\nh1 {\n  font-size: 34px;\n  color: #a12424;\n  text-align: center; }\n\n.wraper-contacts {\n  margin-top: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L0M6XFxVc2Vyc1xcQW5hc3Rhc2lpYVxcbXlhcHAvc3JjXFxzY3NzXFxfZXh0ZW5kcy5zY3NzIiwic3JjL2FwcC9jb250YWN0L0M6XFxVc2Vyc1xcQW5hc3Rhc2lpYVxcbXlhcHAvc3JjXFxzY3NzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUNtQkksZUFBZTtFQUNmLGNDdkIyQjtFRHdCM0Isa0JBQWlCLEVBQUE7O0FEeEJyQjtFQzRCSSxlQUFjO0VBQ2QsY0MvQmM7RURnQ2Qsa0JBQWlCLEVBQUE7O0FEeEJyQjtFQUNJLGlCRURxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJ3Zhcic7XHJcbmgxe1xyXG4gICAgQGV4dGVuZCAlaDEtcmVkO1xyXG59XHJcbnB7XHJcbiAgICBAZXh0ZW5kICVwLWdyYXk7XHJcbn1cclxuLndyYXBlci1jb250YWN0c3tcclxuICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdG9wLWNvbnRlbnQ7XHJcbn0iLCJAaW1wb3J0IFwidmFyXCI7XHJcblxyXG5cclxuJWxpc3RfaG9yaXpvbnRhbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbiVncmlkXzM1MF8zNTAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMzUwcHg7XHJcbn1cclxuJWdyaWRfY2VudGVyX2NlbnRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJXAtZ3JheXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4laDEtcmVke1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogJGRlZXAtcmVkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuJWgxLXdoaXRle1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuJXRleHQtb24taW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNSlcclxufVxyXG5cclxuJWZvbnQtMTUtZGFya3tcclxuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIiRkZWVwLXJlZDogI2ExMjQyNDtcclxuJGRlZXAtcmVkLWJhY2tncm91bmQ6cmdiYSgxNjMsIDM2LCAzNiwgMC4yKTtcclxuJGxpZ2h0LWdyYXk6IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuJG1vcmUtbGlnaHQtZ3JheTpyZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiRkYXJrLWdyYXk6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuJHRleHQtYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcclxuJGNvbG9yLWxheW91dDogYmxhY2s7XHJcblxyXG4kbWFyZ2luLXRvcC1jb250ZW50OjEwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.phones = ["+380978911621", "+380978911621", "ahecientrain@gmail.com"];
        this.adress = ["Brovary", "Hrushevskogo 17"];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class = \"form-parameters\" ngNoForm>\n  <div class = \"filter-sex\">\n      <div class = \"parametrs-headers\">\n          <h2>Sex</h2>\n        </div>\n        <div class = \"parametrs\" *ngFor = \"let item of Sex; let i = index\" >\n          <input type = \"checkbox\" name = {{item}} [ngModel] = \"Sex[i]\" id = \"s{{i+1}}\" (click)=\"onCheckBoxClick(Sex[i])\">\n          <label for = \"s{{i+1}}\">{{item}}</label>\n        </div>\n  </div>\n  <div class = \"filter-type\">\n      <div class = \"parametrs-headers\">\n          <h2>Type</h2>\n        </div>\n        <div class = \"parametrs\" *ngFor = \"let item of Type; let i = index\">\n          <input type = \"checkbox\" name = \"type\" [ngModel] = \"Type[i]\" id = \"t{{i+1}}\" (click)=\"onCheckBoxClick(Type[i])\">\n          <label for = \"t{{i+1}}\">{{item}}</label>\n        </div>\n  </div>\n  <div class = \"filter-collection\">\n      <div class = \"parametrs-headers\">\n          <h2>Collection</h2>\n        </div>\n        <div class = \"parametrs\" *ngFor = \"let item of Collection; let i = index\">\n          <input type = \"checkbox\" name = \"collection\" [ngModel] = \"Collection[i]\" id = \"c{{i+1}}\" (click)=\"onCheckBoxClick(Collection[i])\">\n          <label for = \"c{{i+1}}\">{{item}}</label>\n        </div>\n  </div>\n\n</form>\n<app-gallery [arrayFromFilter]=\"MainFilter\"></app-gallery>"

/***/ }),

/***/ "./src/app/filter/filter.component.scss":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #747474;\n  font-size: 15px; }\n\n.parametrs-headers h2 {\n  color: #a12424;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL0M6XFxVc2Vyc1xcQW5hc3Rhc2lpYVxcbXlhcHAvc3JjXFxhcHBcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWx0ZXIvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXHNjc3NcXF9leHRlbmRzLnNjc3MiLCJzcmMvYXBwL2ZpbHRlci9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcc2Nzc1xcX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDOENJLGNDN0MwQjtFRDhDMUIsZUFBZSxFQUFBOztBRDNDbkI7RUFDSSxjRVJjO0VGU2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJcIjtcclxuQGltcG9ydCBcImV4dGVuZHNcIjtcclxuXHJcbmxhYmVse1xyXG4gICAgQGV4dGVuZCAlZm9udC0xNS1kYXJrO1xyXG59XHJcblxyXG4ucGFyYW1ldHJzLWhlYWRlcnMgaDJ7XHJcbiAgICBjb2xvcjogJGRlZXBfcmVkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwidmFyXCI7XHJcblxyXG5cclxuJWxpc3RfaG9yaXpvbnRhbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbiVncmlkXzM1MF8zNTAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMzUwcHg7XHJcbn1cclxuJWdyaWRfY2VudGVyX2NlbnRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJXAtZ3JheXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4laDEtcmVke1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogJGRlZXAtcmVkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuJWgxLXdoaXRle1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuJXRleHQtb24taW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNSlcclxufVxyXG5cclxuJWZvbnQtMTUtZGFya3tcclxuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIiRkZWVwLXJlZDogI2ExMjQyNDtcclxuJGRlZXAtcmVkLWJhY2tncm91bmQ6cmdiYSgxNjMsIDM2LCAzNiwgMC4yKTtcclxuJGxpZ2h0LWdyYXk6IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuJG1vcmUtbGlnaHQtZ3JheTpyZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiRkYXJrLWdyYXk6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuJHRleHQtYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcclxuJGNvbG9yLWxheW91dDogYmxhY2s7XHJcblxyXG4kbWFyZ2luLXRvcC1jb250ZW50OjEwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.Sex = ["Female", "Male", "Child"];
        this.Type = ["Theatre", "Artist"];
        this.Collection = ["Season 2017", "Season 2018", "Season 2019"];
        this.MainFilter = ["Female", "Male", "Child", "Theatre", "Artist", "Season 2017", "Season 2018", "Season 2019"];
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.onCheckBoxClick = function (filter) {
        if (this.MainFilter.indexOf(filter, 0) > -1) {
            this.MainFilter.splice(this.MainFilter.indexOf(filter, 0), 1);
        }
        else {
            this.MainFilter.push(filter);
        }
        console.log(this.MainFilter);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "MainFilter", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rights\">\n    <p>All rights reserved</p>\n</div>\n<div class=\"developer\">\n        <p>by Nahoha Anastasia</p>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.developer {\n  text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcQW5hc3Rhc2lpYVxcbXlhcHAvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIFxyXG59XHJcbi5kZXZlbG9wZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-template ngFor let-p [ngForOf] = \"photos\" let-i = \"index\">\n\n  <div *ngIf=\"arrayFromFilter.includes(p.collection) && arrayFromFilter.includes(p.sex) && arrayFromFilter.includes(p.type)\"class = \"box-{{i+1}}\">\n      <img src=\"{{p.img}}\"/>\n      <div class = \"text\">\n        {{p.about}}\n      </div>\n  </div>\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n[class^='box-'] {\n  position: relative; }\n\n.text {\n  height: 40%;\n  display: none;\n  color: white;\n  font-size: 20px;\n  text-align: center; }\n\n[class^='box-']:hover .text {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcYXBwXFxnYWxsZXJ5XFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L0M6XFxVc2Vyc1xcQW5hc3Rhc2lpYVxcbXlhcHAvc3JjXFxzY3NzXFxfZXh0ZW5kcy5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUNrQ0ksa0JBQWtCO0VBQ2xCLE9BQU07RUFDTixTQUFRO0VBQ1IsUUFBTztFQUNQLG9DQUFvQyxFQUFBOztBQ3RDeEM7RUZISSxrQkFBaUIsRUFBQTs7QUFHckI7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FFSXRCO0VGREksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJ3Zhcic7XHJcblxyXG5bY2xhc3NePSdib3gtJ117XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBAZXh0ZW5kICV0ZXh0LW9uLWltZztcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5bY2xhc3NePSdib3gtJ106aG92ZXIgLnRleHR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCJAaW1wb3J0IFwidmFyXCI7XHJcblxyXG5cclxuJWxpc3RfaG9yaXpvbnRhbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbiVncmlkXzM1MF8zNTAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMzUwcHg7XHJcbn1cclxuJWdyaWRfY2VudGVyX2NlbnRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJXAtZ3JheXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4laDEtcmVke1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogJGRlZXAtcmVkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuJWgxLXdoaXRle1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuJXRleHQtb24taW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNSlcclxufVxyXG5cclxuJWZvbnQtMTUtZGFya3tcclxuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuW2NsYXNzXj0nYm94LSddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi50ZXh0IHtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuW2NsYXNzXj0nYm94LSddOmhvdmVyIC50ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_photos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-photos */ "./src/app/mock-photos.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.arrayFromFilter = [];
        this.photos = _mock_photos__WEBPACK_IMPORTED_MODULE_2__["PHOTOS"];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryComponent.prototype, "arrayFromFilter", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class = \"logo\" src = \"assets/img/logo.png\"/>\n<ul class = \"navigation\">\n  <li *ngFor = \"let m of menu\"><a routerLink = {{m.href}} routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">{{m.name}}</a>\n  </li>\n</ul>\n<ul class = \"social-link\">\n  <li  *ngFor = \"let l of links\"><a href = {{l.href}}><img src = {{l.img}}/></a></li>\n</ul>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation, .social-link {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 15px; }\n  .navigation li, .social-link li {\n    display: inline-block; }\n  .navigation {\n  text-align: center; }\n  .navigation li {\n    padding-right: 40px; }\n  .navigation li a {\n      font-size: 25px;\n      color: #a8a8a8;\n      text-decoration: none; }\n  .navigation li a:hover {\n        color: #a12424; }\n  .navigation li .active {\n      color: #a12424; }\n  .social-link li {\n  padding-right: 15px; }\n  .logo {\n  margin-left: 15px;\n  margin-bottom: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQW5hc3Rhc2lpYVxcbXlhcHAvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXHNjc3NcXF9leHRlbmRzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcc2Nzc1xcX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VDQUksZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxlQUFjO0VBSWQsb0JBQW9CLEVBQUE7RUROeEI7SUNJUSxxQkFBcUIsRUFBQTtFREo3QjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBSVEsbUJBQWtCLEVBQUE7RUFKMUI7TUFNWSxlQUFlO01BQ2YsY0VUbUI7TUZVbkIscUJBQXFCLEVBQUE7RUFSakM7UUFVZ0IsY0VkRSxFQUFBO0VGSWxCO01BY1ksY0VsQk0sRUFBQTtFRnVCbEI7RUFHUSxtQkFBa0IsRUFBQTtFQUcxQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiZXh0ZW5kc1wiO1xyXG5AaW1wb3J0IFwidmFyXCI7XHJcblxyXG5cclxuLm5hdmlnYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAZXh0ZW5kICVsaXN0X2hvcml6b250YWw7XHJcbiAgICBsaXtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRlZXAtcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6ICRkZWVwLXJlZDtcclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLnNvY2lhbC1saW5re1xyXG4gICAgQGV4dGVuZCAlbGlzdF9ob3Jpem9udGFsO1xyXG4gICAgbGl7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn0iLCJAaW1wb3J0IFwidmFyXCI7XHJcblxyXG5cclxuJWxpc3RfaG9yaXpvbnRhbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbiVncmlkXzM1MF8zNTAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMzUwcHg7XHJcbn1cclxuJWdyaWRfY2VudGVyX2NlbnRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJXAtZ3JheXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4laDEtcmVke1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogJGRlZXAtcmVkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuJWgxLXdoaXRle1xyXG4gICAgZm9udC1zaXplOjM0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuJXRleHQtb24taW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNSlcclxufVxyXG5cclxuJWZvbnQtMTUtZGFya3tcclxuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIiRkZWVwLXJlZDogI2ExMjQyNDtcclxuJGRlZXAtcmVkLWJhY2tncm91bmQ6cmdiYSgxNjMsIDM2LCAzNiwgMC4yKTtcclxuJGxpZ2h0LWdyYXk6IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuJG1vcmUtbGlnaHQtZ3JheTpyZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiRkYXJrLWdyYXk6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuJHRleHQtYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcclxuJGNvbG9yLWxheW91dDogYmxhY2s7XHJcblxyXG4kbWFyZ2luLXRvcC1jb250ZW50OjEwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-links */ "./src/app/mock-links.ts");
/* harmony import */ var _mock_nav_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-nav-links */ "./src/app/mock-nav-links.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menu = _mock_nav_links__WEBPACK_IMPORTED_MODULE_3__["NAV"];
        this.links = _mock_links__WEBPACK_IMPORTED_MODULE_2__["LINKS"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  OOOPS, NOT TODAY ;(\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: white;\n  font-size: 40px;\n  text-align: center;\n  padding: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGVBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6NDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mock-links.ts":
/*!*******************************!*\
  !*** ./src/app/mock-links.ts ***!
  \*******************************/
/*! exports provided: LINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKS", function() { return LINKS; });
var LINKS = [
    { img: "assets/img/facebook.png", href: "https://www.facebook.com/" },
    { img: "assets/img/twitter.png", href: "https://www.twitter.com/" },
    { img: "assets/img/instagram.png", href: "https://www.instagram.com/" },
];


/***/ }),

/***/ "./src/app/mock-nav-links.ts":
/*!***********************************!*\
  !*** ./src/app/mock-nav-links.ts ***!
  \***********************************/
/*! exports provided: NAV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV", function() { return NAV; });
var NAV = [
    { name: "Home", href: "/home" },
    { name: "Our Work", href: "/filter" },
    { name: "Order", href: "/order" },
    { name: "Price", href: "/price" },
    { name: "Contact", href: "/contact" }
];


/***/ }),

/***/ "./src/app/mock-photos.ts":
/*!********************************!*\
  !*** ./src/app/mock-photos.ts ***!
  \********************************/
/*! exports provided: PHOTOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTOS", function() { return PHOTOS; });
var PHOTOS = [
    {
        img: "assets/img/content_male_1.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Artist",
        collection: "Season 2018"
    },
    {
        img: "assets/img/content_male_2.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Theatre",
        collection: "Season 2017"
    },
    {
        img: "assets/img/content_male_3.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Theatre",
        collection: "Season 2019"
    },
    {
        img: "assets/img/content_male_4.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Artist",
        collection: "Season 2017"
    },
    {
        img: "assets/img/content_male_5.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Theatre",
        collection: "Season 2017"
    },
    {
        img: "assets/img/content_male_6.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Artist",
        collection: "Season 2017"
    },
    {
        img: "assets/img/content_male_7.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Theatre",
        collection: "Season 2017"
    },
    {
        img: "assets/img/content_male_8.jpg",
        about: "some infotmationsome infotmationsome infotmationsome infotmationsome infotmation",
        sex: "Male",
        type: "Theatre",
        collection: "Season 2017"
    }
];


/***/ }),

/***/ "./src/app/mock-repair.ts":
/*!********************************!*\
  !*** ./src/app/mock-repair.ts ***!
  \********************************/
/*! exports provided: REPAIR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPAIR", function() { return REPAIR; });
var REPAIR = [
    { service: "Repair boots", price: 700 },
    { service: "Repair dress", price: 200 },
    { service: "Repair jacket", price: 500 },
    { service: "Repair skirt", price: 100 },
    { service: "Repair shorts", price: 100 },
    { service: "Repair coat", price: 700 },
    { service: "Repair parka", price: 700 },
];


/***/ }),

/***/ "./src/app/mock-sewing.ts":
/*!********************************!*\
  !*** ./src/app/mock-sewing.ts ***!
  \********************************/
/*! exports provided: SEWING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEWING", function() { return SEWING; });
var SEWING = [
    { service: "Thetral costume", price: 3000 },
    { service: "Artist costume", price: 2500 },
    { service: "Child costume", price: 2000 },
];


/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class = \"h1-order\">Order</h1>\n\n<p>Write to us to get a free consultation on making theater costumes, calculate the cost or make an order.</p>\n\n<form class = \"form-order\" #myForm = \"ngForm\" novalidate>\n  <input type = \"text\" name = \"name\" placeholder= \"Name..\" [(ngModel)] = \"name\" required>\n  <input type = \"text\" name = \"phone\" placeholder= \"Phone..\" [(ngModel)] = \"phone\" required>\n  <input type = \"text\" name = \"email\" placeholder= \"Email..\" [(ngModel)] = \"email\" required>\n  <textarea name = \"comment\" placeholder=\"Comment..\" [(ngModel)] = \"comment\" required></textarea>\n  <button [disabled]=\"myForm.invalid\" class = \"button\" (click)=\"submit(myForm)\">Sent</button>\n</form>"

/***/ }),

/***/ "./src/app/order/order.component.scss":
/*!********************************************!*\
  !*** ./src/app/order/order.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 20px;\n  color: #a8a8a8;\n  text-align: center; }\n\n.h1-order {\n  font-size: 34px;\n  color: #a12424;\n  text-align: center; }\n\n.form-order input, .form-order textarea {\n  color: #747474;\n  font-size: 15px; }\n\n.form-order {\n  text-align: center; }\n\n.form-order input, .form-order textarea {\n    width: 500px;\n    margin: 15px;\n    border: none;\n    padding: 15px;\n    font-size: 15px;\n    color: #747474; }\n\n.form-order .button {\n    background: #a12424;\n    width: 530px;\n    color: white;\n    border: none;\n    display: inline-block;\n    padding: 15px;\n    font-size: 15px;\n    margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXGFwcFxcb3JkZXJcXG9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlci9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcc2Nzc1xcX2V4dGVuZHMuc2NzcyIsInNyYy9hcHAvb3JkZXIvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXHNjc3NcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQ2tCSSxlQUFlO0VBQ2YsY0N2QjJCO0VEd0IzQixrQkFBaUIsRUFBQTs7QUR2QnJCO0VDMkJJLGVBQWM7RUFDZCxjQy9CYztFRGdDZCxrQkFBaUIsRUFBQTs7QUR2QnJCO0VDd0NJLGNDN0MwQjtFRDhDMUIsZUFBZSxFQUFBOztBRHpDbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNFYnNCLEVBQUE7O0FGSzlCO0lBWUksbUJFckJjO0lGc0JkLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFvQjtJQUNwQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyJztcclxuQGltcG9ydCAnZXh0ZW5kcyc7XHJcblxyXG4uaDEtb3JkZXJ7XHJcbiAgICBAZXh0ZW5kICVoMS1yZWQ7XHJcbn1cclxucHtcclxuICAgIEBleHRlbmQgJXAtZ3JheTtcclxufVxyXG4uZm9ybS1vcmRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlucHV0LCB0ZXh0YXJlYXtcclxuICAgICAgICB3aWR0aDo1MDBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICAgQGV4dGVuZCAlZm9udC0xNS1kYXJrO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICRkZWVwLXJlZDtcclxuICAgIHdpZHRoOiA1MzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCJ2YXJcIjtcclxuXHJcblxyXG4lbGlzdF9ob3Jpem9udGFsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxuJWdyaWRfMzUwXzM1MCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAzNTBweDtcclxufVxyXG4lZ3JpZF9jZW50ZXJfY2VudGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4lcC1ncmF5e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbiVoMS1yZWR7XHJcbiAgICBmb250LXNpemU6MzRweDtcclxuICAgIGNvbG9yOiAkZGVlcC1yZWQ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4laDEtd2hpdGV7XHJcbiAgICBmb250LXNpemU6MzRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ldGV4dC1vbi1pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC41KVxyXG59XHJcblxyXG4lZm9udC0xNS1kYXJre1xyXG4gICAgY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiJGRlZXAtcmVkOiAjYTEyNDI0O1xyXG4kZGVlcC1yZWQtYmFja2dyb3VuZDpyZ2JhKDE2MywgMzYsIDM2LCAwLjIpO1xyXG4kbGlnaHQtZ3JheTogcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4kbW9yZS1saWdodC1ncmF5OnJnYigyMzMsIDIzMywgMjMzKTtcclxuJGRhcmstZ3JheTogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG4kdGV4dC1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpO1xyXG4kY29sb3ItbGF5b3V0OiBibGFjaztcclxuXHJcbiRtYXJnaW4tdG9wLWNvbnRlbnQ6MTAwcHg7Il19 */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.submit = function (form) {
        console.log(form);
        form.resetForm();
    };
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/order/order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.html":
/*!********************************************!*\
  !*** ./src/app/price/price.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class =\"h1-price\">Price</h1>\n\n<div class = \"table-sewing\">\n    <h1>Sewing</h1>\n    <table class = \"sewing\">\n      <tr class = \"table-header\">\n        <th>SERVICE</th>\n        <th>PRICE</th>\n      </tr>\n      <tr class = \"main\" *ngFor = \"let s of sewing\">\n        <td>{{s.service}}</td>\n        <td>{{s.price}}</td>\n      </tr>\n    </table>\n</div>\n\n<div class = \"table-repair\">\n    <h1>Repair</h1>\n    <table class = \"repair\">\n        <tr class = \"table-header\">\n          <th>SERVICE</th>\n          <th>PRICE</th>\n        </tr>\n        <tr class = \"main\" *ngFor = \"let r of repair\">\n          <td>{{r.service}}</td>\n          <td>{{r.price}}</td>\n        </tr>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/price/price.component.scss":
/*!********************************************!*\
  !*** ./src/app/price/price.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 34px;\n  color: white;\n  text-align: center; }\n\nh1 {\n  margin: 0px;\n  padding: 20px;\n  background: black; }\n\ntable {\n  text-align: center;\n  background: white;\n  font-size: 20px;\n  color: black;\n  width: 700px; }\n\ntable .table-header th {\n    background: #a12424;\n    font-size: 20px;\n    color: white;\n    padding: 15px; }\n\ntable .main td {\n    font-size: 20px;\n    padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2UvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXGFwcFxccHJpY2VcXHByaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmljZS9DOlxcVXNlcnNcXEFuYXN0YXNpaWFcXG15YXBwL3NyY1xcc2Nzc1xcX2V4dGVuZHMuc2NzcyIsInNyYy9hcHAvcHJpY2UvQzpcXFVzZXJzXFxBbmFzdGFzaWlhXFxteWFwcC9zcmNcXHNjc3NcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ2dDSSxlQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFpQixFQUFBOztBRGxDckI7RUFFSSxXQUFVO0VBQ1YsYUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTGhCO0lBT1EsbUJFaEJVO0lGaUJWLGVBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYSxFQUFBOztBQVZyQjtJQWFRLGVBQWM7SUFDZCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmljZS9wcmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2V4dGVuZHMnO1xyXG5AaW1wb3J0ICd2YXInO1xyXG5cclxuaDF7XHJcbiAgICBAZXh0ZW5kICVoMS13aGl0ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgLnRhYmxlLWhlYWRlciB0aHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGVlcC1yZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubWFpbiB0ZHtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcInZhclwiO1xyXG5cclxuXHJcbiVsaXN0X2hvcml6b250YWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgbGl7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4lZ3JpZF8zNTBfMzUwIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDM1MHB4O1xyXG59XHJcbiVncmlkX2NlbnRlcl9jZW50ZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVwLWdyYXl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuJWgxLXJlZHtcclxuICAgIGZvbnQtc2l6ZTozNHB4O1xyXG4gICAgY29sb3I6ICRkZWVwLXJlZDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiVoMS13aGl0ZXtcclxuICAgIGZvbnQtc2l6ZTozNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbiV0ZXh0LW9uLWltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjUpXHJcbn1cclxuXHJcbiVmb250LTE1LWRhcmt7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIkZGVlcC1yZWQ6ICNhMTI0MjQ7XHJcbiRkZWVwLXJlZC1iYWNrZ3JvdW5kOnJnYmEoMTYzLCAzNiwgMzYsIDAuMik7XHJcbiRsaWdodC1ncmF5OiByZ2IoMTY4LCAxNjgsIDE2OCk7XHJcbiRtb3JlLWxpZ2h0LWdyYXk6cmdiKDIzMywgMjMzLCAyMzMpO1xyXG4kZGFyay1ncmF5OiByZ2IoMTE2LCAxMTYsIDExNik7XHJcbiR0ZXh0LWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNyk7XHJcbiRjb2xvci1sYXlvdXQ6IGJsYWNrO1xyXG5cclxuJG1hcmdpbi10b3AtY29udGVudDoxMDBweDsiXX0= */"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_sewing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-sewing */ "./src/app/mock-sewing.ts");
/* harmony import */ var _mock_repair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-repair */ "./src/app/mock-repair.ts");




var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
        this.sewing = _mock_sewing__WEBPACK_IMPORTED_MODULE_2__["SEWING"];
        this.repair = _mock_repair__WEBPACK_IMPORTED_MODULE_3__["REPAIR"];
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/price/price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Anastasiia\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map