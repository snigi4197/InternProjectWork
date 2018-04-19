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

/***/ "../../../../../src/app/abc/abc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/abc/abc.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n<p>\n  abc works!\n</p>\n<h1> EXAMPLES </h1>\n<ul>\n  <li>\n    <span> A </span>\n  </li>\n    <li>\n      <span> B </span>\n    </li>\n   <li>\n    <span> C </span>\n   </li>\n  \n</ul>\n</body>"

/***/ }),

/***/ "../../../../../src/app/abc/abc.component.ts":
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AbcComponent = /** @class */ (function () {
    function AbcComponent() {
    }
    AbcComponent.prototype.ngOnInit = function () {
        var z = 10;
        function varr() {
            var m = 42;
            console.log(" inside function test " + m); // 42
            function nestedTest() {
                console.log("inside the nested test " + m); // 42
            }
            nestedTest();
            console.log("value of constant variable is " + z);
        }
        //console.log(m);//var will not be valid here
        function lett() {
            for (var i = 0; i < 3; i++) {
                var m2 = 42;
                console.log("value of i is " + i);
                console.log("value of m2 is : " + m2);
            }
            console.log("value of constant variable is " + z);
            //console.log(m2); 
            //console.log(i);
        }
        varr();
        lett();
        console.log("value of constant variable is " + z);
        //z=2; this value cant be updated !!
        /*
              for (let i = 0; i <= 5; i++) {
                setTimeout(() => console.log("let wala loop " + i), i * 1000);
              }
        
              for (var j = 0; j <= 5; j++) {
               setTimeout(() => console.log("var wala loop " + j), j * 1000);
              }
        */
        //closure
        function init() {
            var t = 2;
            function displayName() {
                console.log("value of t is :" + t);
            }
            displayName();
        }
        init();
        //THIS FUNCTION 
        function myobj() {
            var a = 10;
            this.b = 20;
        }
        var c = new myobj();
        {
            console.log("a is ::" + c.a); //"undefined" coz a has its access within  the function
            console.log("b is ::" + c.b); //"20" coz var used with this can be used with every instance nd thus it can be used outside the function too.
            console.log(this); //abc copmponent
        }
        var obj = {
            f: function (one, two) {
                console.log(this === obj);
                console.log(this === window);
                console.log(this);
                console.log(one + two);
            }
        };
        console.log("without context");
        obj.f(2, 7);
        console.log("with call context");
        obj.f.call(window, 6, 6);
        console.log("with apply context");
        obj.f.apply(window, [9, 10]);
        console.log("with bind context");
        var b = obj.f.bind(window);
        b(2, 2);
        //there are three methods that change the context of the this variable :-
        // 1. CALL 2. APPLY 3. BIND
        //"CALL" can have as many as arguments
        //"APPLY" can have have only two (one the CONTEXT VALUE and another an array that can carry the arguments if any )
        //"BIND" has only one argument and it returns the bound function that will execute the given function with the given context value defined in the bind arg
        //PROMISES
        //EXAMPLE 1
        var p = new Promise(function (resolve, reject) {
            var pp = true;
            if (pp) {
                resolve(' "clean" ');
            }
            else {
                reject(' "garbage" ');
            }
        });
        p.then(function (c) {
            console.log('the value OF PROMISE EXAMPLE 1 is  ' + c);
        }).catch(function (r) {
            console.log('the value OF PROMISE EXAMPLE 1 is ' + r);
        });
        //EXAMPLE 2
        var clean = function () {
            return new Promise(function (resolve, reject) {
                if (1) {
                    resolve('CLEANED !!!!');
                }
                else {
                    reject('not');
                }
            });
        };
        var garbage = function () {
            return new Promise(function (resolve, reject) {
                resolve('garbage !!!!');
            });
        };
        clean().then(function () {
            return garbage();
        }).then(function () {
            console.log('PROMISE EXAMPLE 2 "finished!!!" ');
        }).catch(function () {
            console.log('PROMISE EXAMPLE 2 "not finished!!" ');
        });
        //EXAMPLE 3  
        var a = new Promise(function (resolve, reject) {
            var data = 'abcd';
            resolve(data);
        });
        var y = new Promise(function (resolve, reject) {
            if (1) {
                resolve();
            }
            else {
                reject();
            }
        });
        a.then(function (data) {
            console.log("PROMISE example 3 is : " + data);
        });
        y.then(function () {
            console.log('PROMISE example 3 "sucess" ');
        }).catch(function () {
            console.log('PROMISE example 3 "failure"  ');
        });
        //AWAIT  EXAMPLE 1 
        function f() {
            return __awaiter(this, void 0, void 0, function () {
                var promise, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            promise = new Promise(function (resolve, reject) {
                                setTimeout(function () { return resolve("AWAIT EXAMPLE NUMBER 1 !"); }, 3000);
                            });
                            return [4 /*yield*/, promise];
                        case 1:
                            result = _a.sent();
                            console.log(result); // "done!"
                            return [2 /*return*/];
                    }
                });
            });
        }
        f();
        //AWAIT EXAMPLE 2
        function s() {
            return __awaiter(this, void 0, void 0, function () {
                var o, j;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            o = new Promise(function (resolve, reject) {
                                resolve("AWAIT EXAMPLE 2 ");
                            });
                            return [4 /*yield*/, o];
                        case 1:
                            j = _a.sent();
                            console.log(j);
                            return [2 /*return*/];
                    }
                });
            });
        }
        s();
        // AWAIT EXAMPLE 3 WITH THE FOR LOOP
        function ss() {
            return __awaiter(this, void 0, void 0, function () {
                var f;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            f = new Promise(function (resolve, reject) {
                                console.log('AWAIT EXAMPLE 3 :: "the for loop values are :::" ');
                                for (var i = 10; i <= 13; i++) {
                                    console.log(i);
                                    resolve();
                                }
                            });
                            return [4 /*yield*/, (f)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        ss();
        //AWAIT EXAMPLE 4 WITH TRY AND CATCH
        function sss() {
            return __awaiter(this, void 0, void 0, function () {
                var o, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            o = new Promise(function (resolve, reject) {
                                if (0) {
                                    console.log('AWAIT EXAMPLE 4 OF TRY CATCH ::: "sucess babe" !');
                                    resolve();
                                }
                                reject();
                            });
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, (o)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _a = _b.sent();
                            console.log('AWAIT EXAMPLE 4 OF TRY CATCH ::: "error hai yr" ');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        sss();
        //AWAIT FUNCTION 5 
        function f2() {
            return __awaiter(this, void 0, void 0, function () {
                var y;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, 20];
                        case 1:
                            y = _a.sent();
                            console.log("AWAIT EXAMPLE 5 " + y);
                            return [2 /*return*/];
                    }
                });
            });
        }
        f2();
        //AWAIT EXAMPLE 5 
        function abcd(x) {
            return new Promise(function (resolve, reject) {
                resolve(x);
            });
        }
        function example5() {
            return __awaiter(this, void 0, void 0, function () {
                var x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, abcd(10)];
                        case 1:
                            x = _a.sent();
                            console.log(x);
                            return [2 /*return*/];
                    }
                });
            });
        }
        example5();
        function example6() {
            return __awaiter(this, void 0, void 0, function () {
                var s, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, Promise.reject(70)];
                        case 1:
                            s = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        example6();
        function example7() {
            return __awaiter(this, void 0, void 0, function () {
                var s, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, Promise.resolve(70)];
                        case 1:
                            s = _a.sent();
                            console.log('hey!!');
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.log(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        example7();
        function abcde() {
            return new Promise(function (resolve, reject) {
                reject('rejected (reject) !');
            });
        }
        function example8() {
            return __awaiter(this, void 0, void 0, function () {
                var s;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, abcde().catch(function (error) { console.log(error); })];
                        case 1:
                            s = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        example8();
    };
    AbcComponent = __decorate([
        core_1.Component({
            selector: 'app-abc',
            template: __webpack_require__("../../../../../src/app/abc/abc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/abc/abc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AbcComponent);
    return AbcComponent;
}());
exports.AbcComponent = AbcComponent;


/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink='/'>  <<<< BACK  </a>\n\n<h3> ADD PRODUCT </h3>\n\n\n<form id=\"formNewproduct\"\n      name=\"formNewproduct\"\n      #productData=\"ngForm\"\n      (ngSubmit)=\"addNewProduct(productData.value)\">\n\n  <label>name ::</label>\n  <input type=\"text\" \n        name=\"name\"\n        id=\"name\"\n        placeholder=\"name\"\n        ngModel >\n\n  <label>Username ::</label>\n  <input type=\"text\" \n        name=\"username\"\n        id=\"username\"\n        placeholder=\"username\"\n        ngModel >\n\n        <input type=\"submit\" value=\"Add Product\">\n</form>\n\n<br>\n<h2 *ngIf=\"isAdded\">{{ confirmationString }}</h2>"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
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
var AddComponent = /** @class */ (function () {
    function AddComponent(http) {
        this.http = http;
        this.confirmationString = "product added sucessfully !!!!";
        this.issAdded = false;
        this.productObj = {};
        this.addNewProduct = function (product) {
            var _this = this;
            this.projectObj = {
                "name": product.name,
                "username": product.username
            };
            this.http.post("http://localhost:7000/products", this.projectObj).subscribe(function (res) {
                console.log(res);
                _this.isAdded = true;
            });
        };
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
//import { AuthService } from './auth.service';
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var secure_service_1 = __webpack_require__("../../../../../src/app/secure.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var form_update_component_1 = __webpack_require__("../../../../../src/app/form-update/form-update.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var index_component_1 = __webpack_require__("../../../../../src/app/index/index.component.ts");
var add_component_1 = __webpack_require__("../../../../../src/app/add/add.component.ts");
var displayuser_component_1 = __webpack_require__("../../../../../src/app/displayuser/displayuser.component.ts");
var eg_component_1 = __webpack_require__("../../../../../src/app/eg/eg.component.ts");
var final_component_1 = __webpack_require__("../../../../../src/app/final/final.component.ts");
var update_component_1 = __webpack_require__("../../../../../src/app/update/update.component.ts");
var abc_component_1 = __webpack_require__("../../../../../src/app/abc/abc.component.ts");
var door_guard_1 = __webpack_require__("../../../../../src/app/door.guard.ts");
var secured_guard_1 = __webpack_require__("../../../../../src/app/secured.guard.ts");
var example_guard_1 = __webpack_require__("../../../../../src/app/example.guard.ts");
var def_component_1 = __webpack_require__("../../../../../src/app/def/def.component.ts");
var xyz_component_1 = __webpack_require__("../../../../../src/app/xyz/xyz.component.ts");
var test_service_1 = __webpack_require__("../../../../../src/app/test.service.ts");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var demo_component_1 = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var test_component_1 = __webpack_require__("../../../../../src/app/test/test.component.ts");
var test2_component_1 = __webpack_require__("../../../../../src/app/test2/test2.component.ts");
var plogin_component_1 = __webpack_require__("../../../../../src/app/plogin/plogin.component.ts");
var p_component_1 = __webpack_require__("../../../../../src/app/p/p.component.ts");
var nsotable_component_1 = __webpack_require__("../../../../../src/app/nsotable/nsotable.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                form_update_component_1.FormUpdateComponent,
                home_component_1.HomeComponent,
                index_component_1.IndexComponent,
                add_component_1.AddComponent,
                displayuser_component_1.DisplayuserComponent,
                eg_component_1.EgComponent,
                final_component_1.FinalComponent,
                update_component_1.UpdateComponent,
                abc_component_1.AbcComponent,
                def_component_1.DefComponent,
                xyz_component_1.XyzComponent,
                demo_component_1.DemoComponent,
                test_component_1.TestComponent,
                test2_component_1.Test2Component,
                plogin_component_1.PloginComponent,
                p_component_1.PComponent,
                nsotable_component_1.NsotableComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_jwt_1.JwtModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: index_component_1.IndexComponent },
                    { path: 'register', component: register_component_1.RegisterComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'update', component: form_update_component_1.FormUpdateComponent, canActivate: [door_guard_1.DoorGuard] },
                    { path: 'home', component: home_component_1.HomeComponent, canActivate: [door_guard_1.DoorGuard] },
                    { path: 'abc', component: abc_component_1.AbcComponent, canActivate: [door_guard_1.DoorGuard] },
                    { path: 'demo', component: demo_component_1.DemoComponent },
                    { path: 'test2', component: test2_component_1.Test2Component, canActivate: [door_guard_1.DoorGuard] },
                    { path: 'test', component: test_component_1.TestComponent },
                    { path: 'plogin', component: plogin_component_1.PloginComponent },
                    { path: 'p', component: p_component_1.PComponent },
                    { path: 'nsotable', component: nsotable_component_1.NsotableComponent }
                    //{path:'def', component:DefComponent ,canActivate:[SecuredGuard]},
                    //{path:'xyz', component:XyzComponent ,canActivate:[ExampleGuard]}
                    //{ path: '**', redirectTo: '' }
                ])
            ],
            providers: [auth_service_1.AuthService, door_guard_1.DoorGuard, secure_service_1.SecureService, secured_guard_1.SecuredGuard, example_guard_1.ExampleGuard, test_service_1.TestService, angular_jwt_1.JwtHelperService, ngx_cookie_service_1.CookieService],
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
//import { JwtHelperService } from '@auth0/angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.a = 10;
        this.isLoggedIn = false;
    }
    AuthService.prototype.setUserLoggedIn = function () {
        this.isLoggedIn = true;
        this.username = localStorage.getItem("GetTheEmail");
        console.log("hey the value of toke is " + this.username);
        return this.username;
    };
    /*
    public isAuthenticated():boolean
    {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    }
  */
    AuthService.prototype.insert = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/insert', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.display = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/update", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.viewdata = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/viewinfo", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateuser = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/updateuser", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/login", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/register", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.demo = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/demo", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.test = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/test", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.test2 = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/test2", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.p = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/p", user, { headers: headers }).map(function (res) { return res.json; });
    };
    AuthService.prototype.nsodevices = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.get("/api/nsopromise", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.example = function () {
        console.log("the value of a is " + this.a);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/def/def.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/def/def.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  def works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/def/def.component.ts":
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
var DefComponent = /** @class */ (function () {
    function DefComponent() {
    }
    DefComponent.prototype.ngOnInit = function () {
    };
    DefComponent = __decorate([
        core_1.Component({
            selector: 'app-def',
            template: __webpack_require__("../../../../../src/app/def/def.component.html"),
            styles: [__webpack_require__("../../../../../src/app/def/def.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefComponent);
    return DefComponent;
}());
exports.DefComponent = DefComponent;


/***/ }),

/***/ "../../../../../src/app/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 align=\"center\">DEMO EXAMPLE</h1>\n  <form [formGroup]=\"regform\" (ngSubmit)=onSubmit(regform.value)>\n    <table align=\"center\">\n      <tr>\n        <td>EMAIL ID :</td>\n        <td>\n          <input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"EMAIL ID\" > \n        </td>\n      </tr>\n      <tr>\n        <td>PHONE NUMBER :</td>\n        <td>\n          <input type=\"text\" name=\"phone\" formControlName=\"phone\" placeholder=\"PHONE NUMBER\">\n        </td>\n      </tr>\n      <tr>\n        <td>USERNAME :</td>\n        <td>\n          <input type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"USERNAME\">\n        </td>\n      </tr>\n      <tr>\n        <td>PASSWORD :</td>\n        <td>\n          <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"PASSWORD\">\n        </td>\n      </tr><br>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <input type=\"submit\" name=\"submit\" [disabled]=\"!regform.valid\" value=\"submit\">  \n        </td>\n      </tr>\n    </table>   \n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var DemoComponent = /** @class */ (function () {
    function DemoComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.onSubmit = function (form) {
            console.log(form);
            this.authService.demo(form).subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    console.log("welcome !!!");
                }
                else {
                    console.log("Unsuccessful !!!!");
                }
            });
        };
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.regform = new forms_1.FormGroup({
            email: new forms_1.FormControl(""),
            phone: new forms_1.FormControl(""),
            username: new forms_1.FormControl(""),
            password: new forms_1.FormControl("")
        });
        console.log(this.regform);
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'app-demo',
            template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;


/***/ }),

/***/ "../../../../../src/app/displayuser/displayuser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/displayuser/displayuser.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"forms\"  (ngSubmit) = \"onSubmit(forms.value)\" >\n    <table>\n      <tr>\n       <td>\n          <input type=\"text\" formControlName=\"user\" name=\"user\" [(ngModel)]=\"abc.name\" >  \n        </td>\n      </tr>\n      <tr>\n        <td>\n            <input type=\"text\" formControlName=\"username\" name=\"username\" [(ngModel)]=\"abc.username\">  \n          \n        </td>\n      </tr>\n      <br>\n      <tr>\n        <td colspan=2 align=\"center\">\n            <button type=\"submit\" name=\"submit\" value=\"submit\">DISPLAY DATA </button>\n        </td>\n      </tr>\n    </table>\n    </form>\n    "

/***/ }),

/***/ "../../../../../src/app/displayuser/displayuser.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var DisplayuserComponent = /** @class */ (function () {
    function DisplayuserComponent(authService) {
        this.authService = authService;
        this.abc = {
            name: "",
            username: ""
        };
        this.onSubmit = function (form) {
            console.log(form);
            console.log("display the details of all user !!!");
            this.authService.display(form).subscribe(function (data) {
                // console.log("data is : "+data);
                // console.log(data.message);
                // data=form.name;
                console.log(data);
                console.log(data.status);
                if (data.status) {
                    console.log("hey");
                    //this.profileObj=data.u;
                    //console.log(this.profileObj);
                }
                else {
                    console.log("error");
                }
            });
        };
    }
    DisplayuserComponent.prototype.ngOnInit = function () {
        this.forms = new forms_1.FormGroup({
            user: new forms_1.FormControl("", forms_1.Validators.required),
            username: new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    DisplayuserComponent = __decorate([
        core_1.Component({
            selector: 'app-displayuser',
            template: __webpack_require__("../../../../../src/app/displayuser/displayuser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/displayuser/displayuser.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], DisplayuserComponent);
    return DisplayuserComponent;
}());
exports.DisplayuserComponent = DisplayuserComponent;


/***/ }),

/***/ "../../../../../src/app/door.guard.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var DoorGuard = /** @class */ (function () {
    function DoorGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    DoorGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.setUserLoggedIn()) {
            this.router.navigate(['/']);
            console.log("you cant visit the page babe !!!");
            return false;
        }
        return true;
    };
    DoorGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], DoorGuard);
    return DoorGuard;
}());
exports.DoorGuard = DoorGuard;


/***/ }),

/***/ "../../../../../src/app/eg/eg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/eg/eg.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<a routerLink='/add'> ADD PRODUCT   </a>\n\n\n<h3>PRODUCTS.... </h3>\n<table>\n \n    <th>\n      Name\n    </th>\n    <th>\n      UserName\n    </th>\n    <th>\n    </th>\n  <tbody  *ngFor=\"let prod of products\">\n  <tr *ngIf=\"prod.id==2\">\n   \n  <td>\n      <input type=\"text\" value=\"{{prod.name}}\">\n  </td>\n  <td>\n    <input type=\"text\" [value]=\"prod.username\">\n  </td>\n <td [routerLink]=\"['/update',prod.id]\">\n   <a> \n     UPDATE\n   </a>\n </td>\n  </tr>\n </tbody>\n  <tr>\n    <td>\n\n\n    </td>\n  </tr>\n</table>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/eg/eg.component.ts":
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
var EgComponent = /** @class */ (function () {
    function EgComponent(http) {
        this.http = http;
        this.products = [];
        this.fetchData = function () {
            var _this = this;
            this.http.get("http://localhost:7000/products").subscribe(function (res) { _this.products = res.json(); });
        };
    }
    EgComponent.prototype.update = function (user, username) {
    };
    EgComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    EgComponent = __decorate([
        core_1.Component({
            selector: 'app-eg',
            template: __webpack_require__("../../../../../src/app/eg/eg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/eg/eg.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], EgComponent);
    return EgComponent;
}());
exports.EgComponent = EgComponent;


/***/ }),

/***/ "../../../../../src/app/example.guard.ts":
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
var test_service_1 = __webpack_require__("../../../../../src/app/test.service.ts");
var ExampleGuard = /** @class */ (function () {
    function ExampleGuard(test, router) {
        this.test = test;
        this.router = router;
    }
    ExampleGuard.prototype.canActivate = function (next, state) {
        if (this.test.abc()) {
            this.router.navigate(['/register']);
            return false;
        }
        return true;
    };
    ExampleGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [test_service_1.TestService,
            router_1.Router])
    ], ExampleGuard);
    return ExampleGuard;
}());
exports.ExampleGuard = ExampleGuard;


/***/ }),

/***/ "../../../../../src/app/final/final.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/final/final.component.html":
/***/ (function(module, exports) {

module.exports = " \n<form [formGroup]='forms' (ngSubmit) = \"onSubmit(forms.value)\">\n\n<table>\n  <tr>\n    <td>\n      NAME ::\n    </td>\n    <td>\n      <input type=\"text\" formControlName=\"name\">  \n    </td>\n  </tr>\n  <tr>\n    <td>\n      USERNAME ::\n    </td>\n    <td>\n        <input type=\"text\" formControlName=\"username\">  \n    </td>\n  </tr>\n  <br>\n  <tr>\n    <td colspan=2 align=\"center\">\n        <button type=\"submit\" name=\"submit\" value=\"submit\">SAVE THE DATA</button>\n    </td>\n  </tr>\n\n</table>\n</form>\n\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/final/final.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var FinalComponent = /** @class */ (function () {
    function FinalComponent(authService) {
        this.authService = authService;
        this.onSubmit = function (user) {
            console.log(this.form);
            console.log(user);
            this.authService.insert(user).subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    console.log("data is inserted !!!!");
                }
                else {
                    console.log("there is some error !!!");
                }
            });
        };
    }
    FinalComponent.prototype.ngOnInit = function () {
        this.forms = new forms_1.FormGroup({
            name: new forms_1.FormControl("", forms_1.Validators.required),
            username: new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    FinalComponent = __decorate([
        core_1.Component({
            selector: 'app-final',
            template: __webpack_require__("../../../../../src/app/final/final.component.html"),
            styles: [__webpack_require__("../../../../../src/app/final/final.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], FinalComponent);
    return FinalComponent;
}());
exports.FinalComponent = FinalComponent;


/***/ }),

/***/ "../../../../../src/app/form-update/form-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-update/form-update.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <a routerLink='' >   \n        <input type=\"button\" name=\"return\" value=\"BACK TO HOME PAGE\">\n        </a>\n   \n\n\n<h1 align=\"center\">MANAGE PROFILE </h1>\n    <form [formGroup]=\"rform\" (ngSubmit)=onSubmit(rform.value)>\n      <table align=\"center\">\n        <tr>\n          <td>EMAIL ID :</td>\n          <td>\n            <input type=\"text\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"getdata.email\" disabled> \n          </td>\n        </tr>\n        <tr>\n          <td>PHONE NUMBER :</td>\n          <td>\n            <input type=\"text\" name=\"phone\" formControlName=\"phone\" [(ngModel)]=\"getdata.phone\">\n          </td>\n        </tr>\n        <tr>\n          <td>USERNAME :</td>\n          <td>\n            <input type=\"text\" name=\"username\" formControlName=\"username\" [(ngModel)]=\"getdata.username\">\n          </td>\n        </tr>\n        <tr>\n          <td>PASSWORD :</td>\n          <td>\n            <input type=\"password\" name=\"password\" formControlName=\"password\" [(ngModel)]=\"getdata.password\">\n          </td>\n        </tr><br>\n        <tr>\n          <td colspan=\"2\" align=\"center\">\n            <input type=\"submit\" name=\"submit\" [disabled]=\"!rform.valid\" value=\"submit\">  \n          </td>\n        </tr>\n      </table>   \n    </form>\n "

/***/ }),

/***/ "../../../../../src/app/form-update/form-update.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var FormUpdateComponent = /** @class */ (function () {
    function FormUpdateComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.getdata = {
            email: "",
            phone: "",
            username: "",
            password: ""
        };
        this.onSubmit = function (form) {
            var _this = this;
            form['email'] = this.gemail;
            console.log(form);
            //console.log(form);
            //console.log('Enter the data to update values !');
            this.authService.updateuser(form).subscribe(function (data) {
                if (data.status) {
                    console.log(data);
                    _this.router.navigate(['/home']);
                }
                else {
                    console.log(data);
                    console.log("error" + data.message);
                }
            });
        };
    }
    FormUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lemail = 'b@gmail.com';
        this.gemail = localStorage.getItem("GetTheEmail");
        this.rform = new forms_1.FormGroup({
            email: new forms_1.FormControl(""),
            phone: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(10),
                forms_1.Validators.maxLength(10)
            ])),
            username: new forms_1.FormControl("", forms_1.Validators.required),
            password: new forms_1.FormControl("", forms_1.Validators.required)
        });
        var user = {
            "email": this.gemail
        };
        this.authService.viewdata(user).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.getdata = data.userList[0];
                console.log("welcome :::  " + _this.getdata.username);
            }
            else {
                console.log("Unsuccessful !!!!");
            }
        });
    };
    FormUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-form-update',
            template: __webpack_require__("../../../../../src/app/form-update/form-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form-update/form-update.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], FormUpdateComponent);
    return FormUpdateComponent;
}());
exports.FormUpdateComponent = FormUpdateComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  welcome {{g}}\n</h1>\n<a routerLink='/update'>   \n<input type=\"button\" name=\"update\" value=\"MANAGE USER\">\n</a>\n<br>\n<br>\n<a routerLink=''>   \n  <input type=\"button\" name=\"update\" value=\"LOGOUT\" (click)=logout() > \n </a>"

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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.logout = function () {
            localStorage.removeItem("GetTheItem");
            localStorage.clear();
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.g = localStorage.getItem("GetTheEmail");
        console.log(this.g);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginWrapper{width:400px;}\r\n\r\n.loginBtn{ background:#0769ac;\r\nborder-radius: 30px;font-size:16px;\r\ntext-transform: uppercase;padding:0px 30px 3px 30px;\r\nline-height: 31px;border:none;color:#fff;\r\n}\r\n\r\n.loginBtn:hover{background:#258dc3;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">\n  WELCOME TO THE PANEL  \n</h1>\n\n<table align=\"center\">\n  <tr>\n    <td>\n      <a routerLink='/login'>   \n      <input type=\"button\" name=\"login\" value=\"CLICK TO LOGIN\">\n    </a>\n    </td>\n    <td>\n      <a routerLink='/register'>   \n      <input type=\"button\" name=\"registration\" value=\"CLICK TO REGISTER \">\n      </a>\n    </td>\n    <td>\n      <a routerLink='/p'>   \n      <input type=\"button\" name=\"passport\" value=\"PASSPORT LOGIN PAGE \">\n      </a>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
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
var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <a routerLink='' >   \n        <input type=\"button\" name=\"return\" value=\"BACK TO HOME PAGE\">\n        </a>\n   \n\n<h1 align=\"center\">LOGIN HERE !! </h1>\n    <form [formGroup]=\"lform\" (ngSubmit)=onSubmit(lform.value)>\n      <table align=\"center\">\n        <tr>\n          <td>EMAIL ID :</td>\n          <td>\n            <input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"Email Id\" >\n            </td>\n          \n        </tr>\n        <tr>\n          <td>PASSWORD :</td>\n          <td>\n            <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" >\n         </td>\n         \n        </tr>\n        <tr>\n          <td colspan=\"2\" align=\"center\">\n            <input type=\"submit\" name=\"submit\" [disabled]=\"!lform.valid\" value=\"submit\">  \n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" align=\"center\">\n            <p >{{c}}</p>\n          </td>\n        </tr>\n          \n      </table> \n          \n     <p style=\"color:red;font-weight:bold;\" align=\"center\" *ngIf=\"lform.controls['email'].touched \n       && lform.controls['email'].hasError('minlength')\">\n       PLEASE ENTER EMAIL OF MORE THAN 3 CHARACTERS\n       </p>\n       \n    </form>\n  \n "

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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.onSubmit = function (value) {
            var _this = this;
            this.authService.login(value).subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    console.log("welcome :::  ");
                    localStorage.setItem("GetTheEmail", value.email);
                    _this.g = localStorage.getItem("GetTheEmail");
                    console.log(_this.g);
                    _this.router.navigate(['/home']);
                    console.log("bbye");
                }
                else {
                    console.log("Unsuccessfull !!!!");
                    _this.c = data.message;
                    console.log(_this.c);
                }
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        //angular defined method for validation
        this.lform = new forms_1.FormGroup({
            email: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(3)
            ])),
            password: new forms_1.FormControl("", this.test)
        });
    };
    LoginComponent.prototype.test = function (control) {
        if (control.value.length < 3) {
            return { 'password': true };
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/nsotable/nsotable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nsotable/nsotable.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<h1 align=\"center\" >NSO DEVICES LIST</h1>\n<hr>\n<table border=\"6px\" align=\"center\">\n  <thead>\n  <tr style=\"font-weight:bold;\" >\n    <td> NAME  </td>\n    <td> ADDRESS </td>\n    <td> PORT </td>\n    <td> DESCRIPTION </td>\n    <td> AUTHGROUP </td>\n    <td> state/oper-state </td>\n    <td> state/admin-state </td>\n    <td> platform/name </td>\n   <td>  platform/version </td>\n  </tr>\n</thead>\n<tbody>\n  <tr *ngFor=\"let device of deviceList\">\n    <td>{{ device[0] }}</td>\n    <td>{{ device[1] }}</td>\n    <td>{{ device[2] }}</td>\n    <td>{{ device[3] }}</td>\n    <td>{{ device[4] }}</td>\n    <td>{{ device[5] }}</td>\n    <td>{{ device[6] }}</td>\n    <td>{{ device[7] }}</td>\n    <td>{{ device[8] }}</td>\n  </tr>\n</tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/nsotable/nsotable.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var NsotableComponent = /** @class */ (function () {
    function NsotableComponent(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.tittle = "device list";
    }
    NsotableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.nsodevices().subscribe(function (data) {
            //console.log(data);
            if (data.status) {
                _this.deviceList = data.data.results;
                //console.log(this.deviceList);
            }
            else {
            }
        });
    };
    NsotableComponent = __decorate([
        core_1.Component({
            selector: 'app-nsotable',
            template: __webpack_require__("../../../../../src/app/nsotable/nsotable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nsotable/nsotable.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http, auth_service_1.AuthService, router_1.Router])
    ], NsotableComponent);
    return NsotableComponent;
}());
exports.NsotableComponent = NsotableComponent;


/***/ }),

