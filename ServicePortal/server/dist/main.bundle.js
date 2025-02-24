webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var loginp_component_1 = __webpack_require__("../../../../../src/app/loginp/loginp.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var inventory_component_1 = __webpack_require__("../../../../../src/app/inventory/inventory.component.ts");
var bandwidth_on_demand_component_1 = __webpack_require__("../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.ts");
var service_schema_component_1 = __webpack_require__("../../../../../src/app/service-schema/service-schema.component.ts");
var circuit_ordering_component_1 = __webpack_require__("../../../../../src/app/circuit-ordering/circuit-ordering.component.ts");
var bandwidthcalender_component_1 = __webpack_require__("../../../../../src/app/bandwidthcalender/bandwidthcalender.component.ts");
var service_termination_component_1 = __webpack_require__("../../../../../src/app/service-termination/service-termination.component.ts");
var manage_profile_component_1 = __webpack_require__("../../../../../src/app/manage-profile/manage-profile.component.ts");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent,
        children: [
            { path: '', component: loginp_component_1.LoginpComponent },
            { path: 'register', component: register_component_1.RegisterComponent }
        ] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'manage-profile', component: manage_profile_component_1.ManageProfileComponent },
            { path: 'inventory', component: inventory_component_1.InventoryComponent },
            { path: 'bandwidth-on-demand', component: bandwidth_on_demand_component_1.BandwidthOnDemandComponent },
            { path: 'bandwidth-calender', component: bandwidthcalender_component_1.BandwidthcalenderComponent },
            { path: 'serviceTermination', component: service_termination_component_1.ServiceTerminationComponent },
            { path: 'circuit-ordering', component: circuit_ordering_component_1.CircuitOrderingComponent },
            { path: 'schema/:id/:id2', component: service_schema_component_1.ServiceSchemaComponent },
            { path: 'schemalink/:id/:id2/:id3/:id4', component: service_schema_component_1.ServiceSchemaComponent }
        ]
    },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var angular_datatables_1 = __webpack_require__("../../../../angular-datatables/index.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var loginp_component_1 = __webpack_require__("../../../../../src/app/loginp/loginp.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var validate_service_1 = __webpack_require__("../../../../../src/app/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var header_component_1 = __webpack_require__("../../../../../src/app/header/header.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var inventory_component_1 = __webpack_require__("../../../../../src/app/inventory/inventory.component.ts");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var specialchar_pipe_1 = __webpack_require__("../../../../../src/app/specialchar.pipe.ts");
var tab_data_component_1 = __webpack_require__("../../../../../src/app/tab-data/tab-data.component.ts");
var service_schema_component_1 = __webpack_require__("../../../../../src/app/service-schema/service-schema.component.ts");
var ng2_accordion_1 = __webpack_require__("../../../../ng2-accordion/index.js");
var parentchild_component_1 = __webpack_require__("../../../../../src/app/parentchild/parentchild.component.ts");
var bandwidth_on_demand_component_1 = __webpack_require__("../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.ts");
var sub_parent_child_component_1 = __webpack_require__("../../../../../src/app/sub-parent-child/sub-parent-child.component.ts");
var divfields_component_1 = __webpack_require__("../../../../../src/app/divfields/divfields.component.ts");
var modalpopup_component_1 = __webpack_require__("../../../../../src/app/modalpopup/modalpopup.component.ts");
var bod_tab_data_component_1 = __webpack_require__("../../../../../src/app/bod-tab-data/bod-tab-data.component.ts");
var circuit_ordering_component_1 = __webpack_require__("../../../../../src/app/circuit-ordering/circuit-ordering.component.ts");
var safe_pipe_1 = __webpack_require__("../../../../safe-pipe/index.js");
var bandwidthcalender_component_1 = __webpack_require__("../../../../../src/app/bandwidthcalender/bandwidthcalender.component.ts");
var ng_pick_datetime_1 = __webpack_require__("../../../../ng-pick-datetime/picker.js");
var bc_tab_data_component_1 = __webpack_require__("../../../../../src/app/bandwidthcalendering/bc-tab-data.component.ts");
var service_termination_component_1 = __webpack_require__("../../../../../src/app/service-termination/service-termination.component.ts");
var service_termination_tab_component_1 = __webpack_require__("../../../../../src/app/service-termination-tab/service-termination-tab.component.ts");
var manage_profile_component_1 = __webpack_require__("../../../../../src/app/manage-profile/manage-profile.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                loginp_component_1.LoginpComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                dashboard_component_1.DashboardComponent,
                inventory_component_1.InventoryComponent,
                specialchar_pipe_1.SpecialcharPipe,
                tab_data_component_1.TabDataComponent,
                service_schema_component_1.ServiceSchemaComponent,
                parentchild_component_1.ParentchildComponent,
                bandwidth_on_demand_component_1.BandwidthOnDemandComponent,
                sub_parent_child_component_1.SubParentChildComponent,
                divfields_component_1.DivfieldsComponent,
                modalpopup_component_1.ModalpopupComponent,
                bod_tab_data_component_1.BodTabDataComponent,
                circuit_ordering_component_1.CircuitOrderingComponent,
                bandwidthcalender_component_1.BandwidthcalenderComponent,
                bc_tab_data_component_1.BcTabDataComponent,
                service_termination_component_1.ServiceTerminationComponent,
                service_termination_tab_component_1.ServiceTerminationTabComponent,
                manage_profile_component_1.ManageProfileComponent
            ],
            imports: [
                safe_pipe_1.SafePipeModule, ng_pick_datetime_1.OwlDateTimeModule,
                ng_pick_datetime_1.OwlNativeDateTimeModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng2_bootstrap_modal_1.BootstrapModalModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                angular_datatables_1.DataTablesModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBNh5nWHiGuP44dgvJZBFfW9nZYiTLw1HI',
                    libraries: ["places"]
                }),
                ng2_accordion_1.AccordionModule,
                ngx_smart_modal_1.NgxSmartModalModule.forRoot(),
                ng2_bootstrap_modal_1.BootstrapModalModule.forRoot({ container: document.body })
            ],
            providers: [validate_service_1.ValidateService, auth_service_1.AuthService, nso_service_1.NsoService, ngx_smart_modal_1.NgxSmartModalService],
            entryComponents: [
                modalpopup_component_1.ModalpopupComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.profileDataUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/profileData', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.profileUpdateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/profileUpdate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.bandwidthCalendaring = function (bandCal) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/bandwidthCalendaring', bandCal, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.html":
/***/ (function(module, exports) {

<<<<<<< .mine
module.exports = "<div class=\"container\">\n\t<h1>BandwidthOnDemand (BOD)</h1>\n\t<div class=\"row\">\n        <div class=\" tabData\">\n            \n            <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myTabs\">\n                <li  *ngFor=\"let uLists of uList; let index = index\"\n                class=\"{{(index == 0)? 'active' : ''}}\" >\n                    <a  \n                        href=\"#{{uLists | specialchar}}\" \n                        attr.aria-controls=\"{{uLists | specialchar}}\" \n                        role=\"tab\"  \n                        data-toggle=\"tab\">{{uLists}}</a>\n                </li>\n               \n                \n              </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\" >\n             <div *ngFor=\"let uLists1 of uList; let index1 = index\" \n                class=\"tab-pane {{(index1 == 0)? 'active' : ''}}\" \n                id=\"{{uLists1 | specialchar}}\" \n                role=\"tabpanel\" attr.aria-labelledby=\"{{uLists1 | specialchar}}\">\n                   <div class=\"wrapper\"> \n                    <app-bod-tab-data [bTabData]=\"uLists1\">\n                     \n                   </app-bod-tab-data></div>  \n                </div>\n \n           \n          </div>\n        </div>\n\t\t\n    </div>\n</div>\n <ngx-smart-modal #classicModal1 [identifier]=\"'classicModal1'\">\n <h1>Bandwidth Tab</h1>\n  \n  <div *ngIf=\"classicModal1.hasData()\">\n   \n  </div>\n  <div id=\"divID\">\n  Bandwidth:<input type='text' placeholder=\"Bandwidth\" id=\"Btxt\">\n</div>\n  <button class=\"button -dark\" (click)=\"openPrice();classicModal1.close()\">Update</button>\n</ngx-smart-modal>\n<ngx-smart-modal #priceModal [identifier]=\"'priceModal'\">\n <h1>{{ title }}</h1>\n  \n  <div *ngIf=\"priceModal.hasData()\">\n   \n  </div>\n   Previous Price:<br>\n   Updated Price :<br>\n \n   <input type=\"checkbox\" name=\"terms\" value=\"terms\" id=\"checkbox\" (click)=\"changeEvent($event)\">Accept Terms & Conditions<br>\n  <button class=\"button -dark\" [disabled]='toggleButton'  (click)=\"priceModal.close();resetAll($event)\">Ok</button>\n</ngx-smart-modal>\n "
||||||| .r107
module.exports = "<div class=\"container\">\n\t<h1>BandwidthOnDemand (BOD)</h1>\n\t<div class=\"row\">\n        <div class=\" tabData\">\n            \n            <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myTabs\">\n                <li  *ngFor=\"let uLists of uList; let index = index\"\n                class=\"{{(index == 0)? 'active' : ''}}\" >\n                    <a  \n                        href=\"#{{uLists | specialchar}}\" \n                        attr.aria-controls=\"{{uLists | specialchar}}\" \n                        role=\"tab\"  \n                        data-toggle=\"tab\">{{uLists}}</a>\n                </li>\n               \n                \n              </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\" >\n             <div *ngFor=\"let uLists1 of uList; let index1 = index\" \n                class=\"tab-pane {{(index1 == 0)? 'active' : ''}}\" \n                id=\"{{uLists1 | specialchar}}\" \n                role=\"tabpanel\" attr.aria-labelledby=\"{{uLists1 | specialchar}}\">\n                   <div class=\"wrapper\"> \n                    <app-bod-tab-data [bTabData]=\"uLists1\">\n                     \n                   </app-bod-tab-data></div>  \n                </div>\n \n           \n          </div>\n        </div>\n\t\t\n    </div>\n</div>\n "
=======
module.exports = "<div class=\"container\">\n\t<h1>BandwidthOnDemand (BOD)</h1>\n\t<div class=\"row\">\n    <div class=\" tabData\">\n\n      <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myTabs\">\n        <li  *ngFor=\"let uLists of uList; let index = index\"\n        class=\"{{(index == 0)? 'active' : ''}}\" >\n        <a  \n        href=\"#{{uLists | specialchar}}\" \n        attr.aria-controls=\"{{uLists | specialchar}}\" \n        role=\"tab\"  \n        data-toggle=\"tab\">{{uLists}}</a>\n      </li>\n\n\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\" >\n     <div *ngFor=\"let uLists1 of uList; let index1 = index\" \n     class=\"tab-pane {{(index1 == 0)? 'active' : ''}}\" \n     id=\"{{uLists1 | specialchar}}\" \n     role=\"tabpanel\" attr.aria-labelledby=\"{{uLists1 | specialchar}}\">\n     <div class=\"wrapper\"> \n      <app-bod-tab-data [bTabData]=\"uLists1\">\n\n      </app-bod-tab-data></div>  \n    </div>\n\n\n  </div>\n</div>\n\n</div>\n</div>\n<ngx-smart-modal #classicModal1 [identifier]=\"'classicModal1'\">\n\n  <h1 >BandWidth Tab</h1>\n  <!--  // <h1 [innerHTML]=\"classicModal1.getData()\"></h1> -->\n\n  <div *ngIf=\"classicModal1.hasData()\">\n    {{classicModal1.getData().ckt_id}}\n    {{classicModal1.getData().serviceName}}\n    {{classicModal1.getData().bandwidth}}\n  </div>\n  <div id=\"divID\">\n    Bandwidth:<input  type='text' placeholder=\"Bandwidth\" id=\"Btxt\" name=\"txt\" [(ngModel)] = \"values\" (keypress)=\"eventHandler($event)\">\n  </div>\n  <button class=\"button -dark\" id=\"btn_id\" [disabled]='btnDisabled'(click)=\"openPrice(classicModal1.getData());classicModal1.close()\">Update</button>\n</ngx-smart-modal>\n<ngx-smart-modal #priceModal [identifier]=\"'priceModal'\">\n <h1>{{ title }}</h1>\n\n <div *ngIf=\"priceModal.hasData()\">\n\n </div>\n Previous Price:<br>\n Updated Price :<br>\n \n <input type=\"checkbox\" name=\"terms\" value=\"terms\" id=\"checkbox\" (click)=\"changeEvent($event)\">Accept Terms & Conditions<br>\n <button class=\"button -dark\" [disabled]='toggleButton'  (click)=\"resetAll($event);UpdateBandwidth(priceModal.getData());priceModal.close();clr($event); refreshFunc()\">Ok</button>\n</ngx-smart-modal>\n<ngx-smart-modal [customClass]=\"'CssAmit'\"   #l3VPNModal  [identifier]=\"'l3VPNModal'\" [customClass]=\"'large-modal'\">\n  <p><br><br></p>\n  <div *ngIf=\"l3VPNModal.hasData()\">\n <table datatable class=\"row-border hover\" id=\"vpnLink\">\n <thead>\n       <tr class=\"rowHeader\">\n         <th *ngFor=\"let hLists2 of l3VPNModal.getData().hList1\">{{hLists2}}</th>\n    \n       </tr>\n     </thead>\n     <tbody *ngIf=\"l3VPNModal.getData().uList1\">\n      <tr *ngFor=\"let uLists2 of l3VPNModal.getData().uList1\">\n        \n     <td><a [routerLink]=\"['/dashboard/schemalink', l3VPNModal.getData().bTabData, l3VPNModal.getData().vpnId, uLists2[0], 'link']\">{{uLists2[0]}}</a>\n     </td>\n     <td>{{uLists2[1]}}</td>\n     <td>{{uLists2[2]}}</td>\n     <td>{{uLists2[3]}}</td>\n          <td>\n            <a (click)=\"l3vpnshow(uLists2[0],uLists2[3],l3VPNModal.getData().bTabData);l3VPNModal.close()\">Update</a>\n                     </td>\n      </tr>\n     </tbody>\n  </table>\n             </div>\n</ngx-smart-modal>"
>>>>>>> .r177

/***/ }),

/***/ "../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabData {\n  background: #ececec;\n  padding: 0px;\n  max-width: 1106px;\n  margin: 0 auto;\n  -webkit-border-top-left-radius: 4px;\n  -webkit-border-top-right-radius: 4px;\n  -moz-border-radius-topleft: 4px;\n  -moz-border-radius-topright: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #dedddd; }\n\n.nav-tabs {\n  border-bottom: 0px; }\n\n.nav > li > a {\n  color: #6b6969;\n  font-size: 15px;\n  border: none;\n  padding: 9px 30px;\n  font-weight: bold; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  background-color: #757779;\n  border: none;\n  -webkit-box-shadow: 3px 1px 2px #ccc;\n          box-shadow: 3px 1px 2px #ccc;\n  color: #fff;\n  border-bottom: 5px solid #188ed4 !important; }\n\n.nav > li > a:focus, .nav > li > a:hover {\n  background-color: #fcfdfd;\n  border-bottom: 5px solid #188ed4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
var BandwidthOnDemandComponent = /** @class */ (function () {
    function BandwidthOnDemandComponent(router, nsoService, http, dialogService, ngxSmartModalService) {
        var _this = this;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
<<<<<<< .mine
        this.toggleButton = true;
||||||| .r107
=======
        this.toggleButton = true;
        this.btnDisabled = true;
>>>>>>> .r177
        this.nsoService.nsoServices().subscribe(function (data) {
            console.log(data);
            if (data.result) {
                _this.uList = Object.keys(data.result.service_points);
            }
            else {
                _this.router.navigate(['']);
            }
        });
    }
    BandwidthOnDemandComponent.prototype.ngOnInit = function () {
    };
<<<<<<< .mine
    BandwidthOnDemandComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            console.log('hello' + event.target.checked);
            this.toggleButton = !this.toggleButton;
        }
        else {
            this.toggleButton = true;
        }
    };
    BandwidthOnDemandComponent.prototype.resetAll = function (event) {
        $("#checkbox").prop("checked", false);
        //  $('#Btxt').val("New value");
        this.toggleButton = true;
    };
    BandwidthOnDemandComponent.prototype.openPrice = function (val) {
        this.title = "Price Tab";
        this.ngxSmartModalService.getModal('priceModal').open();
    };
||||||| .r107
=======
    BandwidthOnDemandComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            console.log('hello' + event.target.checked);
            this.toggleButton = !this.toggleButton;
        }
        else {
            this.toggleButton = true;
        }
    };
    BandwidthOnDemandComponent.prototype.resetAll = function (event) {
        this.btnDisabled = true;
        this.values = "";
        $("#checkbox").prop("checked", false);
        //  $('#Btxt').val("New value");
        this.toggleButton = true;
    };
    BandwidthOnDemandComponent.prototype.clr = function (event) {
        $('#Btxt').val('');
        //document.getElementsByName('elementid').value = "";
    };
    BandwidthOnDemandComponent.prototype.openPrice = function (val) {
        this.btnDisabled = false;
        this.title = "Price Tab";
        var num1 = (document.getElementById("Btxt").value);
        console.log("txtValue" + num1);
        val['value'] = num1;
        this.ngxSmartModalService.setModalData(val, 'priceModal');
        this.ngxSmartModalService.getModal('priceModal').open();
    };
    BandwidthOnDemandComponent.prototype.eventHandler = function (e) {
        this.btnDisabled = false;
    };
    BandwidthOnDemandComponent.prototype.refreshFunc = function () {
        location.reload();
    };
    BandwidthOnDemandComponent.prototype.UpdateBandwidth = function (val) {
        var path = "" + val.serviceName + "{" + val.ckt_id + "}/ml2:bandwidth";
        var URL = {
            'URL': (path),
            'Value': val.value
        };
        this.nsoService.nsoServicesSchemaSetValue(URL).subscribe(function (data) {
            console.log("set value==========================");
            console.log(data);
            console.log("set value==========================");
        });
    };
    BandwidthOnDemandComponent.prototype.l3vpnshow = function (cktId_Val, bndWidth_Val, serviceName) {
        console.log("cktId_Val" + cktId_Val);
        console.log("Value_bandwidth" + bndWidth_Val);
        console.log("Value of btadate" + serviceName);
        var data = {
            'ckt_id': cktId_Val,
            'serviceName': serviceName,
            'bandwidth': bndWidth_Val
        };
        this.ngxSmartModalService.setModalData(data, 'classicModal1');
        this.ngxSmartModalService.getModal('classicModal1').open();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BandwidthOnDemandComponent.prototype, "bTabData", void 0);
>>>>>>> .r177
    BandwidthOnDemandComponent = __decorate([
        core_1.Component({
            selector: 'app-bandwidth-on-demand',
            template: __webpack_require__("../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, nso_service_1.NsoService, http_1.Http, ng2_bootstrap_modal_1.DialogService,
            ngx_smart_modal_1.NgxSmartModalService])
    ], BandwidthOnDemandComponent);
    return BandwidthOnDemandComponent;
}());
exports.BandwidthOnDemandComponent = BandwidthOnDemandComponent;


/***/ }),

/***/ "../../../../../src/app/bandwidthcalender/bandwidthcalender.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Bandwidth Calendaring</h1>\n\t<div class=\"row\">\n\n    <div class=\" tabData\">\n\n\n\n      <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myTabs\">\n        <li  *ngFor=\"let uLists of uList; let index = index\"\n        class=\"{{(index == 0)? 'active' : ''}}\" >\n        <a  \n        href=\"#{{uLists | specialchar}}\" \n        attr.aria-controls=\"{{uLists | specialchar}}\" \n        role=\"tab\"  \n        data-toggle=\"tab\">{{uLists}}</a>\n      </li>\n\n\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\" >\n     <div *ngFor=\"let uLists1 of uList; let index1 = index\" \n     class=\"tab-pane {{(index1 == 0)? 'active' : ''}}\" \n     id=\"{{uLists1 | specialchar}}\" \n     role=\"tabpanel\" attr.aria-labelledby=\"{{uLists1 | specialchar}}\">\n     <div class=\"wrapper\"> \n      <app-bc-tab-data [bTabData]=\"uLists1\">\n\n      </app-bc-tab-data></div>  \n    </div>\n\n\n  </div>\n</div>\n\n</div>\n</div>\n<ngx-smart-modal #classicModal2 [identifier]=\"'classicModal2'\">\n\n  <h1 >BandWidth Tab</h1>\n  <!--  // <h1 [innerHTML]=\"classicModal1.getData()\"></h1> -->\n\n  <div *ngIf=\"classicModal2.hasData()\">\n    {{classicModal2.getData().ckt_id}}\n    {{classicModal2.getData().serviceName}}\n    {{classicModal2.getData().bandwidth}}\n  </div>\n  <div id=\"divID\">\n    Bandwidth:<input  type='text' placeholder=\"Bandwidth\" id=\"Btxt\" name=\"txt\" [(ngModel)] = \"values\" (keypress)=\"eventHandler($event)\">\n  </div>\n  <div class=\"container\">\n  <h1>Set bandwidth date and time</h1>\n  <div class=\"row\">\n     <form>\n    <div class=\"dateTime col-md-12\">\n      <div class=\"dateTimeCss\">\n        <label>Set Start Date & Time</label>\n        <div> \n          <input [owlDateTime]=\"dt1\" id=\"st_ed_date\" style=\"width: 100%;\" [owlDateTimeTrigger]=\"dt1\" placeholder=\"Date Time\" [selectMode]=\"'range'\">\n          \n          <owl-date-time [pickerMode]=\"'dialog'\" #dt1></owl-date-time></div>\n      </div>\n   \n    </div>\n     </form>\n  </div>\n\n\n</div>\n  <button class=\"button -dark\" id=\"btn_id\" [disabled]='btnDisabled'(click)=\"openBandwidthCalenderPrice(classicModal2.getData());classicModal2.close()\">Update</button>\n</ngx-smart-modal>\n<ngx-smart-modal #priceModal [identifier]=\"'priceModal'\">\n <h1>{{ title }}</h1>\n\n <div *ngIf=\"priceModal.hasData()\">\n\n </div>\n Previous Price:<br>\n Updated Price :<br>\n \n <input type=\"checkbox\" name=\"terms\" value=\"terms\" id=\"checkbox\" (click)=\"changeEvent($event)\">Accept Terms & Conditions<br>\n <button class=\"button -dark\" [disabled]='toggleButton'  (click)=\"resetAll($event);UpdateBandwidthCalender(priceModal.getData());priceModal.close();clr($event); \">Ok</button><!-- refreshFunc() -->\n</ngx-smart-modal>\n<ngx-smart-modal [customClass]=\"'CssAmit'\"   #l3VPNBCModal  [identifier]=\"'l3VPNBCModal'\" [customClass]=\"'large-modal'\">\n  <p><br><br></p>\n  <div *ngIf=\"l3VPNBCModal.hasData()\">\n <table datatable class=\"row-border hover\" id=\"vpnLink\">\n <thead>\n       <tr class=\"rowHeader\">\n         <th *ngFor=\"let hLists2 of l3VPNBCModal.getData().hList1\">{{hLists2}}</th>\n    \n       </tr>\n     </thead>\n     <tbody *ngIf=\"l3VPNBCModal.getData().uList1\">\n      <tr *ngFor=\"let uLists2 of l3VPNBCModal.getData().uList1\">\n        \n     <td><a [routerLink]=\"['/dashboard/schemalink', l3VPNBCModal.getData().bTabData, l3VPNBCModal.getData().vpnId, uLists2[0], 'link']\">{{uLists2[0]}}</a>\n     </td>\n     <td>{{uLists2[1]}}</td>\n     <td>{{uLists2[2]}}</td>\n     <td>{{uLists2[3]}}</td>\n          <td>\n            <a (click)=\"l3vpnBandwidthCalenderShow(uLists2[0],uLists2[3],l3VPNBCModal.getData().bTabData);l3VPNBCModal.close()\">Update</a>\n                     </td>\n      </tr>\n     </tbody>\n  </table>\n             </div>\n</ngx-smart-modal>\n<ngx-smart-modal #classicModal3 [identifier]=\"'classicModal3'\">\n\n  <h1 >BandWidth Tab</h1>\n  <!--  // <h1 [innerHTML]=\"classicModal1.getData()\"></h1> -->\n\n  <div *ngIf=\"classicModal3.hasData()\">\n    {{classicModal3.getData().ckt_id}}\n    {{classicModal3.getData().serviceName}}\n    {{classicModal3.getData().bandwidth}}\n  </div>\n  <div id=\"divID\">\n    Bandwidth:<input  type='text' placeholder=\"Bandwidth\" id=\"l3VPNBtxt\" name=\"l3VPNBtxt\" [(ngModel)] = \"values\" (keypress)=\"eventHandler($event)\">\n  </div>\n  <div class=\"container\">\n  <h1>Set bandwidth date and time</h1>\n  <div class=\"row\">\n     <form>\n    <div class=\"dateTime col-md-12\">\n      <div class=\"dateTimeCss\">\n        <label>Set Start Date & Time</label>\n        <div> \n          <input [owlDateTime]=\"dt2\" id=\"l3vpn_st_ed_date\" style=\"width: 100%;\" [owlDateTimeTrigger]=\"dt2\" placeholder=\"Date Time\" [selectMode]=\"'range'\">\n          \n          <owl-date-time [pickerMode]=\"'dialog'\" #dt2></owl-date-time></div>\n      </div>\n   \n    </div>\n     </form>\n  </div>\n\n\n</div>\n  <button class=\"button -dark\" id=\"btn_id\" [disabled]='btnDisabled'(click)=\"openBandwidthCalenderL3VPNPrice(classicModal3.getData());classicModal3.close()\">Update</button>\n</ngx-smart-modal>\n<ngx-smart-modal #l3vpnpriceModal [identifier]=\"'l3vpnpriceModal'\">\n <h1>{{ title }}</h1>\n\n <div *ngIf=\"l3vpnpriceModal.hasData()\">\n\n </div>\n Previous Price:<br>\n Updated Price :<br>\n \n <input type=\"checkbox\" name=\"terms\" value=\"terms\" id=\"checkbox\" (click)=\"changeEvent($event)\">Accept Terms & Conditions<br>\n <button class=\"button -dark\" [disabled]='toggleButton'  (click)=\"resetAll($event);UpdateBandwidthl3vpnCalender(l3vpnpriceModal.getData());l3vpnpriceModal.close();clr($event); \">Ok</button><!-- refreshFunc() -->\n</ngx-smart-modal>"

/***/ }),

/***/ "../../../../../src/app/bandwidthcalender/bandwidthcalender.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dateTime .dateTimeCss {\n  clear: both;\n  margin-bottom: 10px;\n  width: 100%; }\n  .dateTime .dateTimeCss label {\n    float: left;\n    width: 150px; }\n  .dateTime .dateTimeCss div {\n    float: left;\n    width: 250px; }\n  .tabData {\n  background: #ececec;\n  padding: 0px;\n  max-width: 1106px;\n  margin: 0 auto;\n  -webkit-border-top-left-radius: 4px;\n  -webkit-border-top-right-radius: 4px;\n  -moz-border-radius-topleft: 4px;\n  -moz-border-radius-topright: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #dedddd; }\n  .nav-tabs {\n  border-bottom: 0px; }\n  .nav > li > a {\n  color: #6b6969;\n  font-size: 15px;\n  border: none;\n  padding: 9px 30px;\n  font-weight: bold; }\n  .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  background-color: #757779;\n  border: none;\n  -webkit-box-shadow: 3px 1px 2px #ccc;\n          box-shadow: 3px 1px 2px #ccc;\n  color: #fff;\n  border-bottom: 5px solid #188ed4 !important; }\n  .nav > li > a:focus, .nav > li > a:hover {\n  background-color: #fcfdfd;\n  border-bottom: 5px solid #188ed4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bandwidthcalender/bandwidthcalender.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
var BandwidthcalenderComponent = /** @class */ (function () {
    function BandwidthcalenderComponent(router, nsoService, http, dialogService, ngxSmartModalService, authService) {
        var _this = this;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.authService = authService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
        this.toggleButton = true;
        this.btnDisabled = true;
        this.nsoService.nsoServices().subscribe(function (data) {
            console.log(data);
            if (data.result) {
                _this.uList = Object.keys(data.result.service_points);
            }
            else {
                _this.router.navigate(['']);
            }
        });
    }
    BandwidthcalenderComponent.prototype.ngOnInit = function () {
    };
    BandwidthcalenderComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            console.log('hello' + event.target.checked);
            this.toggleButton = !this.toggleButton;
        }
        else {
            this.toggleButton = true;
        }
    };
    BandwidthcalenderComponent.prototype.resetAll = function (event) {
        this.btnDisabled = true;
        this.values = "";
        $("#checkbox").prop("checked", false);
        //  $('#Btxt').val("New value");
        this.toggleButton = true;
    };
    BandwidthcalenderComponent.prototype.clr = function (event) {
        $('#Btxt').val('');
        //document.getElementsByName('elementid').value = "";
    };
    BandwidthcalenderComponent.prototype.openBandwidthCalenderPrice = function (val) {
        this.btnDisabled = false;
        this.title = "Price Tab";
        var num1 = (document.getElementById("Btxt").value);
        console.log("txtValue" + num1);
        val['new_bandwidth'] = num1;
        var st_ed_date = (document.getElementById("st_ed_date").value);
        console.log("txtValue" + st_ed_date);
        var data = st_ed_date.split("~");
        console.log(data[0].split(",")[0]);
        console.log(data[0].split(",")[1]);
        console.log(data[1]);
        console.log(data[1].split(",")[0]);
        console.log(data[1].split(",")[1]);
        val['schedule_date'] = st_ed_date;
        this.ngxSmartModalService.setModalData(val, 'priceModal');
        this.ngxSmartModalService.getModal('priceModal').open();
    };
    BandwidthcalenderComponent.prototype.eventHandler = function (e) {
        this.btnDisabled = false;
    };
    BandwidthcalenderComponent.prototype.refreshFunc = function () {
        location.reload();
    };
    BandwidthcalenderComponent.prototype.UpdateBandwidthCalender = function (val) {
        console.log(val);
        var loginUser = localStorage.getItem("loginUser");
        var bandCal = {
            "servicename": val.serviceName,
            "serviceid": val.ckt_id,
            "oldbw": val.old_bandwidth,
            "newbw": val.new_bandwidth,
            "start_datetime": val.schedule_date.split("~")[0].replace(",", ""),
            "end_datetime": val.schedule_date.split("~")[1].replace(",", ""),
            "created_by": loginUser
        };
        console.log(bandCal);
        this.authService.bandwidthCalendaring(bandCal).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                //this.router.navigate(['/login']);
            }
            else {
                // this.router.navigate(['']);
            }
        });
    };
    BandwidthcalenderComponent.prototype.l3vpnBandwidthCalenderShow = function (cktId_Val, bndWidth_Val, serviceName) {
        console.log("cktId_Val" + cktId_Val);
        console.log("Value_bandwidth" + bndWidth_Val);
        console.log("Value of btadate" + serviceName);
        var data = {
            'ckt_id': cktId_Val,
            'serviceName': serviceName,
            'old_bandwidth': bndWidth_Val
        };
        console.log(data);
        this.ngxSmartModalService.setModalData(data, 'classicModal2');
        this.ngxSmartModalService.getModal('classicModal2').open();
    };
    BandwidthcalenderComponent.prototype.openBandwidthCalenderL3VPNPrice = function (val) {
        this.btnDisabled = false;
        this.title = "Price Tab";
        var num1 = (document.getElementById("l3VPNBtxt").value);
        console.log("txtValue" + num1);
        val['new_bandwidth'] = num1;
        var st_ed_date = (document.getElementById("l3vpn_st_ed_date").value);
        console.log("txtValue" + st_ed_date);
        var data = st_ed_date.split("~");
        console.log(data[0].split(",")[0]);
        console.log(data[0].split(",")[1]);
        console.log(data[1]);
        console.log(data[1].split(",")[0]);
        console.log(data[1].split(",")[1]);
        val['schedule_date'] = st_ed_date;
        this.ngxSmartModalService.setModalData(val, 'l3vpnpriceModal');
        this.ngxSmartModalService.getModal('l3vpnpriceModal').open();
    };
    BandwidthcalenderComponent.prototype.UpdateBandwidthl3vpnCalender = function (val) {
        console.log(val);
        var loginUser = localStorage.getItem("loginUser");
        var bandCal = {
            "servicename": val.serviceName,
            "serviceid": val.ckt_id,
            "oldbw": val.old_bandwidth,
            "newbw": val.new_bandwidth,
            "start_datetime": val.schedule_date.split("~")[0].replace(",", ""),
            "end_datetime": val.schedule_date.split("~")[1].replace(",", ""),
            "created_by": loginUser
        };
        console.log(bandCal);
        this.authService.bandwidthCalendaring(bandCal).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                //this.router.navigate(['/login']);
            }
            else {
                // this.router.navigate(['']);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BandwidthcalenderComponent.prototype, "bTabData", void 0);
    BandwidthcalenderComponent = __decorate([
        core_1.Component({
            selector: 'app-bandwidthcalender',
            template: __webpack_require__("../../../../../src/app/bandwidthcalender/bandwidthcalender.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bandwidthcalender/bandwidthcalender.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, nso_service_1.NsoService, http_1.Http, ng2_bootstrap_modal_1.DialogService,
            ngx_smart_modal_1.NgxSmartModalService, auth_service_1.AuthService])
    ], BandwidthcalenderComponent);
    return BandwidthcalenderComponent;
}());
exports.BandwidthcalenderComponent = BandwidthcalenderComponent;


/***/ }),

/***/ "../../../../../src/app/bandwidthcalendering/bc-tab-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\t<div class=\"row\">\n\n\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"rowHeader\">\n\t\t\t\t\t<th *ngFor=\"let hLists of hList\">{{hLists}}</th>\n\n\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<ng-container *ngIf=\"bTabData=='/ml2:mpls-l2vpn'; else l3vpn\">\n\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr *ngFor=\"let uLists of uList\">\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a><br>\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>{{uLists[1]}}</td>\n\n\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-info\" (click)=\"updateBandwidthConfirm(uLists[0],uLists[1],bTabData)\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span> Update\n\t\t\t\t\t\t</button></td>\n\n\n\n\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\n\n\n\t\t\t</ng-container>\n\t\t\t<ng-template #l3vpn>\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr *ngFor=\"let uLists of uList\">\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a><br>\n\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-plus\" (click)=\"showLink(uLists[0],bTabData)\"></a>\t\n\t\t\t\t\t\t\t\n\n\n\n\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>{{uLists[1]}}</td>\n\n\n\n\n\n\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</ng-template>\n\n\n\n\n\n\n\n\n\t\t</table>\t\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bandwidthcalendering/bc-tab-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.dataTable.no-footer {\n  border-bottom: 1px solid #c5c3c3; }\n\n.dataTables_wrapper .dataTables_filter {\n  width: 266px; }\n\n.dataTables_wrapper .dataTables_filter input {\n  width: 196px;\n  padding: 3px 5px; }\n\n.wrapper {\n  margin: 0 auto;\n  background: #fcfcfd;\n  padding: 20px 34px; }\n\ntable {\n  border: 1px solid #c5c3c3;\n  border-radius: 4px; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  border-bottom: 0px;\n  padding: 7px 18px; }\n\n.rowHeader {\n  border-radius: 4px;\n  background: #d2d6d6;\n  border: 1px solid gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bandwidthcalendering/bc-tab-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var bandwidthcalender_component_1 = __webpack_require__("../../../../../src/app/bandwidthcalender/bandwidthcalender.component.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var BcTabDataComponent = /** @class */ (function () {
    function BcTabDataComponent(sanitized, router, nsoService, http, dialogService, elementRef, ngxSmartModalService, authService) {
        this.sanitized = sanitized;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.elementRef = elementRef;
        this.ngxSmartModalService = ngxSmartModalService;
        this.authService = authService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
        this.dtOptions1 = {};
        this.dtTrigger1 = new Subject_1.Subject();
        this.list2 = [];
        this.type = "link";
    }
    BcTabDataComponent.prototype.ngAfterViewInit = function () {
    };
    BcTabDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = ['ckt-id', 'bandwidth', 'Update_bandwidth'];
        if (this.bTabData.indexOf("link") != -1) {
            console.log("this.bTabData.indexOf('link')" + this.bTabData);
            list = ['vpn-id', 'mesh-rd-value'];
        }
        this.hList = list;
        console.log('+++++++++++++++');
        console.log(this.hList);
        var User = {
            'serviceName': this.bTabData,
            "selection": list
        };
        this.nsoService.nsoData(User).subscribe(function (data) {
            console.log("======================================================");
            console.log(data);
            if (data.result) {
                _this.uList = data.result.results;
            }
            else {
                _this.router.navigate(['']);
            }
        });
        //////////////////
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        console.log(this.uList);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data', User, { headers: headers })
            .map(this.extractData)
            .subscribe(function (data) {
            //this.uList = data;
            console.log("dataaaaaaaa" + data);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger.next();
        });
    };
    BcTabDataComponent.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    BcTabDataComponent.prototype.extractData1 = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    BcTabDataComponent.prototype.slideTable = function (_path, _Val) {
        console.log(_Val);
        console.log(_path);
    };
    BcTabDataComponent.prototype.updateBandwidthConfirm = function (cktId_Val, bndWidth_Val, serviceName) {
        console.log("cktId_Val" + cktId_Val);
        console.log("Value_bandwidth" + bndWidth_Val);
        this.title1 = "jjj";
        console.log("Value of btadate" + this.bTabData);
        serviceName = this.bTabData;
        this.messagehtml = "Bandwidth Tab";
        var band_title = 'Bandwidth Tab';
        console.log('//////////////////////////////');
        //console.log(this.ngxSmartModalService.resetModalData('classicModal1'));
        /*if(this.ngxSmartModalService.resetModalData('classicModal1')==null)
        {*/
        var objs = new bandwidthcalender_component_1.BandwidthcalenderComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService, this.authService);
        var data = {
            'ckt_id': cktId_Val,
            'serviceName': serviceName,
            'old_bandwidth': bndWidth_Val
        };
        objs.ngxSmartModalService.setModalData(data, 'classicModal2');
        objs.ngxSmartModalService.getModal('classicModal2').open();
    };
    /*else{

    alert('data updating');
    }*/
    BcTabDataComponent.prototype.showLink = function (vpnId, path) {
        var _this = this;
        var dataAll = {};
        var objs = new bandwidthcalender_component_1.BandwidthcalenderComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService, this.authService);
        objs.list2 = ['ckt-id', 'admin-state', 'customer-address', 'qos/bandwidth', 'Update_Bandwidth'];
        this.hList1 = this.list2;
        var json = {
            context: path.replace("/link", ""),
            xpath: "link[starts-with(vpn-id,'" + vpnId + "')]",
            selection: objs.list2
        };
        this.check = vpnId;
        this.nsoService.nsoDataquery(json).subscribe(function (data) {
            console.log(data);
            if (data.result) {
                objs.uList1 = data.result.results;
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': objs.uList1,
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('l3VPNBCModal').onOpen.subscribe(function (event) {
                    console.log(event['data']);
                    //event['data']=dataAll;
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNBCModal');
                    }
                    console.log(event['data']);
                });
                objs.ngxSmartModalService.getModal('l3VPNBCModal').open();
            }
            else {
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': {},
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('l3VPNBCModal').onOpen.subscribe(function (event) {
                    console.log(event['data']);
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNBCModal');
                    }
                });
                //objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNModal');
                objs.ngxSmartModalService.getModal('l3VPNBCModal').open();
            }
        });
        objs.ngxSmartModalService.getModal('l3VPNBCModal').onClose.subscribe(function (event) {
            console.log(event['data']);
            event['data'].uList1 = [];
            console.log(event['data']);
            console.log(dataAll);
            dataAll = {};
            console.log(dataAll);
        });
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        console.log(objs.uList1);
        this.dtOptions1 = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data/query', json, { headers: headers })
            .map(this.extractData1)
            .subscribe(function (data) {
            //this.uList = data;
            console.log("dataaaaaaaa" + data);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger1.next();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BcTabDataComponent.prototype, "bTabData", void 0);
    __decorate([
        core_1.ViewChild('dataContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], BcTabDataComponent.prototype, "d1", void 0);
    BcTabDataComponent = __decorate([
        core_1.Component({
            selector: 'app-bc-tab-data',
            template: __webpack_require__("../../../../../src/app/bandwidthcalendering/bc-tab-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bandwidthcalendering/bc-tab-data.component.scss")]
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, router_1.Router, nso_service_1.NsoService, http_1.Http, ng2_bootstrap_modal_1.DialogService,
            core_1.ElementRef, ngx_smart_modal_1.NgxSmartModalService, auth_service_1.AuthService])
    ], BcTabDataComponent);
    return BcTabDataComponent;
}());
exports.BcTabDataComponent = BcTabDataComponent;


/***/ }),