/***/ "../../../../../src/app/p/p.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/p/p.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h1 align=\"center\">PASSPORT LOGIN PAGE </h1>\n<form [formGroup]=\"lform\" (ngSubmit)=\"Submit(lform.value)\">\n  <table align=\"center\">\n    <tr>\n      <td>EMAIL ID :</td>\n      <td>\n        <input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"Email Id\" >\n        </td>\n      \n    </tr>\n    <tr>\n      <td>PASSWORD :</td>\n      <td>\n        <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" >\n     </td>\n     \n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <input type=\"submit\" name=\"submit\" [disabled]=\"!lform.valid\" value=\"submit\">  \n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <p >{{failuremessage}}</p>\n      </td>\n    </tr>\n   </table> \n      \n\n   \n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/p/p.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var PComponent = /** @class */ (function () {
    function PComponent(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        this.Submit = function (value) {
            var _this = this;
            console.log("before auth service");
            console.log(value);
            // this.authService.p(value).subscribe((data)=>
            // {
            //   console.log("after auth service");
            //   if (data.status)
            //  {
            //     console.log(data.status);  
            //     this.router.navigate(['/']);
            //     // this.cookieService.set( 'test', value.email);
            //     // this.cookieValue = this.cookieService.get('test');
            //     // console.log( this.cookieValue);
            // } 
            // else 
            // {
            // this.failuremessage=data.message;
            // }
            // });
            this.authService.p(value).subscribe(function () {
                console.log("after auth service");
                _this.router.navigate(['/']);
            });
        };
    }
    PComponent.prototype.ngOnInit = function () {
        // this.cookieService.set( 'test', 'Hello World' );//key=test, value=hello world
        // this.cookieValue = this.cookieService.get('test');
        this.lform = new forms_1.FormGroup({
            email: new forms_1.FormControl("", forms_1.Validators.required),
            password: new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    PComponent = __decorate([
        core_1.Component({
            selector: 'app-p',
            template: __webpack_require__("../../../../../src/app/p/p.component.html"),
            styles: [__webpack_require__("../../../../../src/app/p/p.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, ngx_cookie_service_1.CookieService])
    ], PComponent);
    return PComponent;
}());
exports.PComponent = PComponent;


/***/ }),

/***/ "../../../../../src/app/plogin/plogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plogin/plogin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">PASSPORT LOGIN PAGE </h1>\n<form [formGroup]=\"lform\" (ngSubmit)=\"Submit(lform.value)\">\n  <table align=\"center\">\n    <tr>\n      <td>EMAIL ID :</td>\n      <td>\n        <input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"Email Id\" >\n        </td>\n      \n    </tr>\n    <tr>\n      <td>PASSWORD :</td>\n      <td>\n        <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" >\n     </td>\n     \n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <input type=\"submit\" name=\"submit\" [disabled]=\"!lform.valid\" value=\"submit\">  \n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <p >{{failuremessage}}</p>\n      </td>\n    </tr>\n   </table> \n      \n\n   \n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/plogin/plogin.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var PloginComponent = /** @class */ (function () {
    function PloginComponent(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        this.Submit = function (value) {
            var _this = this;
            console.log(value);
            this.authService.p(value).subscribe(function (data) {
                console.log("a");
                if (data.status) {
                    console.log(data.status);
                    _this.router.navigate(['/']);
                    // this.cookieService.set( 'test', value.email);
                    // this.cookieValue = this.cookieService.get('test');
                    // console.log( this.cookieValue);
                }
                else {
                    _this.failuremessage = data.message;
                }
            });
        };
    }
    PloginComponent.prototype.ngOnInit = function () {
        // this.cookieService.set( 'test', 'Hello World' );//key=test, value=hello world
        // this.cookieValue = this.cookieService.get('test');
        this.lform = new forms_1.FormGroup({
            email: new forms_1.FormControl("", forms_1.Validators.required),
            password: new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    PloginComponent = __decorate([
        core_1.Component({
            selector: 'app-plogin',
            template: __webpack_require__("../../../../../src/app/plogin/plogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plogin/plogin.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, ngx_cookie_service_1.CookieService])
    ], PloginComponent);
    return PloginComponent;
}());
exports.PloginComponent = PloginComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <a routerLink='' >   \n        <input type=\"button\" name=\"return\" value=\"BACK TO HOME PAGE\">\n        </a>\n   \n\n<h1 align=\"center\">User Registration </h1>\n    <form [formGroup]=\"regform\" (ngSubmit)=onSubmit(regform.value)>\n      <table align=\"center\">\n        <tr>\n          <td>EMAIL ID :</td>\n          <td>\n            <input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"EMAIL ID\" > \n          </td>\n        </tr>\n        <tr>\n          <td>PHONE NUMBER :</td>\n          <td>\n            <input type=\"text\" name=\"phone\" formControlName=\"phone\" placeholder=\"PHONE NUMBER\">\n          </td>\n        </tr>\n        <tr>\n          <td>USERNAME :</td>\n          <td>\n            <input type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"USERNAME\">\n          </td>\n        </tr>\n        <tr>\n          <td>PASSWORD :</td>\n          <td>\n            <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"PASSWORD\">\n          </td>\n        </tr><br>\n        <tr>\n          <td colspan=\"2\" align=\"center\">\n            <input type=\"submit\" name=\"submit\" [disabled]=\"!regform.valid\" value=\"submit\">  \n          </td>\n        </tr>\n      </table>   \n    </form>\n"

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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        //setting the value of cookiee
        this.cookieValue = 'UNKNOWN';
        this.onSubmit = function (form) {
            var _this = this;
            console.log(form);
            this.authService.register(form).subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    console.log("welcome !!!");
                    _this.cookieService.set('register', 'Hello World'); //key=test, value=hello world
                    _this.cookieValue = _this.cookieService.get('register');
                    console.log(_this.cookieValue);
                    _this.router.navigate(['']);
                }
                else {
                    console.log("Unsuccessful !!!!");
                }
            });
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.cookieService.set( 'register', 'Hello World' );//key=test, value=hello world
        // this.cookieValue = this.cookieService.get('register');
        this.regform = new forms_1.FormGroup({
            email: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required
            ])),
            phone: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(10),
                forms_1.Validators.maxLength(10)
            ])),
            username: new forms_1.FormControl("", forms_1.Validators.required),
            password: new forms_1.FormControl("", forms_1.Validators.required)
        });
        console.log(this.regform);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, ngx_cookie_service_1.CookieService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/secure.service.ts":
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
var jwt_decode = __webpack_require__("../../../../jwt-decode/lib/index.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
exports.TOKEN_NAME = 'jwt_token';
var SecureService = /** @class */ (function () {
    function SecureService(http) {
        this.http = http;
        this.url = 'api/auth';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    SecureService.prototype.getToken = function () {
        console.log(exports.TOKEN_NAME);
        console.log("get token");
        return localStorage.getItem(exports.TOKEN_NAME);
    };
    //setting the token in the local storage
    SecureService.prototype.setToken = function (token) {
        localStorage.setItem(exports.TOKEN_NAME, token);
        console.log("set token");
    };
    SecureService.prototype.getTokenExpirationDate = function (token) {
        this.setToken(exports.TOKEN_NAME);
        var decoded = jwt_decode(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        console.log("get token expired date");
        return date;
    };
    SecureService.prototype.isTokenExpired = function (token) {
        console.log("is token expired");
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    SecureService.prototype.login = function (user) {
        return this.http
            .post(this.url + "/login", JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.text(); });
    };
    SecureService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SecureService);
    return SecureService;
}());
exports.SecureService = SecureService;


/***/ }),