/***/ "../../../../../src/app/bod-tab-data/bod-tab-data.component.html":
/***/ (function(module, exports) {

<<<<<<< .mine
module.exports = "<div class=\"wrapper\">\n \n <div class=\"row\">\n \t\n\t\t <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t<thead>\n\t\t      <tr class=\"rowHeader\">\n\t\t        <th *ngFor=\"let hLists of hList\">{{hLists}}</th>\n\t\t        <th>Update_bandwidth</th>\n\n\t\t      </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t     <tr *ngFor=\"let uLists of uList\">\n\t\t     \t \n\t\t\t\t<td><a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a>\n\t\t\t\t</td>\n\t\t\t\t<td>{{uLists[1]}}</td>\n\t\t\t\t<td><button type=\"button\" class=\"btn btn-info\" (click)=\"showConfirm(uLists[0])\">\n      <span class=\"glyphicon glyphicon-edit\"></span> Update\n    </button></td>\n\t\t     </tr>\n\t\t    </tbody>\n\t\t </table>\n\t\t   \n </div>\n</div>\n"
||||||| .r107
module.exports = "<div class=\"wrapper\">\n \n <div class=\"row\">\n \t\n\t\t <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t<thead>\n\t\t      <tr class=\"rowHeader\">\n\t\t        <th *ngFor=\"let hLists of hList\">{{hLists}}</th>\n\t\t        <th>Update_bandwidth</th>\n\n\t\t      </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t     <tr *ngFor=\"let uLists of uList\">\n\t\t     \t \n\t\t\t\t<td><a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a>\n\t\t\t\t</td>\n\t\t\t\t<td>{{uLists[1]}}</td>\n\t\t\t\t<td><button type=\"button\" class=\"btn btn-info\" (click)=\"showConfirm()\">\n      <span class=\"glyphicon glyphicon-edit\"></span> Update\n    </button></td>\n\t\t     </tr>\n\t\t    </tbody>\n\t\t </table>\n\t\t   \n </div>\n</div>\n<ngx-smart-modal #classicModal [identifier]=\"'classicModal'\">\n <h1>{{ title }}</h1>\n  \n  <div *ngIf=\"classicModal.hasData()\">\n   \n  </div>\n  Bandwidth:<input type='text' placeholder=\"Bandwidth\">\n  <button class=\"button -dark\" (click)=\"openPrice(); classicModal.close()\">Update</button>\n</ngx-smart-modal>\n<ngx-smart-modal #priceModal [identifier]=\"'priceModal'\">\n <h1>{{ title }}</h1>\n  \n  <div *ngIf=\"priceModal.hasData()\">\n   \n  </div>\n   Previous Price:<br>\n   Updated Price :<br>\n \n   <input type=\"checkbox\" name=\"terms\" value=\"terms\" (click)=\"changeEvent($event)\">Accept Terms & Conditions<br>\n  <button class=\"button -dark\" [disabled]='toggleButton'  (click)=\"priceModal.close();resetAll($event)\">Ok</button>\n</ngx-smart-modal>\n "
=======
module.exports = "<div class=\"wrapper\">\n\n\t<div class=\"row\">\n\n\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"rowHeader\">\n\t\t\t\t\t<th *ngFor=\"let hLists of hList\">{{hLists}}</th>\n\n\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<ng-container *ngIf=\"bTabData=='/ml2:mpls-l2vpn'; else l3vpn\">\n\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr *ngFor=\"let uLists of uList\">\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a><br>\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>{{uLists[1]}}</td>\n\n\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-info\" (click)=\"showConfirm(uLists[0],uLists[1],bTabData)\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span> Update\n\t\t\t\t\t\t</button></td>\n\n\n\n\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\n\n\n\t\t\t</ng-container>\n\t\t\t<ng-template #l3vpn>\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr *ngFor=\"let uLists of uList\">\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a><br>\n\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-plus\" (click)=\"showLink(uLists[0],bTabData)\"></a>\t\n\t\t\t\t\t\t\t\n\n\n\n\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>{{uLists[1]}}</td>\n\n\n\n\n\n\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</ng-template>\n\n\n\n\n\n\n\n\n\t\t</table>\t\n\n\t</div>\n</div>\n"
>>>>>>> .r177

/***/ }),

/***/ "../../../../../src/app/bod-tab-data/bod-tab-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.dataTable.no-footer {\n  border-bottom: 1px solid #c5c3c3; }\n\n.dataTables_wrapper .dataTables_filter {\n  width: 266px; }\n\n.dataTables_wrapper .dataTables_filter input {\n  width: 196px;\n  padding: 3px 5px; }\n\n.wrapper {\n  margin: 0 auto;\n  background: #fcfcfd;\n  padding: 20px 34px; }\n\ntable {\n  border: 1px solid #c5c3c3;\n  border-radius: 4px; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  border-bottom: 0px;\n  padding: 7px 18px; }\n\n.rowHeader {\n  border-radius: 4px;\n  background: #d2d6d6;\n  border: 1px solid gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bod-tab-data/bod-tab-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var bandwidth_on_demand_component_1 = __webpack_require__("../../../../../src/app/bandwidth-on-demand/bandwidth-on-demand.component.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var BodTabDataComponent = /** @class */ (function () {
    function BodTabDataComponent(sanitized, router, nsoService, http, dialogService, elementRef, ngxSmartModalService) {
        this.sanitized = sanitized;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.elementRef = elementRef;
        this.ngxSmartModalService = ngxSmartModalService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
<<<<<<< .mine
||||||| .r107
        this.toggleButton = true;
=======
        this.dtOptions1 = {};
        this.dtTrigger1 = new Subject_1.Subject();
        this.list2 = [];
        this.type = "link";
>>>>>>> .r177
    }
    BodTabDataComponent.prototype.ngAfterViewInit = function () {
    };
    BodTabDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = ['ckt-id', 'bandwidth', 'Update_bandwidth'];
        if (this.bTabData.indexOf("link") != -1) {
            console.log("this.bTabData.indexOf('link')" + this.bTabData);
            list = ['vpn-id', 'mesh-rd-value'];
        }
        this.hList = list;
        console.log('+++++++++++++++');
        console.log(this.hList);
        var User = {
            'serviceName': this.bTabData,
            "selection": list
        };
        this.nsoService.nsoData(User).subscribe(function (data) {
            console.log("======================================================");
            console.log(data);
            if (data.result) {
                _this.uList = data.result.results;
            }
            else {
                _this.router.navigate(['']);
            }
        });
        //////////////////
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        console.log(this.uList);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data', User, { headers: headers })
            .map(this.extractData)
            .subscribe(function (data) {
            //this.uList = data;
            console.log("dataaaaaaaa" + data);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger.next();
        });
    };
    BodTabDataComponent.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    BodTabDataComponent.prototype.extractData1 = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    BodTabDataComponent.prototype.slideTable = function (_path, _Val) {
        console.log(_Val);
        console.log(_path);
    };
<<<<<<< .mine
    BodTabDataComponent.prototype.showConfirm = function (val) {
        var objs = new bandwidth_on_demand_component_1.BandwidthOnDemandComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService);
        this.messagehtml = "<p><input type='text'/>text</p>";
        var band_title = 'Bandwidth Tab';
        objs.ngxSmartModalService.setModalData(this.sanitized.bypassSecurityTrustHtml(band_title), 'classicModal1');
        this.ngxSmartModalService.getModal('classicModal1').open();
||||||| .r107
    BodTabDataComponent.prototype.showConfirm = function (val) {
        var obj = "<p>dd</p>";
        this.ngxSmartModalService.setModalData(obj, 'classicModal');
        this.ngxSmartModalService.getModal('classicModal').open();
=======
    BodTabDataComponent.prototype.showConfirm = function (cktId_Val, bndWidth_Val, serviceName) {
        console.log("cktId_Val" + cktId_Val);
        console.log("Value_bandwidth" + bndWidth_Val);
        this.title1 = "jjj";
        console.log("Value of btadate" + this.bTabData);
        serviceName = this.bTabData;
        this.messagehtml = "Bandwidth Tab";
        var band_title = 'Bandwidth Tab';
        console.log('//////////////////////////////');
        console.log(this.ngxSmartModalService.resetModalData('classicModal1'));
        /*if(this.ngxSmartModalService.resetModalData('classicModal1')==null)
        {*/
        var objs = new bandwidth_on_demand_component_1.BandwidthOnDemandComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService);
        var data = {
            'ckt_id': cktId_Val,
            'serviceName': serviceName,
            'bandwidth': bndWidth_Val
        };
        objs.ngxSmartModalService.setModalData(data, 'classicModal1');
        objs.ngxSmartModalService.getModal('classicModal1').open();
>>>>>>> .r177
    };
<<<<<<< .mine
||||||| .r107
    BodTabDataComponent.prototype.openPrice = function (val) {
        this.title = "Price Tab";
        this.ngxSmartModalService.getModal('priceModal').open();
    };
    BodTabDataComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            this.toggleButton = !this.toggleButton;
        }
        else {
            this.toggleButton = true;
        }
    };
    BodTabDataComponent.prototype.resetAll = function (event) {
        console.log('Value' + event.target.checked);
        event.target.checked = false;
        console.log('Value2' + event.target.checked);
    };
=======
    /*else{

    alert('data updating');
    }*/
    BodTabDataComponent.prototype.showLink = function (vpnId, path) {
        var _this = this;
        var dataAll = {};
        var objs = new bandwidth_on_demand_component_1.BandwidthOnDemandComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService);
        objs.list2 = ['ckt-id', 'admin-state', 'customer-address', 'qos/bandwidth', 'Update_Bandwidth'];
        this.hList1 = this.list2;
        var json = {
            context: path.replace("/link", ""),
            xpath: "link[starts-with(vpn-id,'" + vpnId + "')]",
            selection: objs.list2
        };
        this.check = vpnId;
        this.nsoService.nsoDataquery(json).subscribe(function (data) {
            console.log(data);
            if (data.result) {
                objs.uList1 = data.result.results;
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': objs.uList1,
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('l3VPNModal').onOpen.subscribe(function (event) {
                    console.log(event['data']);
                    //event['data']=dataAll;
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNModal');
                    }
                    console.log(event['data']);
                });
                objs.ngxSmartModalService.getModal('l3VPNModal').open();
            }
            else {
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': {},
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('l3VPNModal').onOpen.subscribe(function (event) {
                    console.log(event['data']);
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNModal');
                    }
                });
                //objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNModal');
                objs.ngxSmartModalService.getModal('l3VPNModal').open();
            }
        });
        objs.ngxSmartModalService.getModal('l3VPNModal').onClose.subscribe(function (event) {
            console.log(event['data']);
            event['data'].uList1 = [];
            console.log(event['data']);
            console.log(dataAll);
            dataAll = {};
            console.log(dataAll);
        });
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        console.log(objs.uList1);
        this.dtOptions1 = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data/query', json, { headers: headers })
            .map(this.extractData1)
            .subscribe(function (data) {
            //this.uList = data;
            console.log("dataaaaaaaa" + data);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger1.next();
        });
    };
>>>>>>> .r177
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BodTabDataComponent.prototype, "bTabData", void 0);
    __decorate([
        core_1.ViewChild('dataContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], BodTabDataComponent.prototype, "d1", void 0);
    BodTabDataComponent = __decorate([
        core_1.Component({
            selector: 'app-bod-tab-data',
            template: __webpack_require__("../../../../../src/app/bod-tab-data/bod-tab-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bod-tab-data/bod-tab-data.component.scss")]
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, router_1.Router, nso_service_1.NsoService, http_1.Http, ng2_bootstrap_modal_1.DialogService,
            core_1.ElementRef, ngx_smart_modal_1.NgxSmartModalService])
    ], BodTabDataComponent);
    return BodTabDataComponent;
}());
exports.BodTabDataComponent = BodTabDataComponent;


/***/ }),

/***/ "../../../../../src/app/circuit-ordering/circuit-ordering.component.html":
/***/ (function(module, exports) {

<<<<<<< .mine
module.exports = "<div class=\"login-body\">\n    <article class=\"container-circuit center-block\">\n\t\t<section>\n\t\t\t\n\t\t\t<div class=\"tab-content tabs-login col-lg-12 col-md-12 col-sm-12 cols-xs-12\">\n\t\t\t\t<div id=\"login-access\" class=\"tab-pane fade active in\">\n\t\t\t\t\t<h2><i class=\"glyphicon glyphicon-log-in\"></i> Circuit Ordering </h2>\t\t\t\t\t\t\n\t\t\t\t\t<form method=\"post\" accept-charset=\"utf-8\" autocomplete=\"off\" role=\"form\" class=\"form-horizontal\">\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label class=\"form-group \">Location</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Location\" id=\"Location_value\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Location\" tabindex=\"1\" value=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label class=\"form-group \">Type Of Circuit</label>\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t<label for=\"Bandwidth\" >Bandwidth</label>\n\t\t\t\t\t\t\t\t<input type=\"Bandwidth\" class=\"form-control\" name=\"Bandwidth\" id=\"Bandwidth\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Bandwidth\" value=\"\" tabindex=\"2\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label for=\"Parent Vpn\" >Parent Vpn</label>\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"state\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t <option value=\"other\">Other</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label for=\"New Vpn\">New Vpn</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"province\" class=\"text\" id=\"province\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t</article>\n</div>"
||||||| .r107
module.exports = "<div class=\"login-body\">\n    <article class=\"container-circuit center-block\">\n\t\t<section>\n\t\t\t\n\t\t\t<div class=\"tab-content tabs-login col-lg-12 col-md-12 col-sm-12 cols-xs-12\">\n\t\t\t\t<div id=\"login-access\" class=\"tab-pane fade active in\">\n\t\t\t\t\t<h2><i class=\"glyphicon glyphicon-log-in\"></i> Circuit Ordering </h2>\t\t\t\t\t\t\n\t\t\t\t\t<form method=\"post\" accept-charset=\"utf-8\" autocomplete=\"off\" role=\"form\" class=\"form-horizontal\">\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label class=\"form-group \">Location</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Location\" id=\"Location_value\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Location\" tabindex=\"1\" value=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label class=\"form-group \">Type Of Circuit</label>\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t<label for=\"Bandwidth\" >Bandwidth</label>\n\t\t\t\t\t\t\t\t<input type=\"Bandwidth\" class=\"form-control\" name=\"Bandwidth\" id=\"Bandwidth\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Bandwidth\" value=\"\" tabindex=\"2\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label for=\"Parent Vpn\" >Parent Vpn</label>\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label for=\"New Vpn\" >New Vpn</label>\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t</article>\n</div>"
=======
module.exports = "<div class=\"login-body\">\n    <article class=\"container-circuit center-block\">\n\t\t<section>\n\t\t\t\n\t\t\t<div class=\"tab-content tabs-login col-lg-12 col-md-12 col-sm-12 cols-xs-12\">\n\t\t\t\t<div id=\"login-access\" class=\"tab-pane fade active in\">\n\t\t\t\t\t<h2><i class=\"glyphicon glyphicon-log-in\"></i> Circuit Ordering </h2>\t\t\t\t\t\t\n\t\t\t\t\t<form method=\"post\" accept-charset=\"utf-8\" autocomplete=\"off\" role=\"form\" class=\"form-horizontal\">\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label class=\"form-group \">Location</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Location\" id=\"Location_value\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Location\" tabindex=\"1\" value=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label class=\"form-group \">Type Of Circuit</label>\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t<label for=\"Bandwidth\" >Bandwidth</label>\n\t\t\t\t\t\t\t\t<input type=\"Bandwidth\" class=\"form-control\" name=\"Bandwidth\" id=\"Bandwidth\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Bandwidth\" value=\"\" tabindex=\"2\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label for=\"Parent Vpn\" >Parent Vpn</label>\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"state\">\n\t\t\t\t\t\t\t\t<option value=''></option>\n\t\t\t\t\t\t\t\t<option value=\"L2 Vpn\">L2 Vpn</option>\n\t\t\t\t\t\t\t\t<option value=\"L3 Vpn\">L3 Vpn</option>\n\t\t\t\t\t\t\t\t <option value=\"other\">Other</option>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\n\t\t\t\t\t\t\t<label for=\"New Vpn\">New Vpn</label>\n\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" name=\"new_VPN\"  id=\"new_VPN\" placeholder=\"New Vpn\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t</article>\n</div>"
>>>>>>> .r177

/***/ }),