/***/ "../../../../../src/app/secured.guard.ts":
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
var secure_service_1 = __webpack_require__("../../../../../src/app/secure.service.ts");
var SecuredGuard = /** @class */ (function () {
    function SecuredGuard(sec, router) {
        this.sec = sec;
        this.router = router;
    }
    SecuredGuard.prototype.canActivate = function (next, state) {
        if (!this.sec.isTokenExpired()) {
            return true;
        }
        console.log("hey");
        this.router.navigate(['']);
        return false;
        //return true;
    };
    SecuredGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [secure_service_1.SecureService,
            router_1.Router])
    ], SecuredGuard);
    return SecuredGuard;
}());
exports.SecuredGuard = SecuredGuard;


/***/ }),

/***/ "../../../../../src/app/test.service.ts":
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
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var exam = "tokenValue";
localStorage.setItem("ExampleToken", exam);
var TestService = /** @class */ (function () {
    function TestService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    TestService.prototype.abc = function () {
        var token = localStorage.getItem('token');
        console.log("token is :" + token);
        return this.jwtHelper.isTokenExpired(token);
    };
    TestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_jwt_1.JwtHelperService])
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;


/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h1 align=\"center\">LOGIN PAGE </h1>\n<form [formGroup]=\"lform\" (ngSubmit)=Submit(lform.value)>\n  <table align=\"center\">\n    <tr>\n      <td>EMAIL ID :</td>\n      <td>\n        <input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"Email Id\" >\n        </td>\n      \n    </tr>\n    <tr>\n      <td>PASSWORD :</td>\n      <td>\n        <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" >\n     </td>\n     \n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <input type=\"submit\" name=\"submit\" [disabled]=\"!lform.valid\" value=\"submit\">  \n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <p >{{failuremessage}}</p>\n      </td>\n    </tr>\n   </table> \n      \n\n   \n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var TestComponent = /** @class */ (function () {
    function TestComponent(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        this.Submit = function (value) {
            var _this = this;
            this.authService.test(value).subscribe(function (data) {
                if (data.status) {
                    console.log(data.status);
                    localStorage.setItem("GetTheEmail", value.email);
                    _this.g = localStorage.getItem("GetTheEmail");
                    console.log("the value of token is " + _this.g);
                    _this.router.navigate(['/test2']);
                    _this.cookieService.set('test', value.email);
                    _this.cookieValue = _this.cookieService.get('test');
                    console.log(_this.cookieValue);
                }
                else {
                    _this.failuremessage = data.message;
                }
            });
        };
    }
    TestComponent.prototype.ngOnInit = function () {
        // this.cookieService.set( 'test', 'Hello World' );//key=test, value=hello world
        // this.cookieValue = this.cookieService.get('test');
        this.lform = new forms_1.FormGroup({
            email: new forms_1.FormControl("", forms_1.Validators.required),
            password: new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, ngx_cookie_service_1.CookieService])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;


/***/ }),

/***/ "../../../../../src/app/test2/test2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test2/test2.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink='/test'>   \n  <input type=\"button\" name=\"update\" value=\"LOGOUT\" (click)=logout() > \n </a>\n <h1 align=\"center\">\n  WELCOME TO THIS PAGE  {{tokenvalue}}\n \n</h1>"

/***/ }),

/***/ "../../../../../src/app/test2/test2.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var Test2Component = /** @class */ (function () {
    function Test2Component(authService, router, cs) {
        this.authService = authService;
        this.router = router;
        this.cs = cs;
        this.logout = function () {
            //  this.authService.test2().subscribe((data) => { 
            //     });
            localStorage.removeItem("LoginEmail");
            localStorage.clear();
            this.cs.delete('test');
        };
    }
    Test2Component.prototype.ngOnInit = function () {
        this.tokenvalue = localStorage.getItem("LoginEmail");
        // this.cs.delete('test');
    };
    Test2Component = __decorate([
        core_1.Component({
            selector: 'app-test2',
            template: __webpack_require__("../../../../../src/app/test2/test2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test2/test2.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, ngx_cookie_service_1.CookieService])
    ], Test2Component);
    return Test2Component;
}());
exports.Test2Component = Test2Component;


/***/ }),

/***/ "../../../../../src/app/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink='/'>  <<<< BACK  </a>\n\n<h3> UPDATE PRODUCT </h3>\n\n\n<form id=\"formNewproduct\"\n      name=\"formNewproduct\"\n      #productData=\"ngForm\"\n      (ngSubmit)=\"updateProduct(productData.value)\">\n\n  <label>name ::</label>\n  <input type=\"text\" \n        name=\"name\"\n        id=\"name\"\n        placeholder=\"name\"\n        [(ngModel)]=\"data.name\"\n        ngModel >\n\n  <label>Username ::</label>\n  <input type=\"text\" \n        name=\"username\"\n        id=\"username\"\n        placeholder=\"username\"\n        [(ngModel)]=\"data.username\"\n        ngModel >\n\n        <input type=\"submit\" value=\"Udate Product\">\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/update/update.component.ts":
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
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-update',
            template: __webpack_require__("../../../../../src/app/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "../../../../../src/app/xyz/xyz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/xyz/xyz.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  xyz works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/xyz/xyz.component.ts":
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
var XyzComponent = /** @class */ (function () {
    function XyzComponent() {
    }
    XyzComponent.prototype.ngOnInit = function () {
    };
    XyzComponent = __decorate([
        core_1.Component({
            selector: 'app-xyz',
            template: __webpack_require__("../../../../../src/app/xyz/xyz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/xyz/xyz.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], XyzComponent);
    return XyzComponent;
}());
exports.XyzComponent = XyzComponent;


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