/***/ "../../../../../src/app/circuit-ordering/circuit-ordering.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,300,700\");\nbody {\n  font-family: Open Sans;\n  font-size: 14px;\n  line-height: 1.42857;\n  background: #333333;\n  height: 350px;\n  padding: 0;\n  margin: 0; }\n.container-circuit {\n  min-height: 0;\n  width: 480px;\n  color: #333333;\n  margin-top: 40px;\n  padding: 0; }\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.container-circuit > section {\n  margin-left: 0;\n  margin-right: 0;\n  padding-bottom: 10px; }\n#top-bar {\n  display: inherit; }\n.nav-tabs.nav-justified {\n  border-bottom: 0 none;\n  width: 100%; }\n.nav-tabs.nav-justified > li {\n  display: table-cell;\n  width: 1%;\n  float: none; }\n.container-circuit .nav-tabs.nav-justified > li > a,\n.container-circuit .nav-tabs.nav-justified > li > a:hover,\n.container-circuit .nav-tabs.nav-justified > li > a:focus {\n  background: #ea533f;\n  border: medium none;\n  color: #ffffff;\n  margin-bottom: 0;\n  margin-right: 0;\n  border-radius: 0; }\n.container-circuit .nav-tabs.nav-justified > .active > a,\n.container-circuit .nav-tabs.nav-justified > .active > a:hover,\n.container-circuit .nav-tabs.nav-justified > .active > a:focus {\n  background: #ffffff;\n  color: #333333; }\n.container-circuit .nav-tabs.nav-justified > li > a:hover,\n.container-circuit .nav-tabs.nav-justified > li > a:focus {\n  background: #de2f18; }\n.tabs-login {\n  background: #ffffff;\n  border: medium none;\n  margin-top: -1px;\n  padding: 10px 30px; }\n.container-circuit h2 {\n  color: #ea533f; }\n.form-control {\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #999999;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  color: #333333;\n  display: block;\n  font-size: 14px;\n  height: 34px;\n  line-height: 1.42857;\n  padding: 6px 12px;\n  -webkit-transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/circuit-ordering/circuit-ordering.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CircuitOrderingComponent = /** @class */ (function () {
    function CircuitOrderingComponent() {
    }
    CircuitOrderingComponent.prototype.ngOnInit = function () {
    };
    CircuitOrderingComponent = __decorate([
        core_1.Component({
            selector: 'app-circuit-ordering',
            template: __webpack_require__("../../../../../src/app/circuit-ordering/circuit-ordering.component.html"),
            styles: [__webpack_require__("../../../../../src/app/circuit-ordering/circuit-ordering.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircuitOrderingComponent);
    return CircuitOrderingComponent;
}());
exports.CircuitOrderingComponent = CircuitOrderingComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/divfields/divfields.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let obj of divChild\" >\n   <div class=\"form-group col-md-4\" *ngIf=\"obj.type=='text'\">\n      <label for=\"{{obj.name}}\">{{obj.name}}</label>\n      <input type=\"text\" [disabled]=\"true\" class=\"form-control\"  value=\"{{obj.value}}\" name=\"text\" id=\"text\" placeholder=\"{{obj.name}}\">\n   </div>\n   <div *ngIf=\"obj.type=='select'\" class=\"form-group col-md-4\">\n      <label for=\"{{obj.name}}\">{{obj.name}}</label>\n    \n      <select class=\"form-control\"  [disabled]=\"true\" >\n         <option value=\"\">-</option>\n         <option *ngFor=\"let obj1 of obj.option\" value=\"{{obj1}}\" selected=\"{{obj1}}\">{{obj1}}</option>\n      </select>\n   </div>\n   <div *ngIf=\"obj.type=='choice'\" class=\"form-group col-md-12\">\n\n      <div class=\"SchoiceDiv\">\n         <label for=\"{{obj.name}}\">{{obj.name}}</label>\n         \n         <select  class=\"form-control jsonSelectBox\"  [disabled]=\"true\" \n            (change)=\"callChoiceSchema($event.target.value,obj.path,obj.name)\">\n            <option value=\"\">-</option>\n\n            <option *ngFor=\"let obj1 of obj.option\" \n            [selected]=\"obj1.name === obj.value\" \n            [ngValue]=\"obj1.name\">{{obj1.name}}</option>\n         </select>\n      </div>\n     \n \n      <div class=\"myDivJson\" *ngFor=\"let option of obj.option\">\n            \n          <div *ngIf=\"choiceVal && choiceVal == option['name']\">\n          <div *ngFor=\"let option1 of option.caseChildren\">           \n          <h1>{{option1['name']}}</h1>\n         <app-parentchild [ParentChild]=\"option1\"></app-parentchild>\n         </div>\n         </div>\n          <div *ngIf=\"!choiceVal && obj.value && obj.value == option['name']\">\n          <div *ngFor=\"let option1 of option.caseChildren\">           \n          <h1>{{option1['name']}}</h1>\n         <app-parentchild [ParentChild]=\"option1\"></app-parentchild>\n         </div>\n         </div>\n      </div>\n   \n\n   </div>\n   <div *ngIf=\"obj.type=='checkbox'\" class=\"form-group col-md-4\">\n      <input type=\"checkbox\" name=\"checkbox\" [disabled]=\"true\" value=\"check\" [checked]=\"obj.checked\">\n      <label for=\"{{obj.name}}\">{{obj.name}}</label>\n   </div>\n   <div *ngIf=\"obj.type=='table'\" class=\"form-group col-md-12\">\n      <table class=\"table table-bordered\">\n         <tr>\n            <th *ngFor=\"let tableS of obj.children\">{{tableS.name}}</th>\n         </tr>\n         <tr *ngFor=\"let tableS of obj.value\">\n            <td *ngFor=\"let tableSs of tableS\">{{tableSs}}</td>\n         </tr>\n      </table>\n   </div>\n\n  \n\n</div>"

/***/ }),

/***/ "../../../../../src/app/divfields/divfields.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/divfields/divfields.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DivfieldsComponent = /** @class */ (function () {
    function DivfieldsComponent() {
    }
    DivfieldsComponent.prototype.ngOnInit = function () {
        console.log("this.divChild==================================================");
        console.log(this.divChild);
    };
    DivfieldsComponent.prototype.amit = function (_am) {
        alert(_am);
        if (_am != 'undefined') {
            this.choiceVal = _am;
            alert(this.choiceVal);
            return "";
        }
    };
    DivfieldsComponent.prototype.callChoiceSchema = function (value, path_name, name) {
        this.choiceVal = value;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DivfieldsComponent.prototype, "divChild", void 0);
    DivfieldsComponent = __decorate([
        core_1.Component({
            selector: 'app-divfields',
            template: __webpack_require__("../../../../../src/app/divfields/divfields.component.html"),
            styles: [__webpack_require__("../../../../../src/app/divfields/divfields.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DivfieldsComponent);
    return DivfieldsComponent;
}());
exports.DivfieldsComponent = DivfieldsComponent;


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>Copyright © 2018 Cisco</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  text-align: center;\n  padding: 16px 0;\n  color: #5f5b5b;\n  font-size: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>     \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"logo col-md-6\"><a routerLink=\"/dashboard\"><img src=\"assets/images/cisco-logo-inner.png\" alt=\"\" /></a></div>\n        <div class=\"logo col-md-6\">\n          <div class=\"navtabs\">\n            <ul>\n              \n              <li>\n                <a href=\"#\" class=\"btn-lctn\" (click)=\"locationBox($event);false\">\n                    <span class=\"glyphicon glyphicon-map-marker\"></span> Locations</a>\n                <ul [hidden]=\"!locationT\" class=\"locationC\" id=\"myLocationSerch\" >\n                  \n                  <a href=\"#\" (click)= \"closeDiv($event);false\" class=\"closeBtn\">x</a>\n\n                  <li><input type=\"text\" placeholder=\"Search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"   #search> </li>\n                </ul>\n              </li>\n\n\n              <li><div class=\"btn-group\">\n  <a href=\"#\" class=\"dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\"></span>\n    {{loginUser}}\n  </a>\n  <div class=\"dropdown-menu\">\n    <a routerLink=\"/dashboard/manage-profile\">Manage Profile</a>\n  </div>\n</div></li>\n               <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> &nbsp;Logout</a></li>\n             <!-- <li><a href=\"\"><img src=\"../../../assets/images/settings.png\" alt=\"\" /></a></li>-->\n            </ul>\n          </div>\n\n        </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  background: #0d99ce;\n  padding: 1px 5px 1px 5px;\n  z-index: 999;\n  width: 100%; }\n\n.navtabs {\n  float: right; }\n\n.navtabs ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\n.navtabs ul li {\n  float: left;\n  position: relative;\n  z-index: 9; }\n\n.navtabs ul li a {\n  color: #fff;\n  padding: 10px 10px;\n  display: block;\n  line-height: 31px; }\n\n.navtabs ul li a:hover {\n  background: #326790; }\n\n.dropdown-menu {\n  border-radius: 0px;\n  background-color: #2467a0;\n  padding: 0px 0 0px 0px;\n  -webkit-box-shadow: 3px 1px 9px rgba(0, 0, 0, 0.175);\n          box-shadow: 3px 1px 9px rgba(0, 0, 0, 0.175);\n  color: #fff; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: .255em;\n  vertical-align: .255em;\n  content: \"\";\n  border-top: .3em solid;\n  border-right: .3em solid transparent;\n  border-bottom: 0;\n  border-left: .3em solid transparent; }\n\n.dropdown-menu a:hover {\n  background: #3d90d0 !important; }\n\n.dropdown-menu a {\n  line-height: 21px !important;\n  font-size: 16px; }\n\n.locationC {\n  width: 270px;\n  position: absolute;\n  z-index: 99;\n  top: 52px;\n  left: 0;\n  background: #e0e3e3;\n  padding: 8px 10px;\n  border: 1px solid #d7d7d7; }\n\n.locationC li {\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n\n.locationC input {\n  border: none;\n  background: none;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: 33px;\n  margin-top: 6px; }\n\n.closeBtn {\n  position: absolute;\n  top: -18px;\n  right: -1px;\n  z-index: 999;\n  color: #0480ec !important;\n  font-size: 18px;\n  font-weight: bold !important; }\n\n.closeBtn:hover {\n  background: none !important;\n  color: gray !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(elementRef, router, nsoService, mapsAPILoader, ngZone) {
        this.elementRef = elementRef;
        this.router = router;
        this.nsoService = nsoService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.locationT = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginUser = localStorage.getItem("loginUser");
        this.loginEmail = localStorage.getItem("loginEmail");
        //Start
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.nsoService.nsoLogout().subscribe(function (data) {
            console.log(data);
            if (data) {
                localStorage.removeItem("loginUser");
                localStorage.removeItem("loginEmail");
                localStorage.clear();
                _this.router.navigate(['']);
            }
            else {
            }
        });
    };
    HeaderComponent.prototype.locationBox = function (_ev) {
        _ev.stopPropagation();
        this.locationT = !this.locationT;
    };
    HeaderComponent.prototype.closeDiv = function (e) {
        this.locationT = false;
    };
    __decorate([
        core_1.ViewChild('search'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "searchElement", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            router_1.Router, nso_service_1.NsoService,
            core_2.MapsAPILoader, core_1.NgZone])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n            \n\n    <div class=\"row bucket-area\">\n        <div class=\"col-md-12\">\n            \n            <h1>Self Service Portal</h1>\n\n          </div>\n      <div class=\"col-md-12 left\">\n            <div class=\"col-md-5 col-xs-12\">\n                  <a routerLink=\"/dashboard/inventory\" class=\"bucket-inventory\">\n                      <img src=\"assets/images/inventory.png\" alt=\"\" /><h3>Inventory</h3>\n                      <p> view here >></p>\n                  </a>\n            </div>\n              <div class=\"col-md-5 col-xs-12\">\n                  <a routerLink=\"/dashboard/bandwidth-on-demand\" class=\"bucket-demand\">\n                      <img src=\"assets/images/demand.png\" alt=\"\" /><h3>On Demand Bandwidth</h3>\n                      <p> view here >></p>\n                  </a>\n            </div>     \n\n      </div>\n    </div><!-- row bucket-area -->\n\n    <div class=\"row bucket-area\">\n      <div class=\"col-md-12 left\">\n            <div class=\"col-md-5 col-xs-12\">\n                  <a href=\"#\" class=\"bucket-upgrade\">\n                      <img src=\"assets/images/service-upgrade.png\" alt=\"\" /> <h3>Service Upgrade</h3>\n                      <p> view here >></p>\n                  </a>\n            </div>\n               <div class=\"col-md-5 col-xs-12\">\n                  <a routerLink=\"/dashboard/serviceTermination\" class=\"bucket-terminate\">\n                      <img src=\"assets/images/service-termination.png\" alt=\"\" /> <h3>Service Termination</h3>\n                      <p> view here >></p>\n                  </a>\n            </div>\n\n      </div>\n    </div><!-- row bucket-area -->\n\n    <div class=\"row bucket-area\">\n      <div class=\"col-md-12 left\">\n            <div class=\"col-md-5 col-xs-12\">\n                  <a routerLink=\"/dashboard/circuit-ordering\" class=\"bucket-circuit\">\n                      <img src=\"assets/images/circuitOrdering.png\" alt=\"\" /> <h3>Circuit Ordering</h3>\n                      <p> view here >></p>\n                  </a>\n            </div>\n            <div class=\"col-md-5 col-xs-12\">\n                  <a routerLink=\"/dashboard/bandwidth-calender\" class=\"bucket-calender\">\n                      <img src=\"assets/images/calendering.png\" alt=\"\" /> <h3>Bandwidth Calendaring</h3>\n                      <p> view here >></p>\n                  </a>\n            </div>\n                      \n      </div>\n    </div><!-- row bucket-area -->\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bucket-area {\n  margin-bottom: 20px; }\n\n.bucket-area a:hover {\n  -webkit-box-shadow: 3px 3px 1px #c5c5c5;\n          box-shadow: 3px 3px 1px #c5c5c5; }\n\n.bucket-area img {\n  float: left;\n  margin: 21px 38px 0 18px; }\n\n.bucket-area h3 {\n  color: #3a4b80;\n  font-size: 18px;\n  margin-top: 46px;\n  float: left; }\n\n.bucket-area p {\n  width: 100%;\n  text-align: right;\n  padding-right: 20px;\n  display: block;\n  float: left; }\n\n.bucket-demand {\n  width: 95%;\n  display: block;\n  min-height: 119px;\n  background: #f9f9f9;\n  -webkit-box-shadow: 2px 2px 1px #ccc;\n          box-shadow: 2px 2px 1px #ccc;\n  border: 1px solid #eae7e7;\n  border-left: 7px solid #5356c1;\n  margin-left: 35px; }\n\n.bucket-inventory {\n  width: 95%;\n  float: right;\n  display: block;\n  min-height: 119px;\n  background: #f9f9f9;\n  -webkit-box-shadow: 2px 2px 1px #ccc;\n          box-shadow: 2px 2px 1px #ccc;\n  border: 1px solid #eae7e7;\n  border-left: 7px solid #0c8dd7; }\n\n.bucket-calender {\n  width: 95%;\n  float: left;\n  display: block;\n  min-height: 119px;\n  background: #f9f9f9;\n  -webkit-box-shadow: 2px 2px 1px #ccc;\n          box-shadow: 2px 2px 1px #ccc;\n  border: 1px solid #eae7e7;\n  border-left: 7px solid #1c67b4;\n  margin-left: 35px; }\n\n.bucket-upgrade {\n  width: 95%;\n  float: right;\n  display: block;\n  min-height: 119px;\n  background: #f9f9f9;\n  -webkit-box-shadow: 2px 2px 1px #ccc;\n          box-shadow: 2px 2px 1px #ccc;\n  border: 1px solid #eae7e7;\n  border-left: 7px solid #3a50b1; }\n\n.bucket-terminate {\n  width: 95%;\n  float: left;\n  display: block;\n  min-height: 119px;\n  background: #f9f9f9;\n  -webkit-box-shadow: 2px 2px 1px #ccc;\n          box-shadow: 2px 2px 1px #ccc;\n  border: 1px solid #eae7e7;\n  border-left: 7px solid #46b6d0;\n  margin-left: 35px; }\n\n.bucket-circuit {\n  width: 95%;\n  float: right;\n  display: block;\n  min-height: 119px;\n  background: #f9f9f9;\n  -webkit-box-shadow: 2px 2px 1px #ccc;\n          box-shadow: 2px 2px 1px #ccc;\n  border: 1px solid #eae7e7;\n  border-left: 7px solid #0288c0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>My Inventory</h1>\n\t<div class=\"row\">\n        <div class=\" tabData\">\n           \n            <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myTabs\">\n                <li  *ngFor=\"let uLists of uList; let index = index\"\n                class=\"{{(index == 0)? 'active' : ''}}\" >\n               \n                    <a  \n                        href=\"#{{uLists | specialchar}}\" \n                        attr.aria-controls=\"{{uLists | specialchar}}\" \n                        role=\"tab\"  \n                        data-toggle=\"tab\">{{uLists}}</a>\n                </li>\n               \n                \n              </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\" >\n             <div *ngFor=\"let uLists1 of uList; let index1 = index\" \n                class=\"tab-pane {{(index1 == 0)? 'active' : ''}}\" \n                id=\"{{uLists1 | specialchar}}\" \n                role=\"tabpanel\" attr.aria-labelledby=\"{{uLists1 | specialchar}}\">\n                   <div class=\"wrapper\"><app-tab-data [bTabData]=\"uLists1\"></app-tab-data></div> \n                </div>\n \n           \n          </div>\n        </div>\n\t\t\n    </div>\n</div>\n <ngx-smart-modal [customClass]=\"'CssAmit'\"   #longTextModal  [identifier]=\"'longTextModal'\">\n<div id=\"topology\"></div>\n</ngx-smart-modal>\n\n<ngx-smart-modal [customClass]=\"'CssAmit'\"   #classicModal  [identifier]=\"'classicModal'\" [customClass]=\"'large-modal'\">\n  <p><br><br></p>\n  <div *ngIf=\"classicModal.hasData()\">\n <table datatable class=\"row-border hover\" id=\"vpnLink\">\n <thead>\n       <tr class=\"rowHeader\">\n         <th *ngFor=\"let hLists2 of classicModal.getData().hList1\">{{hLists2}}</th>\n    \n       </tr>\n     </thead>\n     <tbody *ngIf=\"classicModal.getData().uList1\">\n      <tr *ngFor=\"let uLists2 of classicModal.getData().uList1\">\n        \n     <td><a [routerLink]=\"['/dashboard/schemalink', classicModal.getData().bTabData, classicModal.getData().vpnId, uLists2[0], 'link']\">{{uLists2[0]}}</a>\n     </td>\n     <td>{{uLists2[1]}}</td>\n     <td>{{uLists2[2]}}</td>\n     <td>{{uLists2[3]}}</td>\n \n      </tr>\n     </tbody>\n  </table>\n             </div>\n</ngx-smart-modal>\n<!-- // -->"

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabData {\n  background: #ececec;\n  padding: 0px;\n  max-width: 1106px;\n  margin: 0 auto;\n  -webkit-border-top-left-radius: 4px;\n  -webkit-border-top-right-radius: 4px;\n  -moz-border-radius-topleft: 4px;\n  -moz-border-radius-topright: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #dedddd; }\n\n.nav-tabs {\n  border-bottom: 0px; }\n\n.nav > li > a {\n  color: #6b6969;\n  font-size: 15px;\n  border: none;\n  padding: 9px 30px;\n  font-weight: bold; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  background-color: #757779;\n  border: none;\n  -webkit-box-shadow: 3px 1px 2px #ccc;\n          box-shadow: 3px 1px 2px #ccc;\n  color: #fff;\n  border-bottom: 5px solid #188ed4 !important; }\n\n.nav > li > a:focus, .nav > li > a:hover {\n  background-color: #fcfdfd;\n  border-bottom: 5px solid #188ed4; }\n\n.large-modal {\n  max-width: none !important; }\n\n.CssAmit {\n  max-width: 900px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(router, nsoService, http, dialogService, ngxSmartModalService) {
        var _this = this;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.dtOptions = {};
        // We use this trigger because fetching the list of persons can be quite long,
        // thus we ensure the data is fetched before rendering
        this.dtTrigger = new Subject_1.Subject();
        this.nsoService.nsoServices().subscribe(function (data) {
            console.log(data);
            if (data.result) {
                _this.uList = Object.keys(data.result.service_points);
            }
            else {
                _this.router.navigate(['']);
            }
        });
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        core_1.Component({
            selector: 'app-inventory',
            template: __webpack_require__("../../../../../src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, nso_service_1.NsoService,
            http_1.Http, ng2_bootstrap_modal_1.DialogService,
            ngx_smart_modal_1.NgxSmartModalService])
    ], InventoryComponent);
    return InventoryComponent;
}());
exports.InventoryComponent = InventoryComponent;


/***/ }),

/***/ "../../../../../src/app/jsonclass/Jsonview.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Jsonview = /** @class */ (function () {
    function Jsonview(nsoService, _data, _meta, _keyPath) {
        this.nsoService = nsoService;
        this._data = _data;
        this._meta = _meta;
        this._keyPath = _keyPath;
        this._htmlView = "";
        this._FirsthtmlView = "";
        this.jsonElements = [];
    }
    Jsonview.prototype.firstAcordian = function () {
        var path = "";
        var parentData = this._data;
        var elements = {};
        path = this._keyPath;
        elements['name'] = parentData.name;
        if (parentData.kind == "list-entry" || parentData.kind == "container") {
            elements['type'] = "div";
        }
        //this.jsonElements.push(elements);
        elements['children'] = [];
        //console.log(parentData.children);
        if (parentData.children != null) {
            for (var i = 0; i < parentData.children.length; i++) {
                var innData = parentData.children[i];
                ////console.log(innData.name);
                if (innData.name != "modified" && innData.name != "directly-modified" && innData.name != "commit-queue" && innData.name != "log") {
                    var childelements = {};
                    childelements['name'] = innData.name;
                    if (innData.kind == "key") {
                        childelements['type'] = "text";
                        childelements['readonly'] = "readonly";
                        this.getValue(path, innData.qname, childelements);
                    }
                    if (innData.kind == "leaf") {
                        this.callJsonLeaf(path, innData, this._meta, childelements);
                        //childelements['type']="text";
                    }
                    if (innData.kind == "container") {
                        this.callJsonContainer(path, innData, this._meta, childelements);
                        //childelements['type']="text";
                    }
                    if (innData.kind == "choice") {
                        this.callJsonChoice((path), innData, this._meta, childelements);
                    }
                    childelements['tooltip'] = innData.info;
                    if (innData.mandatory) {
                        childelements['mandatory'] = "required";
                    }
                    else {
                        childelements['mandatory'] = "";
                    }
                    if (innData.type) {
                        if (innData.type.name != null && innData.type.namespace != null) {
                            this.callMetaData(innData.type.namespace, innData.type.name, childelements);
                        }
                    }
                    if (innData.kind == "action") {
                        childelements['type'] = "button";
                        //childelements['type']="text";
                    }
                    elements['children'].push(childelements);
                }
            }
        }
        this.jsonElements.push(elements);
        return this.jsonElements;
    };
    Jsonview.prototype.callMetaData = function (namespace, name, elements) {
        var metaTypes = namespace + ":" + name;
        //console.log(this._meta.types[metaTypes]);
        var metaTypesList = this._meta.types[metaTypes];
        if (metaTypesList.length > 1) {
            for (var i = 0; i < metaTypesList.length; i++) {
                if (metaTypesList[i].pattern != null) {
                    elements['pattern'] = metaTypesList[i].pattern.value;
                }
            }
        }
    };
    Jsonview.prototype.callJsonLeaf = function (path, json, meta, childelements) {
        ////console.log("leaf");
        ////console.log(meta.keypath);
        var metadt = json.type.namespace + ":" + json.type.name;
        var mtdt = meta.types[metadt];
        ////console.log(metadt);
        //console.log(mtdt);
        var option = [];
        childelements['name'] = json.name;
        childelements['qname'] = json.qname;
        childelements['tooltip'] = json.info;
        childelements['path'] = path;
        this.getValue(path, json.qname, childelements);
        if (json.default != null) {
            childelements['defaultValue'] = json.default;
        }
        if (json.mandatory != null) {
            childelements['mandatory'] = "required";
        }
        if (typeof mtdt != "undefined" && mtdt != null) {
            //console.log("asdsdsdadsasdas");
            var flags = 1;
            for (var m = 0; m < mtdt.length; m++) {
                if (mtdt[m].enumeration != null) {
                    flags = 0;
                    var enumList = mtdt[m].enumeration;
                    option = [];
                    for (var mj = 0; mj < enumList.length; mj++) {
                        option.push(enumList[mj].label);
                    }
                    if (json.evaluated_when_entry == null || json.evaluated_when_entry == true) {
                        childelements['type'] = "select";
                        childelements['option'] = option;
                    }
                }
            }
            if (flags == 0) { }
            else {
                if (json.is_leafref != null) {
                    if (json.is_leafref) {
                        if (json.evaluated_when_entry == null || json.evaluated_when_entry == true) {
                            childelements['type'] = "select";
                        }
                    }
                    else {
                        if (json.type.primitive != null) {
                            if (json.type.primitive) {
                                if (json.type.name == "empty") {
                                    childelements['type'] = "checkbox";
                                    this.checkExists(path, json.qname, childelements);
                                    if (json.default != null) {
                                        childelements['default'] = json.default;
                                    }
                                }
                                else {
                                    //console.log(json.type.name);
                                    //console.log(json.type.primitive);
                                    childelements['type'] = "text";
                                }
                            }
                            else {
                                childelements['type'] = "text";
                            }
                        }
                    }
                }
                else {
                    childelements['type'] = "text";
                }
            }
        }
        else {
            if (json.is_leafref != null) {
                if (json.is_leafref) {
                    if (json.evaluated_when_entry == null || json.evaluated_when_entry == true) {
                        childelements['type'] = "select";
                    }
                }
                else {
                    if (json.type.primitive != null) {
                        if (json.type.primitive) {
                            //console.log(json.type.name);
                            //console.log(json.type.primitive);
                            if (json.type.name == "empty") {
                                childelements['type'] = "checkbox";
                                this.checkExists(path, json.qname, childelements);
                                if (json.default != null) {
                                    childelements['default'] = json.default;
                                }
                            }
                            else if (json.type.name == "boolean") {
                                childelements['type'] = "select";
                                var option_1 = [];
                                option_1.push("true");
                                option_1.push("false");
                                childelements['option'] = option_1;
                                if (json.default != null) {
                                    childelements['default'] = json.default;
                                }
                            }
                            else {
                                childelements['type'] = "text";
                            }
                        }
                    }
                    else {
                        childelements['type'] = "text";
                    }
                }
            }
            else {
                if (json.type.name == "empty") {
                    childelements['type'] = "checkbox";
                    this.checkExists(path, json.qname, childelements);
                    if (json.default != null) {
                        childelements['default'] = json.default;
                    }
                }
                else if (json.type.name == "boolean") {
                    childelements['type'] = "select";
                    var option_2 = [];
                    option_2.push("true");
                    option_2.push("false");
                    childelements['option'] = option_2;
                    if (json.default != null) {
                        childelements['default'] = json.default;
                    }
                }
                else {
                    childelements['type'] = "text";
                }
            }
        }
    };
    Jsonview.prototype.callJsonChoice = function (path, json, meta, childelements) {
        var option = [];
        //if(json.evaluated_when_entry!=null || json.evaluated_when_entry==true){
        childelements['name'] = json.name;
        childelements['qname'] = json.qname;
        childelements['tooltip'] = json.info;
        childelements['type'] = "choice";
        childelements['path'] = path;
        console.log("choice++++++++++" + path);
        this.getCase(path, json.name, childelements);
        if (json.default != null) {
            childelements['defaultValue'] = json.default;
        }
        if (json.mandatory != null) {
            childelements['mandatory'] = "required";
        }
        if (json.config != null && json.config == false) {
            childelements['readonly'] = "readonly";
        }
        var choiceCases = json.cases;
        var choiceChildren = [];
        for (var m = 0; m < choiceCases.length; m++) {
            var indchild = choiceCases[m].children;
            var caseInVal = "";
            var subchild = {};
            var subchild1 = [];
            subchild['name'] = choiceCases[m].name;
            for (var h = 0; h < indchild.length; h++) {
                var subcasechild = {};
                if (indchild[h].mandatory != null) {
                    subcasechild['mandatory'] = "required";
                }
                if (indchild[h].kind == "key") {
                    subcasechild['type'] = "text";
                    subcasechild['readonly'] = "readonly";
                }
                if (indchild[h].kind == "container") {
                    this.callJsonContainer((path), indchild[h], meta, subcasechild);
                }
                if (indchild[h].kind == "list") {
                    this.callJsonList((path), indchild[h], meta, subcasechild);
                }
                if (indchild[h].kind == "leaf-list") {
                    this.callJsonLeafList((path), indchild[h], meta, subcasechild);
                }
                if (indchild[h].kind == "leaf") {
                    this.callJsonLeaf((path), indchild[h], meta, subcasechild);
                }
                if (indchild[h].kind == "choice") {
                    this.callJsonChoice((path), indchild[h], meta, subcasechild);
                }
                if (indchild[h].type) {
                    if (indchild[h].type.name != null && indchild[h].type.namespace != null) {
                        this.callMetaData(indchild[h].type.namespace, indchild[h].type.name, subcasechild);
                    }
                }
                //console.log(subcasechild);
                subchild1.push(subcasechild);
            }
            subchild['caseChildren'] = subchild1;
            //option.push(subchild);
            option.push(subchild);
        }
        childelements['option'] = option;
        //console.log("childelements-------------choice");
        //console.log(childelements);
        //console.log("childelements------------choice End");
        //}
    };
    Jsonview.prototype.callJsonContainer = function (path, json, _meta, childelements) {
        childelements['name'] = json.name;
        childelements['qname'] = json.qname;
        childelements['path'] = path;
        childelements['type'] = "div";
        if (json.presence != null) {
            childelements['presence'] = true;
            childelements['tooltip'] = json.info;
        }
        var subchildelements = [];
        if (json.children != null) {
            for (var t = 0; t < json.children.length; t++) {
                var subchild = {};
                var child = json.children[t];
                if (child.kind == "key") {
                    subchild['type'] = "text";
                    subchild['readonly'] = "readonly";
                }
                if (child.kind == "leaf") {
                    this.callJsonLeaf((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "choice") {
                    this.callJsonChoice((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "list") {
                    this.callJsonList((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "leaf-list") {
                    this.callJsonLeafList((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "container") {
                    this.callJsonContainer((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.type) {
                    if (child.type.name != null && child.type.namespace != null) {
                        this.callMetaData(child.type.namespace, child.type.name, subchild);
                    }
                }
                subchildelements.push(subchild);
            }
            childelements['children'] = subchildelements;
        }
    };
    Jsonview.prototype.callJsonList = function (path, json, _meta, childelements) {
        childelements['name'] = json.name;
        childelements['qname'] = json.qname;
        childelements['path'] = path;
        childelements['type'] = "table";
        if (json.presence != null) {
            childelements['presence'] = true;
            childelements['tooltip'] = json.info;
        }
        var subchildelements = [];
        var list = [];
        if (json.children != null) {
            for (var t = 0; t < json.children.length; t++) {
                var subchild = {};
                var child = json.children[t];
                list.push(child.name);
                if (child.kind == "key") {
                    subchild['name'] = json.name;
                    subchild['qname'] = json.qname;
                    subchild['tooltip'] = json.info;
                    subchild['path'] = path + "/" + json.name;
                    subchild['type'] = "text";
                    subchild['readonly'] = "readonly";
                }
                if (child.kind == "leaf") {
                    this.callJsonLeaf((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "choice") {
                    this.callJsonChoice((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "container") {
                    this.callJsonContainer((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.type) {
                    if (child.type.name != null && child.type.namespace != null) {
                        this.callMetaData(child.type.namespace, child.type.name, subchild);
                    }
                }
                subchildelements.push(subchild);
            }
            childelements['children'] = subchildelements;
        }
        this.getListData(path, json.name, list, childelements);
    };
    Jsonview.prototype.callJsonLeafList = function (path, json, _meta, childelements) {
        childelements['name'] = json.name;
        childelements['qname'] = json.qname;
        childelements['path'] = path;
        childelements['type'] = "multiselect";
        if (json.mandatory) {
            childelements['mandatory'] = true;
        }
        this.getValue(path, json.qname, childelements);
        var subchildelements = [];
        var list = [];
        if (json.children != null) {
            for (var t = 0; t < json.children.length; t++) {
                var subchild = {};
                var child = json.children[t];
                list.push(child.name);
                if (child.kind == "key") {
                    subchild['name'] = json.name;
                    subchild['qname'] = json.qname;
                    subchild['tooltip'] = json.info;
                    subchild['path'] = path + "/" + json.name;
                    subchild['type'] = "text";
                    subchild['readonly'] = "readonly";
                }
                if (child.kind == "leaf") {
                    this.callJsonLeaf((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "choice") {
                    this.callJsonChoice((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.kind == "container") {
                    this.callJsonContainer((path + "/" + json.name), child, _meta, subchild);
                }
                if (child.type) {
                    if (child.type.name != null && child.type.namespace != null) {
                        this.callMetaData(child.type.namespace, child.type.name, subchild);
                    }
                }
                subchildelements.push(subchild);
            }
            childelements['children'] = subchildelements;
        }
        //this.getListData(path,json.name,list,childelements);
    };
    Jsonview.prototype.getValue = function (path, qname, childelements) {
        var URL = {
            'URL': (path + "/" + qname)
        };
        this.nsoService.nsoServicesSchemaGetValue(URL).subscribe(function (data) {
            /* console.log("value=============="+path+"/"+qname);
             console.log(data);*/
            if (data.result != null) {
                childelements['value'] = data.result.value;
            }
        });
    };
    Jsonview.prototype.getCase = function (path, name, childelements) {
        var URL = {
            'URL': (path),
            'choice': name
        };
        this.nsoService.nsoServicesSchemaGetCase(URL).subscribe(function (data) {
            console.log("case==============" + path + "/" + name);
            console.log(data);
            if (data.result != null) {
                childelements['value'] = data.result.case;
            }
        });
    };
    Jsonview.prototype.checkExists = function (path, qname, childelements) {
        var URL = {
            'URL': (path + "/" + qname)
        };
        this.nsoService.nsoServicesSchemaExists(URL).subscribe(function (data) {
            console.log("checkExists==============" + path + "/" + qname);
            console.log(data);
            if (data.result != null) {
                childelements['checked'] = data.result.exists;
            }
        });
    };
    Jsonview.prototype.getListData = function (path, name, list, childelements) {
        var URL = {
            'context': path,
            'xpath': name,
            'selection': list
        };
        this.nsoService.nsoDataquery(URL).subscribe(function (data) {
            console.log("list data==============" + path + "/" + name);
            console.log(data);
            if (data.result != null) {
                childelements['value'] = data.result.results;
            }
        });
    };
    return Jsonview;
}());
exports.Jsonview = Jsonview;


/***/ }),

/***/ "../../../../../src/app/jsonclass/topologycall.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Topologycall = /** @class */ (function () {
    function Topologycall(nsoService) {
        this.nsoService = nsoService;
        this.arr = [];
    }
    Topologycall.prototype.getData = function (name, path) {
        var _this = this;
        var URL = {
            'URL': path
        };
        //this.arr=[];
        var element = {};
        this.nsoService.nsoServicesSchemaGetValue(URL).subscribe(function (data) {
            console.log(data);
            console.log("_________________________fg_" + path + "  " + name);
            if (data.result != null) {
                element[name] = data.result.value;
            }
            else {
                element[name] = "data not found";
            }
            _this.arr.push(element);
        });
        return this.arr;
    };
    Topologycall.prototype.getDataquery = function (name, path, xpath, selection) {
        var _this = this;
        var URL = {
            'context': path,
            'xpath': xpath,
            'selection': selection
        };
        //this.arr=[];
        var element = {};
        this.nsoService.nsoDataquery(URL).subscribe(function (data) {
            console.log(data);
            console.log("_________________________fg_" + path + "  xpath===============" + xpath);
            if (data.result != null) {
                element[name] = data.result.results;
            }
            else {
                element[name] = "data not found";
            }
            _this.arr.push(element);
        });
        return this.arr;
    };
    return Topologycall;
}());
exports.Topologycall = Topologycall;


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login_logo\">\n\t<img src=\"assets/images/cisco-logo.png\" alt=\"\">\n</div>\n<div class=\"loginBlock\">\n\t<div class=\"loginAnchor\">\n<a routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Login</a>\n\n<a routerLink=\"/login/register\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Register</a>\n</div>\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login_logo {\n  background: #0d99ce;\n  padding: 1px 5px 1px 5px;\n  text-align: left; }\n  .login_logo img {\n    max-width: 100%; }\n  .loginBlock {\n  width: 500px;\n  margin: 0 auto;\n  background: #f1f1f1;\n  padding: 23px 20px;\n  margin-top: 76px;\n  border: 1px solid #e2dfdf; }\n  .loginAnchor {\n  margin-bottom: 20px; }\n  .loginAnchor a {\n  width: 136px;\n  padding: 6px 10px;\n  display: inline-block;\n  text-align: center;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #404663;\n  background: #b0b3b5;\n  border-radius: 3px;\n  border-bottom: 3px solid #b0b3b5; }\n  .loginAnchor a.active {\n  border-bottom: 3px solid #2681ca; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/loginp/loginp.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\n   <div class=\"\">\n      <div class=\"loginWrapper\">\n         <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n            <div class=\"form-group\">                      \n               <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"Email\">\n               <!--  -->\n                <span style=\"color: red\" *ngIf=\"form.controls['email'].errors \n                && (form.controls['email'].dirty || form.controls['email'].touched)\">\n                        <span [hidden]=\"!form.controls['email'].errors.required\">\n                           First Name is Required\n                        </span>\n                         <span [hidden]=\"!form.controls['email'].errors.pattern\">\n                           Please enter Valid name between character min 3 to max 15.\n                        </span>\n\n                     </span>\n               <!--  -->\n            </div>\n            <div class=\"form-group\">\n               <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Password\">\n               <!--  -->\n               <span style=\"color: red\" *ngIf=\"form.controls['password'].errors \n                && (form.controls['password'].dirty || form.controls['password'].touched)\">\n                <span style=\"color: red\" *ngIf=\"!form.controls['password'].errors.pattern\">\n                  Enter a Valid Password\n               </span>  </span>\n                <!--  -->\n            </div>\n            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"loginBtn\">Login</button> \n            <a href=\"\">forgot password ?</a>\n         </form>\n      </div>\n       \n   </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/loginp/loginp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginWrapper {\n  width: 400px; }\n\n.loginBtn {\n  background: #0769ac;\n  border-radius: 30px;\n  font-size: 16px;\n  text-transform: uppercase;\n  padding: 0px 30px 3px 30px;\n  line-height: 31px;\n  border: none;\n  color: #fff; }\n\n.loginBtn:hover, .loginBtn:focus, .loginBtn:active {\n  background: #258dc3; }\n\n.loginWrapper a {\n  float: right;\n  font-style: italic; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginp/loginp.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var validate_service_1 = __webpack_require__("../../../../../src/app/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var LoginpComponent = /** @class */ (function () {
    function LoginpComponent(validateService, authService, router, nsoService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.nsoService = nsoService;
        this.flag = false;
    }
    LoginpComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
                //Validators.pattern('[a-zA-Z]+')
            ])),
            password: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
                //Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[_+/+-+.+@])(?=.*?[0-9]).{6,12}$')
            ]))
        });
    };
    LoginpComponent.prototype.onSubmit = function (formo) {
        var _this = this;
        console.log(formo);
        this.authService.authenticateUser(formo).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                console.log(data.userName);
                localStorage.setItem("loginUser", data.userName);
                localStorage.setItem("loginEmail", data.userEmail);
                var dataaa = localStorage.getItem("loginUser");
                console.log(dataaa);
                _this.nsoService.nsoLogin().subscribe(function (data) {
                    console.log(data);
                    if (data) {
                        _this.nsoService.nsoTrans().subscribe(function (data) {
                            console.log(data);
                            if (data) {
                                _this.router.navigate(['/dashboard']);
                            }
                            else {
                            }
                        });
                    }
                    else {
                    }
                });
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    LoginpComponent.prototype.onLoginSubmit = function () {
    };
    LoginpComponent = __decorate([
        core_1.Component({
            selector: 'app-loginp',
            template: __webpack_require__("../../../../../src/app/loginp/loginp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loginp/loginp.component.scss")]
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            auth_service_1.AuthService,
            router_1.Router,
            nso_service_1.NsoService])
    ], LoginpComponent);
    return LoginpComponent;
}());
exports.LoginpComponent = LoginpComponent;


/***/ }),

/***/ "../../../../../src/app/manage-profile/manage-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Form Name -->\n \n<div class=\"profileWrapper\">\n<!-- Text input-->\n<form [formGroup]=\"pformUpdate\" (ngSubmit)=\"onUpdate(pformUpdate.value)\">\n                \n <div class=\"form-group\" >                      \n               <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" id=\"username\" [(ngModel)]=\"profileObj.username\"  placeholder=\"User Name\">\n               <!--  -->\n                <span style=\"color: red\" *ngIf=\"pformUpdate.controls['username'].errors \n                && (pformUpdate.controls['username'].dirty)\">\n                        <span [hidden]=\"!pformUpdate.controls['username'].errors.required\">\n                           First Name is Required\n                        </span>\n                         <span [hidden]=\"!pformUpdate.controls['username'].errors.pattern\">\n                           Please enter Valid username between character min 3 to max 15.\n                        </span>\n\n                     </span>\n               <!--  -->\n            </div>\n\n                <div class=\"form-group\">\n                   \n                   <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" \n                   [value]=\"profileObj.email\" placeholder=\"Email\" disabled>\n                  \n                </div>\n                \n    \n                <div class=\"form-group\">\n                   \n                    <input type=\"text\" class=\"form-control\" name=\"customer_name\" formControlName=\"customer_name\" [(ngModel)]=\"profileObj.customer_name\" id=\"customer_name\" placeholder=\"Customer Name\">\n                    <span style=\"color: red\" *ngIf=\"pformUpdate.controls['customer_name'].errors \n                && (pformUpdate.controls['customer_name'].dirty)\">\n                    <span [hidden]=\"!pformUpdate.controls['customer_name'].errors.required\">\n                           Phon Number is Required\n                        </span>\n                      <span style=\"color: red\" *ngIf=\"!pformUpdate.controls['customer_name'].valid\">Enter Valid Number</span>\n                    </span>\n                </div>\n                <div class=\"form-group\">\n                   \n                    <input type=\"text\" class=\"form-control\" name=\"phone_number\" formControlName=\"phone_number\" id=\"phone_number\" [(ngModel)]=\"profileObj.phone_number\" placeholder=\"Phone Number\">\n                    <span style=\"color: red\" *ngIf=\"pformUpdate.controls['phone_number'].errors \n                && (pformUpdate.controls['phone_number'].dirty)\">\n                    <span [hidden]=\"!pformUpdate.controls['phone_number'].errors.required\">\n                           Phon Number is Required\n                        </span>\n                      <span style=\"color: red\" *ngIf=\"!pformUpdate.controls['phone_number'].valid\">Enter Valid Number</span>\n                    </span>\n                </div>\n                <button type=\"submit\" class=\"loginBtn\">Update</button>\n                </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-profile/manage-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileWrapper {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-profile/manage-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var validate_service_1 = __webpack_require__("../../../../../src/app/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var ManageProfileComponent = /** @class */ (function () {
    function ManageProfileComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.profileObj = {
            customer_name: "",
            email: "",
            id: "",
            password: "",
            phone_number: "",
            registered_date: "",
            updated_date: "",
            username: ""
        };
    }
    ManageProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginEmail = localStorage.getItem("loginEmail");
        this.pformUpdate = new forms_1.FormGroup({
            username: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern('[a-zA-Z]+')
            ])),
            // email: new FormControl(""),
            customer_name: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern('[a-zA-Z]+')
            ])),
            phone_number: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
                //Validators.pattern('[0-9]+{12}')
            ])),
        });
        var User = {
            "email": this.loginEmail
        };
        this.authService.profileDataUser(User).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.profileObj = data.userList[0];
            }
            else {
            }
        });
    };
    ManageProfileComponent.prototype.onUpdate = function (form) {
        console.log(form);
        form['email'] = this.loginEmail;
        console.log(form);
        this.authService.profileUpdateUser(form).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                // this.router.navigate(['/login']);
                alert(data.message);
            }
            else {
                //this.router.navigate(['']);
            }
        });
    };
    ManageProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-profile',
            template: __webpack_require__("../../../../../src/app/manage-profile/manage-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-profile/manage-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService, auth_service_1.AuthService, router_1.Router])
    ], ManageProfileComponent);
    return ManageProfileComponent;
}());
exports.ManageProfileComponent = ManageProfileComponent;


/***/ }),

/***/ "../../../../../src/app/modalpopup/modalpopup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n                     <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n                   </div>\n                   <div class=\"modal-body\" id=\"topologycontainer\">\n                     \n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n                   </div>\n                 </div>\n              </div>"

/***/ }),

/***/ "../../../../../src/app/modalpopup/modalpopup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modalpopup/modalpopup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ModalpopupComponent = /** @class */ (function (_super) {
    __extends(ModalpopupComponent, _super);
    function ModalpopupComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ModalpopupComponent.prototype.ngOnInit = function () {
        var topologyData = {
            "nodes": [
                {
                    "id": 0,
                    "name": "New York"
                },
                {
                    "id": 1,
                    "name": "Los Angeles"
                },
                {
                    "id": 2,
                    "name": "Houston"
                }
            ],
            "links": [
                {
                    "source": 0,
                    "target": 1
                },
                {
                    "source": 0,
                    "target": 2
                }
            ]
        };
        var app = new nx.ui.Application();
        // configuration object for next
        var topologyConfig = {
            // special configuration for nodes
            "nodeConfig": {
                "label": "model.name",
                "iconType": "router"
            },
            // special configuration for links
            "linkConfig": {
                "linkType": "curve"
            },
            // if true, the nodes' icons are shown, otherwise a user sees a dot instead
            "showIcon": true,
            // automatically compute the position of nodes
            "dataProcessor": "force"
        };
        // instantiate Topology class
        var topology = new nx.graphic.Topology(topologyConfig);
        // load topology data from app/data.js
        topology.data(topologyData);
        // bind the topology object to the app
        topology.attach(app);
        // app must run inside a specific container. In our case this is the one with id="topology-container"
        app.container(document.getElementById("topologycontainer"));
        console.log(app);
    };
    ModalpopupComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    };
    ModalpopupComponent = __decorate([
        core_1.Component({
            selector: 'app-modalpopup',
            template: __webpack_require__("../../../../../src/app/modalpopup/modalpopup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modalpopup/modalpopup.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService])
    ], ModalpopupComponent);
    return ModalpopupComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
exports.ModalpopupComponent = ModalpopupComponent;


/***/ }),

/***/ "../../../../../src/app/nso.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var NsoService = /** @class */ (function () {
    function NsoService(http) {
        this.http = http;
    }
    NsoService.prototype.nsoLogin = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/login', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoLogout = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/logout', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoTrans = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/trans', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoCommit = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/commit', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoData = function (json) {
        console.log(json);
        console.log("llllllllllllll");
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/data', json, { headers: headers })
            .map(function (res) {
            console.log(res);
            console.log("~~~~~~~~~");
            return res.json();
        });
    };
    NsoService.prototype.nsoServices = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/services', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoServicesSchema = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/schema', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoServicesSchemaByLink = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/schemalink', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoServicesSchemaGetValue = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/getvalue', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoServicesSchemaSetValue = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/setvalue', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoServicesSchemaGetCase = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/getcase', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoDataquery = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/data/query', json, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    NsoService.prototype.nsoServicesSchemaExists = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/exists', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService.prototype.nsoServicesCheckSync = function (json) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/services/sync', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NsoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NsoService);
    return NsoService;
}());
exports.NsoService = NsoService;


/***/ }),

/***/ "../../../../../src/app/parentchild/parentchild.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n \t<div *ngFor=\"let _obj1 of ParentChild['children']\">\n \t\t <div *ngIf=\"_obj1.type=='div'\" class=\"form-group col-md-12\">\n\t\t\t\t<div *ngIf=\"_obj1.presence\">\n\t\t\t\t\t<h3><input type=\"checkbox\" name=\"{{_obj1['name']}}\"> {{_obj1['name']}} </h3>\n\t\t\t\t\t \n\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!_obj1.presence\">\n\t\t\t\t\t<h5>{{_obj1['name']}} </h5>\n\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"_obj1.children\">\n \n\n\t\t\t\t\t<app-parentchild [ParentChild]=\"_obj1\"></app-parentchild>\n\t\t\t\t</div> \n\n \t\t </div>\n \t\t \n \t\t \n \t</div>\n\n \t<div *ngIf=\"ParentChild.children\">\n \t<app-divfields [divChild]=\"ParentChild.children\"></app-divfields>\n \t</div>\n\n \t <div *ngIf=\"ParentChild.type=='multiselect'\" class=\"form-group col-md-12\">\n\t\n       <label for=\"{{ParentChild.name}}\">{{ParentChild.name}}</label>\n       <select class=\"form-control\" multiple>\n         <option value=\"\">-</option>\n         <option *ngFor=\"let obj1 of ParentChild.value\" value=\"{{obj1}}\" selected=\"{{obj1}}\">{{obj1}}</option>\n      </select>\n   \t</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/parentchild/parentchild.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  font: normal 21px \"Calibri\", sans-serif;\n  color: #dc9613;\n  margin: 16px 0 25px 16px;\n  width: 96%;\n  text-transform: capitalize;\n  border-bottom: 1px solid #ece9e9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parentchild/parentchild.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ParentchildComponent = /** @class */ (function () {
    function ParentchildComponent(router, nsoService, http, route) {
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.route = route;
    }
    ParentchildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ParentchildComponent.prototype, "ParentChild", void 0);
    ParentchildComponent = __decorate([
        core_1.Component({
            selector: 'app-parentchild',
            template: __webpack_require__("../../../../../src/app/parentchild/parentchild.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parentchild/parentchild.component.scss")]
        }),
        __metadata("design:paramtypes", [router_2.Router,
            nso_service_1.NsoService, http_1.Http,
            router_1.ActivatedRoute])
    ], ParentchildComponent);
    return ParentchildComponent;
}());
exports.ParentchildComponent = ParentchildComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Form Name -->\n \n<div class=\"loginWrapper\">\n<!-- Text input-->\n<form [formGroup]=\"rform\" (ngSubmit)=\"onSubmit(rform.value)\">\n                \n <div class=\"form-group\">                      \n               <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" id=\"username\" placeholder=\"User Name\">\n               <!--  -->\n                <span style=\"color: red\" *ngIf=\"rform.controls['username'].errors \n                && (rform.controls['username'].dirty || rform.controls['username'].touched)\">\n                        <span [hidden]=\"!rform.controls['username'].errors.required\">\n                           First Name is Required\n                        </span>\n                         <span [hidden]=\"!rform.controls['username'].errors.pattern\">\n                           Please enter Valid username between character min 3 to max 15.\n                        </span>\n\n                     </span>\n               <!--  -->\n            </div>\n\n                <div class=\"form-group\">\n                   \n                   <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"Email\">\n                   <span style=\"color: red\" *ngIf=\"rform.controls['email'].errors \n                && (rform.controls['email'].dirty || rform.controls['email'].touched)\">\n                        <span [hidden]=\"!rform.controls['email'].errors.required\">\n                           Last Name is Required\n                        </span>\n                         <span [hidden]=\"!rform.controls['email'].errors.pattern\">\n                           Please enter Valid name between character min 3 to max 15.\n                        </span>\n\n                     </span>\n                </div>\n                \n                <div class=\"form-group\">\n                   \n                    <input type=\"text\" class=\"form-control\" name=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Password\">\n                    <span style=\"color: red\" *ngIf=\"rform.controls['password'].errors \n                && (rform.controls['password'].dirty || rform.controls['password'].touched)\">\n                    <span [hidden]=\"!rform.controls['password'].errors.required\">\n                           Phon Number is Required\n                        </span>\n                      <span style=\"color: red\" *ngIf=\"!MyForm.controls['password'].valid\">Enter Valid Number</span>\n                    </span>\n                </div>\n    \n                <div class=\"form-group\">\n                   \n                    <input type=\"text\" class=\"form-control\" name=\"customer_name\" formControlName=\"customer_name\" id=\"customer_name\" placeholder=\"Customer Name\">\n                    <span style=\"color: red\" *ngIf=\"rform.controls['customer_name'].errors \n                && (rform.controls['customer_name'].dirty || rform.controls['customer_name'].touched)\">\n                    <span [hidden]=\"!rform.controls['customer_name'].errors.required\">\n                           Phon Number is Required\n                        </span>\n                      <span style=\"color: red\" *ngIf=\"!MyForm.controls['customer_name'].valid\">Enter Valid Number</span>\n                    </span>\n                </div>\n                <div class=\"form-group\">\n                   \n                    <input type=\"text\" class=\"form-control\" name=\"phone_number\" formControlName=\"phone_number\" id=\"phone_number\" placeholder=\"Phone Number\">\n                    <span style=\"color: red\" *ngIf=\"rform.controls['phone_number'].errors \n                && (rform.controls['phone_number'].dirty || rform.controls['phone_number'].touched)\">\n                    <span [hidden]=\"!rform.controls['phone_number'].errors.required\">\n                           Phon Number is Required\n                        </span>\n                      <span style=\"color: red\" *ngIf=\"!MyForm.controls['phone_number'].valid\">Enter Valid Number</span>\n                    </span>\n                </div>\n                <button type=\"submit\" class=\"registerBtn\">Register</button>\n                </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginWrapper {\n  width: 400px; }\n\n.registerBtn {\n  background: #0769ac;\n  border-radius: 30px;\n  font-size: 16px;\n  text-transform: uppercase;\n  padding: 0px 30px 3px 30px;\n  line-height: 31px;\n  border: none;\n  color: #fff; }\n\n.registerBtn:hover, .registerBtn:active, .registerBtn:focus {\n  background: #258dc3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var validate_service_1 = __webpack_require__("../../../../../src/app/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.rform = new forms_1.FormGroup({
            username: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern('[a-zA-Z]+')
            ])),
            email: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
                //Validators.pattern('[a-zA-Z]+')
            ])),
            password: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
                // Validators.pattern('[a-zA-Z]+')
            ])),
            customer_name: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern('[a-zA-Z]+')
            ])),
            phone_number: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
                //Validators.pattern('[0-9]+{12}')
            ])),
        });
    };
    RegisterComponent.prototype.onSubmit = function (User) {
        var _this = this;
        console.log(User);
        /* if (!this.validateService.validateRegister(User)) {
           console.log("Please fill in all fields");
            return false;
         }
         if (!this.validateService.validateEmail(User.email)) {
           console.log("Please use a valid email");
           return false;
         }*/
        this.authService.registerUser(User).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService, auth_service_1.AuthService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/service-schema/service-schema.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n <h1>{{parentName}}</h1>\r\n    <!-- regular accordion -->\r\n     <accordion [showArrows]=\"true\">\r\n \t\t<accordion-group heading=\"{{parentName}}\">\r\n           <app-divfields [divChild]=\"parentChild\"></app-divfields>\r\n           <!-- <div class=\"jsonButton clearfix\">\r\n           \t\t\t\t\t<span *ngFor=\"let obj of json\">\r\n           \t\t\t\t\t\t<button *ngIf=\"obj.type=='button'\" type=\"button\" class=\"btn btn-primary\">{{obj.name}}</button>\r\n           \t\t\t\t\t</span>\r\n           \t\t\t\t</div> -->\r\n        </accordion-group>\r\n        <accordion-group *ngFor=\"let obj1 of container\" heading=\"{{obj1.name}}\" >\r\n \t\t\t<app-parentchild [ParentChild]=\"obj1\"></app-parentchild>\r\n        </accordion-group>\r\n     </accordion>\r\n \r\n  \r\n \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/service-schema/service-schema.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*******************************\r\n* Does not work properly if \"in\" is added after \"collapse\".\r\n* Get free snippets on bootpen.com\r\n*******************************/\n.panel-group .panel {\n  border-radius: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-color: #EEEEEE; }\n.panel-default > .panel-heading {\n  padding: 0;\n  border-radius: 0;\n  color: #212121;\n  background-color: #FAFAFA;\n  border-color: #EEEEEE; }\n.panel-title {\n  font-size: 14px; }\n.panel-title > a {\n  display: block;\n  padding: 15px;\n  text-decoration: none; }\n.more-less {\n  float: right;\n  color: #212121; }\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #EEEEEE; }\n/* ----- v CAN BE DELETED v ----- */\nbody {\n  background-color: #26a69a; }\n.demo {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1; }\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px 60px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  font-size: 17px; }\n.accordion {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n.active, .accordion:hover {\n  background-color: #ccc; }\n.panel {\n  padding: 0 18px;\n  display: none;\n  background-color: white;\n  overflow: hidden; }\n.bttn_actn {\n  display: inline-block;\n  width: 130px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-schema/service-schema.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Jsonview_1 = __webpack_require__("../../../../../src/app/jsonclass/Jsonview.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ServiceSchemaComponent = /** @class */ (function () {
    function ServiceSchemaComponent(router, nsoService, http, route) {
        var _this = this;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.getParam = params; });
    }
    ServiceSchemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getParam = this.route.params.subscribe(params => params);
        //console.log(this.getParam.id);
        if (typeof this.getParam.id4 != 'undefined') {
            this.serviceName = this.getParam.id;
            this.selection = this.getParam.id3;
        }
        else {
            this.serviceName = this.getParam.id.replace("link", "ml3:vpn");
            this.selection = this.getParam.id2;
        }
        var User = {
            'serviceName': this.serviceName,
            "selection": this.selection
        };
        this.nsoService.nsoServicesSchema(User).subscribe(function (data) {
            console.log("data==============================");
            console.log(data);
            _this.metaData = data['result']['data'];
            var _data = data['result']['data'];
            var _meta = data['result']['meta'];
            var _keyPath = _meta['keypath'];
            if (data.result) {
                var HTML = new Jsonview_1.Jsonview(_this.nsoService, _data, _meta, _keyPath);
                //console.log("call class method");
                console.log(HTML.firstAcordian());
                var jsonData = HTML.firstAcordian();
                //console.log(jsonData[0].name);
                _this.parentName = jsonData[0].name;
                _this.childrenList = jsonData[0].children;
                //console.log(jsonData[0].type);
                //console.log(jsonData[0].children)
                var g = jsonData[0].children.length;
                _this.json = jsonData[0].children;
                _this.pJSON = jsonData[0].name;
                var parChi = [];
                var contai = [];
                for (var i = 0; i < g; i++) {
                    //console.log('////////////////////////////');
                    if (_this.json[i].type == "div") {
                        //console.log(this.json[i].name);
                        contai.push(_this.json[i]);
                    }
                    else {
                        parChi.push(_this.json[i]);
                    }
                }
                _this.parentChild = _this.json;
                _this.container = contai;
                //console.log("++++++++++++++++++++++++++++++");
                //console.log(this.parentChild);
                //console.log(this.container);
            }
            else {
                _this.router.navigate(['']);
            }
        });
        ////////////
        function toggleIcon(e) {
            $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('glyphicon-plus glyphicon-minus');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);
        ////////////
    };
    ServiceSchemaComponent.prototype.getSchema = function (path, qname, name) {
        var _this = this;
        alert(path + "/" + qname);
        var contai = [];
        var URL = {
            'URL': (path + "/" + qname)
        };
        this.nsoService.nsoServicesSchemaByLink(URL).subscribe(function (data) {
            console.log(data);
            _this.metaData = data['result']['data'];
            var _data = data['result']['data'];
            var _meta = data['result']['meta'];
            var _keyPath = _meta['keypath'];
            if (data.result) {
                var HTML = new Jsonview_1.Jsonview(_this.nsoService, _data, _meta, _keyPath);
                console.log("call class method");
                console.log(HTML.firstAcordian());
                var jsonData = HTML.firstAcordian();
                var children = jsonData[0].children;
                console.log(children);
                for (var i = 0; i < children.length; i++) {
                    contai.push(children[i]);
                    if (children[i].children != null) {
                        //this.getSchema(children[i].path,children[i].qname,children[i].name);
                    }
                }
                _this.subParentChild = contai;
            }
        });
        console.log("----------------------------------");
        console.log(this.subParentChild);
        console.log("++++++++++++++++++++++++++++++++++");
    };
    ServiceSchemaComponent = __decorate([
        core_1.Component({
            selector: 'app-service-schema',
            template: __webpack_require__("../../../../../src/app/service-schema/service-schema.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-schema/service-schema.component.scss")]
        }),
        __metadata("design:paramtypes", [router_2.Router,
            nso_service_1.NsoService, http_1.Http,
            router_1.ActivatedRoute])
    ], ServiceSchemaComponent);
    return ServiceSchemaComponent;
}());
exports.ServiceSchemaComponent = ServiceSchemaComponent;


/***/ }),

/***/ "../../../../../src/app/service-termination-tab/service-termination-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\t<div class=\"row\">\n\n\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"rowHeader\">\n\t\t\t\t\t<th *ngFor=\"let hLists of hList\">{{hLists}}</th>\n\n\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<ng-container *ngIf=\"bTabData=='/ml2:mpls-l2vpn'; else l3vpn\">\n\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr *ngFor=\"let uLists of uList\">\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a><br>\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>{{uLists[1]}}</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button *ngIf=\"uLists[3] && uLists[3]['result']\" type=\"button\" class=\"btn btn-primary\" (click)=\"showConfirm(uLists[0],bTabData,'re-deploy')\" \n\t\t\t\t\t\t\t[disabled] = \"(uLists[3] && uLists[3]['result']=='true') ? true : false\"> Activate\n\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t<button *ngIf=\"uLists[3] && uLists[3]['result']\" type=\"button\" class=\"btn btn-danger\" (click)=\"showConfirm(uLists[0],bTabData,'un-deploy')\" [disabled] = \"(uLists[3] && uLists[3]['result']=='false') ? true : false\"> Deactivate\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t<button *ngIf=\"uLists[3] && uLists[3]['error']\" type=\"button\" class=\"btn btn-danger\" (click)=\"showError(uLists[3]['error'])\">Service Error\n\t\t\t\t\t\t</button>\n\n\t\t\t\t\t</td>\n\n\n\n\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\n\n\n\t\t\t</ng-container>\n\t\t\t<ng-template #l3vpn>\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr *ngFor=\"let uLists of uList\">\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0] ]\">{{uLists[0]}}</a><br>\n\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-plus\" (click)=\"showLink(uLists[0],bTabData)\"></a>\t\n\t\t\t\t\t\t\t\n\n\n\n\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>{{uLists[1]}}</td>\n\n\n\n\n\n\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</ng-template>\n\n\n\n\n\n\n\n\n\t\t</table>\t\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/service-termination-tab/service-termination-tab.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.dataTable.no-footer {\n  border-bottom: 1px solid #c5c3c3; }\n\n.dataTables_wrapper .dataTables_filter {\n  width: 266px; }\n\n.dataTables_wrapper .dataTables_filter input {\n  width: 196px;\n  padding: 3px 5px; }\n\n.wrapper {\n  margin: 0 auto;\n  background: #fcfcfd;\n  padding: 20px 34px; }\n\ntable {\n  border: 1px solid #c5c3c3;\n  border-radius: 4px; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  border-bottom: 0px;\n  padding: 7px 18px; }\n\n.rowHeader {\n  border-radius: 4px;\n  background: #d2d6d6;\n  border: 1px solid gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-termination-tab/service-termination-tab.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var service_termination_component_1 = __webpack_require__("../../../../../src/app/service-termination/service-termination.component.ts");
var ServiceTerminationTabComponent = /** @class */ (function () {
    function ServiceTerminationTabComponent(sanitized, router, nsoService, http, dialogService, elementRef, ngxSmartModalService, authService) {
        this.sanitized = sanitized;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.elementRef = elementRef;
        this.ngxSmartModalService = ngxSmartModalService;
        this.authService = authService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
        this.dtOptions1 = {};
        this.dtTrigger1 = new Subject_1.Subject();
        this.list2 = [];
        this.type = "link";
    }
    ServiceTerminationTabComponent.prototype.ngAfterViewInit = function () {
    };
    ServiceTerminationTabComponent.prototype.getValus = function (val, val2) {
        var path = val;
        /* this.nsoService.nsoServicesCheckSync(path).subscribe(data => {
              if (data.result) {
                  this.uList = data.result.results;
              } else {
                 
              }
          });*/
        return "a";
    };
    ServiceTerminationTabComponent.prototype.showError = function (errorV) {
        alert(errorV);
    };
    ServiceTerminationTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = ['ckt-id', 'bandwidth', 'Update_bandwidth'];
        if (this.bTabData.indexOf("link") != -1) {
            list = ['vpn-id', 'mesh-rd-value'];
        }
        this.hList = list;
        var User = {
            'serviceName': this.bTabData,
            "selection": list
        };
        var _that = this.bTabData;
        this.nsoService.nsoData(User).subscribe(function (data) {
            var _amit = data.result.results.map(function (x, y, z) {
                console.log('___________________');
                console.log(x);
                var _index = x[0];
                var path = _that + "{" + _index + "}";
                var User1 = {
                    'URL': path,
                    'action': 'check-sync'
                };
                var disable = _this.nsoService.nsoServicesCheckSync(User1).subscribe(function (datas) {
                    console.log("------------------" + path);
                    console.log(datas);
                    console.log("------------------");
                    if (datas.error) {
                        //if(datas.error){
                        console.log(typeof datas.error.data.reason);
                        //return datas.error.data.reason;
                        x.push({ 'error': datas.error.data.reason });
                    }
                    if (datas.result) {
                        x.push({ 'result': datas.result[0].value });
                        //x.push(datas.result[0].value);
                    }
                });
                //x.push(disable)
                console.log('___________________');
            });
            console.log(data.result.results);
            if (data.result) {
                _this.uList = data.result.results;
            }
            else {
                _this.router.navigate(['']);
            }
        });
        //////////////////
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data', User, { headers: headers })
            .map(this.extractData)
            .subscribe(function (data) {
            //this.uList = data;
            // Calling the DT trigger to manually render the table
            _this.dtTrigger.next();
        });
    };
    ServiceTerminationTabComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ServiceTerminationTabComponent.prototype.extractData1 = function (res) {
        var body = res.json();
        return body || {};
    };
    ServiceTerminationTabComponent.prototype.slideTable = function (_path, _Val) {
    };
    ServiceTerminationTabComponent.prototype.showConfirm = function (vpnName, serviceName, action) {
        alert(vpnName);
        alert(serviceName);
        alert(action);
        var path = serviceName + "{" + vpnName + "}";
        var User1 = {
            'URL': path,
            'action': action
        };
        this.nsoService.nsoServicesCheckSync(User1).subscribe(function (datad) {
            console.log("------------------" + path + " ---]===" + action);
            console.log(datad);
            console.log("------------------");
            /*if(datas.error){
                //if(datas.error){
                    console.log(typeof datas.error.data.reason);
                //return datas.error.data.reason;
                x.push({'error':datas.error.data.reason});
            }
            if(datas.result){
                x.push({'result':datas.result[0].value});
                //x.push(datas.result[0].value);
            }*/
        });
    };
    ServiceTerminationTabComponent.prototype.showLink = function (vpnId, path) {
        var _this = this;
        var dataAll = {};
        var objs = new service_termination_component_1.ServiceTerminationComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService, this.authService);
        objs.list2 = ['ckt-id', 'admin-state', 'customer-address', 'qos/bandwidth', 'Update_Bandwidth'];
        this.hList1 = this.list2;
        var json = {
            context: path.replace("/link", ""),
            xpath: "link[starts-with(vpn-id,'" + vpnId + "')]",
            selection: objs.list2
        };
        this.check = vpnId;
        this.nsoService.nsoDataquery(json).subscribe(function (data) {
            if (data.result) {
                objs.uList1 = data.result.results;
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': objs.uList1,
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('l3VPNSTModal').onOpen.subscribe(function (event) {
                    //event['data']=dataAll;
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNSTModal');
                    }
                });
                objs.ngxSmartModalService.getModal('l3VPNSTModal').open();
            }
            else {
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': {},
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('l3VPNSTModal').onOpen.subscribe(function (event) {
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNSTModal');
                    }
                });
                //objs.ngxSmartModalService.setModalData(dataAll, 'l3VPNModal');
                objs.ngxSmartModalService.getModal('l3VPNSTModal').open();
            }
        });
        objs.ngxSmartModalService.getModal('l3VPNSTModal').onClose.subscribe(function (event) {
            event['data'].uList1 = [];
            dataAll = {};
        });
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        this.dtOptions1 = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data/query', json, { headers: headers })
            .map(this.extractData1)
            .subscribe(function (data) {
            //this.uList = data;
            // Calling the DT trigger to manually render the table
            _this.dtTrigger1.next();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ServiceTerminationTabComponent.prototype, "bTabData", void 0);
    __decorate([
        core_1.ViewChild('dataContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], ServiceTerminationTabComponent.prototype, "d1", void 0);
    ServiceTerminationTabComponent = __decorate([
        core_1.Component({
            selector: 'app-service-termination-tab',
            template: __webpack_require__("../../../../../src/app/service-termination-tab/service-termination-tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-termination-tab/service-termination-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, router_1.Router, nso_service_1.NsoService, http_1.Http, ng2_bootstrap_modal_1.DialogService,
            core_1.ElementRef, ngx_smart_modal_1.NgxSmartModalService, auth_service_1.AuthService])
    ], ServiceTerminationTabComponent);
    return ServiceTerminationTabComponent;
}());
exports.ServiceTerminationTabComponent = ServiceTerminationTabComponent;


/***/ }),

/***/ "../../../../../src/app/service-termination/service-termination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Service Termination</h1>\n\t<div class=\"row\">\n\n    <div class=\" tabData\">\n\n\n\n      <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myTabs\">\n        <li  *ngFor=\"let uLists of uList; let index = index\"\n        class=\"{{(index == 0)? 'active' : ''}}\" >\n        <a  \n        href=\"#{{uLists | specialchar}}\" \n        attr.aria-controls=\"{{uLists | specialchar}}\" \n        role=\"tab\"  \n        data-toggle=\"tab\">{{uLists}}</a>\n      </li>\n\n\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\" >\n     <div *ngFor=\"let uLists1 of uList; let index1 = index\" \n     class=\"tab-pane {{(index1 == 0)? 'active' : ''}}\" \n     id=\"{{uLists1 | specialchar}}\" \n     role=\"tabpanel\" attr.aria-labelledby=\"{{uLists1 | specialchar}}\">\n     <div class=\"wrapper\"> \n      <app-service-termination-tab [bTabData]=\"uLists1\">\n\n      </app-service-termination-tab></div>  \n    </div>\n\n\n  </div>\n</div>\n\n</div>\n</div>\n\n<ngx-smart-modal [customClass]=\"'CssAmit'\"   #l3VPNSTModal  [identifier]=\"'l3VPNSTModal'\" [customClass]=\"'large-modal'\">\n  <p><br><br></p>\n  <div *ngIf=\"l3VPNSTModal.hasData()\">\n <table datatable class=\"row-border hover\" id=\"vpnLink\">\n <thead>\n       <tr class=\"rowHeader\">\n         <th *ngFor=\"let hLists2 of l3VPNSTModal.getData().hList1\">{{hLists2}}</th>\n    \n       </tr>\n     </thead>\n     <tbody *ngIf=\"l3VPNSTModal.getData().uList1\">\n      <tr *ngFor=\"let uLists2 of l3VPNSTModal.getData().uList1\">\n        \n     <td><a [routerLink]=\"['/dashboard/schemalink', l3VPNSTModal.getData().bTabData, l3VPNSTModal.getData().vpnId, uLists2[0], 'link']\">{{uLists2[0]}}</a>\n     </td>\n     <td>{{uLists2[1]}}</td>\n     <td>{{uLists2[2]}}</td>\n     <td>{{uLists2[3]}}</td>\n          <td>\n            <a class=\"btn btn-primary\" (click)=\"l3vpnSTshow(uLists2[0],uLists2[3],l3VPNSTModal.getData().bTabData);l3VPNSTModal.close()\">Activate</a>\n            <a class=\"btn btn-danger\" (click)=\"l3vpnSTshow(uLists2[0],uLists2[3],l3VPNSTModal.getData().bTabData);l3VPNSTModal.close()\">Deactivate</a>\n                     </td>\n      </tr>\n     </tbody>\n  </table>\n             </div>\n</ngx-smart-modal>"

/***/ }),

/***/ "../../../../../src/app/service-termination/service-termination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabData {\n  background: #ececec;\n  padding: 0px;\n  max-width: 1106px;\n  margin: 0 auto;\n  -webkit-border-top-left-radius: 4px;\n  -webkit-border-top-right-radius: 4px;\n  -moz-border-radius-topleft: 4px;\n  -moz-border-radius-topright: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #dedddd; }\n\n.nav-tabs {\n  border-bottom: 0px; }\n\n.nav > li > a {\n  color: #6b6969;\n  font-size: 15px;\n  border: none;\n  padding: 9px 30px;\n  font-weight: bold; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  background-color: #757779;\n  border: none;\n  -webkit-box-shadow: 3px 1px 2px #ccc;\n          box-shadow: 3px 1px 2px #ccc;\n  color: #fff;\n  border-bottom: 5px solid #188ed4 !important; }\n\n.nav > li > a:focus, .nav > li > a:hover {\n  background-color: #fcfdfd;\n  border-bottom: 5px solid #188ed4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-termination/service-termination.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
var ServiceTerminationComponent = /** @class */ (function () {
    function ServiceTerminationComponent(router, nsoService, http, dialogService, ngxSmartModalService, authService) {
        var _this = this;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.authService = authService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
        this.toggleButton = true;
        this.btnDisabled = true;
        this.nsoService.nsoServices().subscribe(function (data) {
            console.log(data);
            if (data.result) {
                _this.uList = Object.keys(data.result.service_points);
            }
            else {
                _this.router.navigate(['']);
            }
        });
    }
    ServiceTerminationComponent.prototype.ngOnInit = function () {
    };
    ServiceTerminationComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            console.log('hello' + event.target.checked);
            this.toggleButton = !this.toggleButton;
        }
        else {
            this.toggleButton = true;
        }
    };
    ServiceTerminationComponent.prototype.resetAll = function (event) {
        this.btnDisabled = true;
        this.values = "";
        $("#checkbox").prop("checked", false);
        //  $('#Btxt').val("New value");
        this.toggleButton = true;
    };
    ServiceTerminationComponent.prototype.clr = function (event) {
        $('#Btxt').val('');
        //document.getElementsByName('elementid').value = "";
    };
    ServiceTerminationComponent.prototype.eventHandler = function (e) {
        this.btnDisabled = false;
    };
    ServiceTerminationComponent.prototype.l3vpnSTshow = function (cktId_Val, bndWidth_Val, serviceName) {
        console.log("cktId_Val" + cktId_Val);
        console.log("Value_bandwidth" + bndWidth_Val);
        console.log("Value of btadate" + serviceName);
        var data = {
            'ckt_id': cktId_Val,
            'serviceName': serviceName,
            'bandwidth': bndWidth_Val
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ServiceTerminationComponent.prototype, "bTabData", void 0);
    ServiceTerminationComponent = __decorate([
        core_1.Component({
            selector: 'app-service-termination',
            template: __webpack_require__("../../../../../src/app/service-termination/service-termination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-termination/service-termination.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, nso_service_1.NsoService, http_1.Http, ng2_bootstrap_modal_1.DialogService,
            ngx_smart_modal_1.NgxSmartModalService, auth_service_1.AuthService])
    ], ServiceTerminationComponent);
    return ServiceTerminationComponent;
}());
exports.ServiceTerminationComponent = ServiceTerminationComponent;


/***/ }),

/***/ "../../../../../src/app/specialchar.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SpecialcharPipe = /** @class */ (function () {
    function SpecialcharPipe() {
    }
    SpecialcharPipe.prototype.transform = function (value, args) {
        var _specialChar = value.replace(/[^a-zA-Z0-9]/g, '_');
        return _specialChar;
    };
    SpecialcharPipe = __decorate([
        core_1.Pipe({
            name: 'specialchar'
        })
    ], SpecialcharPipe);
    return SpecialcharPipe;
}());
exports.SpecialcharPipe = SpecialcharPipe;


/***/ }),

/***/ "../../../../../src/app/sub-parent-child/sub-parent-child.component.html":
/***/ (function(module, exports) {

module.exports = " \t<div  *ngFor=\"let val of subParentChild\" >\n \t\t\t\t\n\t\t\t\t\t<!-- <div  *ngFor=\"let val of obj\" > -->\n\t\t\t\t\t\t <accordion>\n\t\t\t\t\t\t<accordion-group *ngIf=\"val.type=='div'\">\n\t\t\t\t\t\t\t<accordion-heading>\n\t\t\t\t        \t\t<input type=\"checkbox\" *ngIf=\"val.presence\">\n\t\t\t\t        \t\t<accordion-toggle>{{val.name}}</accordion-toggle>\n\t\t\t\t        \t</accordion-heading>\n\t\t\t\t        \t<app-sub-parent-child [subParentChild]=\"val.children\" *ngIf=\"val.children\"></app-sub-parent-child>\n\t\t\t\t\t\t</accordion-group>\n\t\t\t\t\t\t </accordion>\n\t\t\t\t\t\t\n\n\n \t\t\t\n \t\t\t\t\n\t\t\t\t\t<!-- <div  *ngFor=\"let val of obj\" > -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t \t<div class=\"form-group col-md-4\" *ngIf=\"val.type=='text'\" >\n\t\t\t\t\t\t\t<label for=\"{{val.name}}\">{{val.name}}</label>\n\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"text\" id=\"text\" placeholder=\"{{val.name}}\">\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"val.type=='select'\" class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t<label for=\"{{val.name}}\">{{val.name}}</label>\n\t\t\t\t\t\t\t<select class=\"form-control\" >\n\t\t\t\t\t\t\t\t<option *ngFor=\"let obj2 of val.option\" value=\"{{obj2}}\">{{obj2}}</option>\n\n\t\t\t\t\t\t\t</select>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n \t\t\t\t\t\t\n\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<div class=\"form-group col-md-6\" *ngFor=\"let val of ParentChild\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"val.type=='checkbox'\" class=\"col-md-4\">\n\t\t\t\t\t\t\t<label for=\"{{val.name}}\">{{val.name}}</label>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkbox\" value=\"check\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\n"

/***/ }),

/***/ "../../../../../src/app/sub-parent-child/sub-parent-child.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sub-parent-child/sub-parent-child.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SubParentChildComponent = /** @class */ (function () {
    function SubParentChildComponent() {
    }
    SubParentChildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SubParentChildComponent.prototype, "subParentChild", void 0);
    SubParentChildComponent = __decorate([
        core_1.Component({
            selector: 'app-sub-parent-child',
            template: __webpack_require__("../../../../../src/app/sub-parent-child/sub-parent-child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sub-parent-child/sub-parent-child.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubParentChildComponent);
    return SubParentChildComponent;
}());
exports.SubParentChildComponent = SubParentChildComponent;


/***/ }),

/***/ "../../../../../src/app/tab-data/tab-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n \n <div class=\"row\">\n \t\n\t\t <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t<thead>\n\t\t      <tr class=\"rowHeader\">\n\t\t        <th *ngFor=\"let hLists of hList\">{{hLists}}</th>\n\t\t\t\t<th>topology</th>\n\t\t      </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t     <tr *ngFor=\"let uLists of uList\">\n\t\t     \t \n\t\t\t\t<td><a [routerLink]=\"['/dashboard/schema', bTabData, uLists[0]]\">{{uLists[0]}}</a>\n\t\t\t\t\t<div *ngIf=\"bTabData=='/ml3:mpls-l3vpn/link'\">\n\t\t\t\t<a class=\"glyphicon glyphicon-chevron-right\" (click)=\"showLink(uLists[0],bTabData)\"></a><!-- \t\n\t\t\t\t\t<div *ngIf=\"check==uLists[0]\">\n\t\t\t\t\t\t <table datatable [dtOptions]=\"dtOptions1\" [dtTrigger]=\"dtTrigger1\" class=\"row-border hover\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t      <tr class=\"rowHeader\">\n\t\t\t\t\t\t\t        <th *ngFor=\"let hLists1 of hList1\">{{hLists1}}</th>\n\t\t\t\t\t\t\t\t\t<th>topology</th>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t     <tr *ngFor=\"let uLists1 of uList1\">\n\t\t\t\t\t\t\t     \t \n\t\t\t\t\t\t\t\t\t<td><a [routerLink]=\"['/dashboard/schemalink', bTabData, uLists[0], uLists1[0], 'link']\">{{uLists1[0]}}</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>{{uLists1[1]}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{uLists1[2]}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{uLists1[3]}}</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t<a (click)=\"showConfirm(uLists1[0],bTabData)\">Device Cloud</a>\n\t\t\t\t\t\t\t\t\t\t </td>\n\t\t\t\t\t\t\t     </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t </table></div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td>{{uLists[1]}}</td>\n\t\t\t\t<td>{{uLists[2]}}</td>\n\t\t\t\t<td>{{uLists[3]}}</td>\n\t\t\t\t<td>\n<a (click)=\"showConfirm(uLists[0],bTabData)\">Device Cloud</a>\n\t\t\t\t\t </td>\n\t\t     </tr>\n\t\t    </tbody>\n\t\t </table>\n\t\t   \n </div>\n</div>\n\n\n "

/***/ }),

/***/ "../../../../../src/app/tab-data/tab-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.dataTable.no-footer {\n  border-bottom: 1px solid #c5c3c3; }\n\n.dataTables_wrapper .dataTables_filter {\n  width: 266px; }\n\n.dataTables_wrapper .dataTables_filter input {\n  width: 196px;\n  padding: 3px 5px; }\n\n.wrapper {\n  margin: 0 auto;\n  background: #fcfcfd;\n  padding: 20px 34px; }\n\ntable {\n  border: 1px solid #c5c3c3;\n  border-radius: 4px; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  border-bottom: 0px;\n  padding: 7px 18px; }\n\n.rowHeader {\n  border-radius: 4px;\n  background: #d2d6d6;\n  border: 1px solid gray; }\n\n.glyphicon.glyphicon-chevron-right {\n  top: 3px;\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tab-data/tab-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var nso_service_1 = __webpack_require__("../../../../../src/app/nso.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var inventory_component_1 = __webpack_require__("../../../../../src/app/inventory/inventory.component.ts");
var ng2_bootstrap_modal_1 = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
var ngx_smart_modal_1 = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
var topologycall_1 = __webpack_require__("../../../../../src/app/jsonclass/topologycall.ts");
var TabDataComponent = /** @class */ (function () {
    function TabDataComponent(sanitized, router, nsoService, http, dialogService, ngxSmartModalService) {
        this.sanitized = sanitized;
        this.router = router;
        this.nsoService = nsoService;
        this.http = http;
        this.dialogService = dialogService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.dtOptions = {};
        this.dtTrigger = new Subject_1.Subject();
        this.dtOptions1 = {};
        this.dtTrigger1 = new Subject_1.Subject();
        this.list2 = [];
        this.type = "link";
        this.htmlContent = "<h1>Lorem ipsum dolor sit amet.</h1>";
    }
    TabDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = ['ckt-id', 'reconcile', 'customer-name', 'bandwidth'];
        if (this.bTabData.indexOf("link") != -1) {
            console.log("this.bTabData.indexOf('link')" + this.bTabData);
            list = ['vpn-id', 'topology', 'customer-name', 'mesh-rd-value'];
        }
        this.hList = list;
        console.log('+++++++++++++++');
        console.log(this.hList);
        var User = {
            'serviceName': this.bTabData.replace("link", "ml3:vpn"),
            "selection": list
        };
        this.nsoService.nsoData(User).subscribe(function (data) {
            console.log(data);
            if (data.result) {
                _this.uList = data.result.results;
            }
            else {
                _this.router.navigate(['']);
            }
        });
        //////////////////
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        console.log(this.uList);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data', User, { headers: headers })
            .map(this.extractData)
            .subscribe(function (data) {
            //this.uList = data;
            console.log("dataaaaaaaa" + data);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger.next();
        });
    };
    TabDataComponent.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    TabDataComponent.prototype.extractData1 = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    TabDataComponent.prototype.slideTable = function (_path, _Val) {
        console.log(_Val);
        console.log(_path);
    };
    TabDataComponent.prototype.showConfirm = function (val, serviceName) {
        var _this = this;
        this.title = "title";
        var objs = new inventory_component_1.InventoryComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService);
        var HTML = new topologycall_1.Topologycall(this.nsoService);
        var srcpath = HTML.getData("src", "/ml2:mpls-l2vpn{" + val + "}/src/access/ml2:device");
        HTML = new topologycall_1.Topologycall(this.nsoService);
        var destnpath = HTML.getData("destn", "/ml2:mpls-l2vpn{" + val + "}/destn/access/ml2:device");
        HTML = new topologycall_1.Topologycall(this.nsoService);
        var srcinpath = HTML.getData("srcIn", "/ml2:mpls-l2vpn{" + val + "}/src/access/interface/ml2:intf-id");
        HTML = new topologycall_1.Topologycall(this.nsoService);
        var destninpath = HTML.getData("destnIn", "/ml2:mpls-l2vpn{" + val + "}/destn/access/interface/ml2:intf-id");
        // }
        HTML = new topologycall_1.Topologycall(this.nsoService);
        var srclagg = HTML.getDataquery('srcLagg', '/ml2:mpls-l2vpn{' + val + '}/src/lagg', 'devices', ['device']);
        HTML = new topologycall_1.Topologycall(this.nsoService);
        var destnlagg = HTML.getDataquery('destnLagg', '/ml2:mpls-l2vpn{' + val + '}/destn/lagg', 'devices', ['device']);
        setTimeout(function () {
            var topologyData = {};
            /*		console.log(srcpath[0].src);
                     console.log(srclagg[0].srcLagg);
                     console.log("destnlaggdestnlaggdestnlaggdestnlaggdestnlagg");
                     console.log(destnpath[0].destn);
                     console.log(destnlagg);*/
            topologyData['nodes'] = [];
            topologyData['links'] = [];
            var elements = {}, elements1 = {};
            elements['id'] = 0;
            elements['name'] = srcpath[0].src;
            topologyData['nodes'].push(elements);
            // topologyData['nodes'].push(elements);
            var t = 0;
            if (srclagg[0].srcLagg != "data not found") {
                for (t = 0; t < srclagg[0].srcLagg.length; t++) {
                    var srcData = srclagg[0].srcLagg[t][0];
                    elements = {};
                    elements['id'] = (t + 1);
                    elements['name'] = srcData;
                    elements1 = {};
                    elements1['id'] = t;
                    elements1['source'] = 0;
                    elements1['target'] = (t + 1);
                    topologyData['nodes'].push(elements);
                    topologyData['links'].push(elements1);
                }
            }
            if (destnlagg[0].destnLagg != "data not found") {
                for (var i = 0; i < destnlagg[0].destnLagg.length; i++) {
                    var destnData = destnlagg[0].destnLagg[i][0];
                    elements = {};
                    t = (t + 1);
                    console.log("trrrrrrrrrrrrrrrrr" + t);
                    elements['id'] = (t);
                    elements['name'] = destnData;
                    elements1 = {};
                    elements1['id'] = (t - 1);
                    elements1['source'] = (t - 2);
                    elements1['target'] = (t);
                    topologyData['nodes'].push(elements);
                    topologyData['links'].push(elements1);
                    console.log(elements);
                    console.log(elements1);
                }
            }
            if (destnpath[0].destn != "data not found") {
                elements = {};
                t = (t + 1);
                console.log("trrrrrrrrrrrrrrrrr" + t);
                elements['id'] = (t);
                elements['name'] = destnpath[0].destn;
                elements1 = {};
                elements1['id'] = (t - 1);
                elements1['source'] = (t - 2);
                elements1['target'] = (t);
                topologyData['links'].push(elements1);
                t = (t);
                elements1 = {};
                elements1['id'] = (t);
                elements1['source'] = (t - 1);
                elements1['target'] = (t);
                topologyData['nodes'].push(elements);
                topologyData['links'].push(elements1);
            }
            console.log(topologyData['nodes']);
            console.log(topologyData['links']);
            //Topology Code Begin
            var Shell = nx.define(nx.ui.Application, {
                methods: {
                    getContainer: function () {
                        return new nx.dom.Element(document.getElementById('topology'));
                    },
                    start: function () {
                        var topo = new nx.graphic.Topology({
                            'adaptive': false,
                            'showIcon': true,
                            'nodeConfig': {
                                //'label': 'model.name',
                                label: function (vertex) {
                                    if (vertex.get("name") == srcpath[0].src) {
                                        return vertex.get("name") + " > Start";
                                    }
                                    else if (vertex.get("name") == destnpath[0].destn) {
                                        return vertex.get("name") + " > End";
                                    }
                                    else {
                                        return vertex.get("name");
                                    }
                                    /* console.log(vertex.get("name"));
                                  return vertex.get("name") + "abu";*/
                                },
                                'iconType': 'router',
                                //iconType: '{#icon}',
                                //'color': '#0how00'
                                'color': function (vertex) {
                                    if (vertex.get("name") == srcpath[0].src) {
                                        return '#108301';
                                    }
                                    else if (vertex.get("name") == destnpath[0].destn) {
                                        return '#ff0000';
                                    }
                                    else {
                                        return '#0how00';
                                    }
                                }
                            },
                            'linkConfig': {
                                'linkType': 'curve'
                            },
                            'identityKey': 'id',
                            'width': 875,
                            'height': 500,
                            'dataProcessor': 'force',
                            'enableSmartLabel': true,
                            'enableGradualScaling': true,
                            'supportMultipleLink': true,
                            "scalable": true
                        });
                        //console.log(topologyData);
                        topo.data(topologyData);
                        topo.attach(this);
                    }
                }
            });
            var shell = new Shell();
            shell.start();
            //Topology Code End
            _this.messageData = "<p><input type='text'/>text</p>";
            var title = "<p><input type='text' />text</p>";
            //objs.ngxSmartModalService.setModalData(this.sanitized.bypassSecurityTrustHtml(title), 'classicModal');
            objs.ngxSmartModalService.getModal('longTextModal').open();
            objs.ngxSmartModalService.getModal('longTextModal').onClose.subscribe(function (event) {
                console.log('Rickroll modal closed', event);
                if (document.getElementById('topology') !== null) {
                    if (document.getElementById('topology').innerHTML !== null) {
                        document.getElementById('topology').innerHTML = "";
                    }
                }
                console.log(shell);
            });
        }, 1700);
    };
    TabDataComponent.prototype.showLink = function (vpnId, path) {
        var _this = this;
        var dataAll = {};
        var objs = new inventory_component_1.InventoryComponent(this.router, this.nsoService, this.http, this.dialogService, this.ngxSmartModalService);
        objs.list2 = ['ckt-id', 'admin-state', 'customer-address', 'qos/bandwidth'];
        this.hList1 = this.list2;
        var json = {
            context: path.replace("/link", ""),
            xpath: "link[starts-with(vpn-id,'" + vpnId + "')]",
            selection: objs.list2
        };
        this.check = vpnId;
        this.nsoService.nsoDataquery(json).subscribe(function (data) {
            console.log(data);
            if (data.result) {
                objs.uList1 = data.result.results;
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': objs.uList1,
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('classicModal').onOpen.subscribe(function (event) {
                    console.log(event['data']);
                    //event['data']=dataAll;
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'classicModal');
                    }
                    console.log(event['data']);
                });
                objs.ngxSmartModalService.getModal('classicModal').open();
            }
            else {
                dataAll = {
                    'hList1': objs.list2,
                    'uList1': {},
                    'bTabData': path,
                    'vpnId': vpnId
                };
                objs.ngxSmartModalService.getModal('classicModal').onOpen.subscribe(function (event) {
                    console.log(event['data']);
                    if (event['data'] != null) {
                        event['data'] = dataAll;
                    }
                    else {
                        objs.ngxSmartModalService.setModalData(dataAll, 'classicModal');
                    }
                });
                //objs.ngxSmartModalService.setModalData(dataAll, 'classicModal');
                objs.ngxSmartModalService.getModal('classicModal').open();
            }
        });
        objs.ngxSmartModalService.getModal('classicModal').onClose.subscribe(function (event) {
            console.log(event['data']);
            event['data'].uList1 = [];
            console.log(event['data']);
            console.log(dataAll);
            dataAll = {};
            console.log(dataAll);
        });
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        console.log(objs.uList1);
        this.dtOptions1 = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.post('api/data/query', json, { headers: headers })
            .map(this.extractData1)
            .subscribe(function (data) {
            //this.uList = data;
            console.log("dataaaaaaaa" + data);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger1.next();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabDataComponent.prototype, "bTabData", void 0);
    TabDataComponent = __decorate([
        core_1.Component({
            selector: 'app-tab-data',
            template: __webpack_require__("../../../../../src/app/tab-data/tab-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tab-data/tab-data.component.scss")],
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, router_1.Router,
            nso_service_1.NsoService, http_1.Http,
            ng2_bootstrap_modal_1.DialogService,
            ngx_smart_modal_1.NgxSmartModalService])
    ], TabDataComponent);
    return TabDataComponent;
}());
exports.TabDataComponent = TabDataComponent;


/***/ }),

/***/ "../../../../../src/app/validate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ValidateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());
exports.ValidateService = ValidateService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map