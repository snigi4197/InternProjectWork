webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(service, inputdata) {
        this.title = 'app';
        this.questions = service.getQuestions();
        this.inputdata = inputdata.getdata();
        console.log("input data", this.inputdata);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div align=\"center\">\n  \n<h2 style=\"font-style:italic\">\n<u>\nDynamic Form Example\n</u>\n</h2>\n<app-data-parent [inputdata]=\"inputdata\"></app-data-parent>\n</div>\n",
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [question_service_1.QuestionService]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService, data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// <h2>Dynamic Form Example</h2>
//   <div>
//   <app-dynamic-form [questions]="questions"></app-dynamic-form>
//   </div>
//   <app-form></app-form>
//   <div> 


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var dynamic_form_component_1 = __webpack_require__("./src/app/dynamic-form/dynamic-form.component.ts");
var dynamic_form_question_component_1 = __webpack_require__("./src/app/dynamic-form-question/dynamic-form-question.component.ts");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var question_control_service_1 = __webpack_require__("./src/app/question-control.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var form_component_1 = __webpack_require__("./src/app/form/form.component.ts");
var data_control_service_1 = __webpack_require__("./src/app/data-control.service.ts");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var data_parent_component_1 = __webpack_require__("./src/app/data-parent/data-parent.component.ts");
var data_child_component_1 = __webpack_require__("./src/app/data-child/data-child.component.ts");
var authguard_service_1 = __webpack_require__("./src/app/authguard.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var display_component_1 = __webpack_require__("./src/app/display/display.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dynamic_form_component_1.DynamicFormComponent,
                dynamic_form_question_component_1.DynamicFormQuestionComponent,
                form_component_1.FormComponent,
                data_parent_component_1.DataParentComponent,
                data_child_component_1.DataChildComponent,
                display_component_1.DisplayComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
            ],
            providers: [
                question_service_1.QuestionService,
                question_control_service_1.QuestionControlService,
                data_service_1.DataService,
                data_control_service_1.DataControlService,
                authguard_service_1.AuthguardService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/authguard.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var AuthguardService = /** @class */ (function () {
    function AuthguardService(http) {
        this.http = http;
        this.a = 10;
    }
    AuthguardService.prototype.abc = function () {
        console.log("hey");
    };
    AuthguardService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/register", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthguardService.prototype.entry = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.get("/api/entry", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthguardService.prototype.displaydata = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('charset', 'UTF-8');
        return this.http.post("/api/displaydata", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthguardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthguardService);
    return AuthguardService;
}());
exports.AuthguardService = AuthguardService;


/***/ }),

/***/ "./src/app/data-checkbox.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var dataformat_1 = __webpack_require__("./src/app/dataformat.ts");
var dataCheckbox = /** @class */ (function (_super) {
    __extends(dataCheckbox, _super);
    function dataCheckbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.options = [];
        _this.values = [];
        _this.type = options['type'] || '';
        _this.options = options['options'] || [];
        _this.values = options['options'] || [];
        return _this;
    }
    return dataCheckbox;
}(dataformat_1.dataFormat));
exports.dataCheckbox = dataCheckbox;


/***/ }),

/***/ "./src/app/data-child/data-child.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-child/data-child.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [formGroup]=\"forms\">\n    <label [attr.for]=\"inputdata.key\" style=\"font-size: 17px;\">\n        <u>\n                {{inputdata.key}}\n        </u>\n    </label>\n  \n    <div [ngSwitch]=\"inputdata.controlType\">\n            {{inputdata.name}}\n            <input *ngSwitchCase=\"'textbox'\" \n                                [name]=\"inputdata.name\"\n                                formControlName=\"{{inputdata.name}}\"\n                                [id]=\"inputdata.key\" \n                                [type]=\"inputdata.type\">\n\n            <div *ngSwitchCase=\"'radio'\" >\n                <div *ngFor='let r of inputdata.options' >\n                  <input *ngSwitchCase=\"'radio'\" \n                                [formControlName]=\"inputdata.name\"\n                                [id]=\"inputdata.key\" \n                                [name]=\"inputdata.name\" \n                                [type]=\"inputdata.type\" \n                                [value]='r.value'> \n                  {{r.key}}\n                </div>\n            </div>            \n\n            <div *ngSwitchCase=\" 'checkbox' \">\n                \n                <div *ngFor=\"let d of forms.get(inputdata.key).controls;let i=index;\"> \n                    <input  (change)=\"checkBoxClicked($event,inputdata.options[i])\"\n                                [formControl]=\"d\"\n                                [type]=\"inputdata.type\">                   \n                    {{inputdata.options[i].key}}              \n                </div>\n            </div> \n            \n    </div>\n    <hr>\n</div>\n<div class=\"errorMessage\" *ngIf=\"!isValid\">\n    {{inputdata.label}} is required\n</div>"

/***/ }),

/***/ "./src/app/data-child/data-child.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var dataformat_1 = __webpack_require__("./src/app/dataformat.ts");
var DataChildComponent = /** @class */ (function () {
    function DataChildComponent() {
    }
    DataChildComponent.prototype.isValid = function () { return this.forms.controls[this.inputdata.key].valid; };
    DataChildComponent.prototype.ngOnInit = function () {
        console.log("forms", this.forms);
    };
    DataChildComponent.prototype.checkBoxClicked = function (evt, data) {
        //this event is triggered when we will click the submit button
        console.log("evt", evt);
        data.selected = evt.target.checked;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", dataformat_1.dataFormat)
    ], DataChildComponent.prototype, "inputdata", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], DataChildComponent.prototype, "forms", void 0);
    DataChildComponent = __decorate([
        core_1.Component({
            selector: 'app-data-child',
            template: __webpack_require__("./src/app/data-child/data-child.component.html"),
            styles: [__webpack_require__("./src/app/data-child/data-child.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataChildComponent);
    return DataChildComponent;
}());
exports.DataChildComponent = DataChildComponent;


/***/ }),

/***/ "./src/app/data-control.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var DataControlService = /** @class */ (function () {
    function DataControlService() {
    }
    DataControlService.prototype.checkFormParameters = function (get_data) {
        var i;
        var group = {};
        console.log("getdata", get_data);
        get_data.forEach(function (data) {
            console.log("data is : " + data);
            if (data.controlType == 'checkbox') {
                console.log("In if");
                console.log("data with options is : ");
                console.log(data.options);
                var fg = new forms_1.FormArray([]);
                console.log("1");
                for (i = 0; i < data.options.length; i++) {
                    console.log("2");
                    var fc = new forms_1.FormControl(data.options[i].selected);
                    console.log(data.options[i].key);
                    fg.push(fc);
                }
                group[data.key] = fg;
            }
            else {
                console.log("in else");
                group[data.name] = data.required
                    ?
                        new forms_1.FormControl(data.value || '', forms_1.Validators.required)
                    :
                        new forms_1.FormControl(data.value || '');
                console.log("data is else is : " + data.value);
            }
            //this is the ternary operator
        });
        return new forms_1.FormGroup(group);
    };
    DataControlService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataControlService);
    return DataControlService;
}());
exports.DataControlService = DataControlService;


/***/ }),

/***/ "./src/app/data-parent/data-parent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-parent/data-parent.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"forms\" (ngSubmit)=\"SubmitHere(forms.value)\">\n  <div *ngFor=\"let inputdata of inputdata\">\n      <app-data-child [inputdata]=\"inputdata\" [forms]=\"forms\"></app-data-child>\n  </div>\n  <div>\n      <button type=\"submit\" [disabled]=\"!forms.valid\">Submit Here</button>\n  </div>\n  <br>\n  <div *ngIf=\"message\">\n      <strong>Entered values are : </strong><br>{{message}}\n      <br>\n      <strong>Entered values are :</strong><br>{{msg}}\n<br>\n    </div>\n</form>\n\n\n\n    <table border=\"1px\">\n        <tr>\n            <td>NAME</td>\n            <td>AGE</td>\n            <td>COMMENT</td>\n            <td>HOBBIES</td>\n            <td>QUALIFICATION</td>\n        </tr>\n        <tr *ngFor=\"let l of list\"> \n            <td>{{ l.name }}</td>\n            <td>{{ l.age }}</td>\n            <td>{{ l.comment }}</td>\n            <td>{{ l.Enter_hobbies_Details }}</td>\n            <td>{{ l.qualification }}</td>\n        </tr>\n    </table>"

/***/ }),

/***/ "./src/app/data-parent/data-parent.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var authguard_service_1 = __webpack_require__("./src/app/authguard.service.ts");
var data_control_service_1 = __webpack_require__("./src/app/data-control.service.ts");
var DataParentComponent = /** @class */ (function () {
    function DataParentComponent(datacontrol, authData) {
        this.datacontrol = datacontrol;
        this.authData = authData;
        this.inputdata = [];
        this.message = "";
        this.msg = "";
        this.SubmitHere = function (value) {
            var _this = this;
            console.log(value);
            this.authData.abc();
            console.log("jjj", this.inputdata);
            var checkelements;
            var elements = [];
            var ele = [];
            //USING THE RUN TIME CONTROL METHOD
            for (var control in this.inputdata) {
                if (this.inputdata[control].controlType == "checkbox") {
                    var op = this.inputdata[control]['options'];
                    //console.log("op : " ,op);
                    for (var i = 0; i < op.length; i++) {
                        if (op[i].selected == true) {
                            ele.push(op[i].value);
                            //if we not add this ( . key ) then it will show 
                            //     all full value of inputdata ie ( key , value and selected  value)
                        }
                    }
                    this.forms.value[this.inputdata.key] = ele;
                    //console.log(this.forms.value[this.inputdata.key]);
                    var a = this.forms.value[this.inputdata.key];
                    this.msg = JSON.stringify(a);
                }
            }
            // USING THE MANUAL METHOD
            for (var i = 0; i < this.inputdata[3].options.length; i++) {
                if (this.inputdata[3].options[i].selected == true) {
                    elements.push(this.inputdata[3].options[i].value);
                    //if we not add this ( . key ) then it will show 
                    //all full value of inputdata ie ( key , value and selected  value)
                }
            }
            for (var sn in this.forms.value) {
                if (sn == this.inputdata[3].key) {
                    this.forms.value[sn] = elements;
                    this.message = JSON.stringify(this.forms.value[sn]);
                }
                else {
                    this.message = JSON.stringify(this.forms.value);
                }
            }
            console.log("gg ", this.forms.value);
            this.authData.register(value).subscribe(function (data) {
                console.log("Using sql database");
                console.log(data);
            });
            this.authData.entry().subscribe(function (data) {
                console.log("display data using mongodb");
                console.log(data);
                _this.list = data;
                console.log("dataview ", _this.list);
            });
            this.authData.displaydata(value).subscribe(function (data) {
                console.log("entring data using mongodb");
                console.log(data);
            });
            // this.authData.showdata().subscribe((data)=>
            // {
            //   if(data.status)
            //   {
            //     this.router.navigate(['/display']);
            //     console.log("showing data using mongodb");
            //     console.log(data);
            //     this.list=data;
            //     console.log(this.data);
            //   }
            //   else
            //   {
            //     console.log("Unsuccessfull !!!!");
            //     this.c=data.message;
            //     console.log(this.c);
            //   }
            // });
        };
    }
    DataParentComponent.prototype.ngOnInit = function () {
        console.log("a : ", this.authData.a);
        this.forms = this.datacontrol.checkFormParameters(this.inputdata);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataParentComponent.prototype, "inputdata", void 0);
    DataParentComponent = __decorate([
        core_1.Component({
            selector: 'app-data-parent',
            template: __webpack_require__("./src/app/data-parent/data-parent.component.html"),
            styles: [__webpack_require__("./src/app/data-parent/data-parent.component.css")],
            providers: [data_control_service_1.DataControlService]
        }),
        __metadata("design:paramtypes", [data_control_service_1.DataControlService, authguard_service_1.AuthguardService])
    ], DataParentComponent);
    return DataParentComponent;
}());
exports.DataParentComponent = DataParentComponent;


/***/ }),

/***/ "./src/app/data-radio.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var dataformat_1 = __webpack_require__("./src/app/dataformat.ts");
var dataRadio = /** @class */ (function (_super) {
    __extends(dataRadio, _super);
    function dataRadio(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'radio';
        _this.type = 'radio';
        _this.options = [];
        _this.type = options['type'] || '';
        _this.options = options['options'] || [];
        return _this;
    }
    return dataRadio;
}(dataformat_1.dataFormat));
exports.dataRadio = dataRadio;


/***/ }),

/***/ "./src/app/data-textbox.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var dataformat_1 = __webpack_require__("./src/app/dataformat.ts");
var dataTextbox = /** @class */ (function (_super) {
    __extends(dataTextbox, _super);
    function dataTextbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = 'text';
        _this.type = options['type'] || '';
        return _this;
    }
    return dataTextbox;
}(dataformat_1.dataFormat));
exports.dataTextbox = dataTextbox;


/***/ }),

/***/ "./src/app/data.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_textbox_1 = __webpack_require__("./src/app/data-textbox.ts");
var data_radio_1 = __webpack_require__("./src/app/data-radio.ts");
var data_checkbox_1 = __webpack_require__("./src/app/data-checkbox.ts");
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getdata = function () {
        var dataformat = [
            new data_textbox_1.dataTextbox({
                key: 'Enter your Name',
                label: 'Name',
                name: 'name',
                //required: true,
                value: '',
                order: 1,
                type: 'textbox'
            }),
            new data_textbox_1.dataTextbox({
                key: 'Enter your Age',
                label: 'Age',
                name: 'age',
                value: '',
                order: 2,
                //required: true,
                type: 'textbox'
            }),
            new data_textbox_1.dataTextbox({
                key: 'Comment Here',
                label: 'Comment',
                name: 'comment',
                //required: true,
                value: '',
                order: 3,
                type: 'textbox'
            }),
            new data_radio_1.dataRadio({
                key: 'Choose your Qualification',
                label: 'Subject',
                name: 'qualification',
                //required: true,
                options: [
                    { key: 'BCA', value: 'BCA' },
                    { key: 'MCA', value: 'MCA' },
                    { key: 'MBA', value: 'MBA' },
                    { key: 'BBA', value: 'BBA' }
                ],
                order: 5,
                type: 'radio'
            }),
            new data_checkbox_1.dataCheckbox({
                key: 'Enter_hobbies_Details',
                label: 'Hobbies',
                name: 'hobbies',
                //required: true,
                order: 4,
                type: 'checkbox',
                options: [
                    { key: 'GAMES', value: 'games', selected: false },
                    { key: 'DANCING', value: 'dancing', selected: false },
                    { key: 'READING', value: 'reading ', selected: false },
                    { key: 'TRAVELLING', value: 'travelling', selected: false }
                ]
            })
        ];
        return dataformat.sort(function (a, b) { return a.order - b.order; });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/app/data/jsonfile.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.datafile = [
    {
        "id": 1,
        "name": {
            "firstname": "snigdha",
            "lastname": "jogdand"
        }
    },
    {
        "id": 2,
        "name": {
            "firstname": "parul",
            "lastname": "wadhwa"
        }
    }
];


/***/ }),

/***/ "./src/app/dataformat.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataFormat = /** @class */ (function () {
    //options:string;
    //now making a constructor for the dataFormat class
    function dataFormat(
        //all below are constructor parameters
        options) {
        //all below are constructor parameters
        if (options === void 0) { options = {}; }
        // initialising the values to the values of the class
        this.value = options.value;
        this.name = options.name;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.controlType = options.controlType || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        //this.options=options.options||'';
    }
    return dataFormat;
}());
exports.dataFormat = dataFormat;


/***/ }),

/***/ "./src/app/display/display.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  display works!\n</p>\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
    }
    DisplayComponent.prototype.ngOnInit = function () {
    };
    DisplayComponent = __decorate([
        core_1.Component({
            selector: 'app-display',
            template: __webpack_require__("./src/app/display/display.component.html"),
            styles: [__webpack_require__("./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;


/***/ }),

/***/ "./src/app/dynamic-form-question/dynamic-form-question.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form-question/dynamic-form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\" align=\"center\">\n  <label [attr.for]=\"question.key\">\n    {{question.label}}\n  </label>\n  <br>\n  <div [ngSwitch]=\"question.controlType\">\n  <input *ngSwitchCase=\"'textbox'\" [formControlName]=\"question.key\"\n            [id]=\"question.key\" [type]=\"question.type\">\n  <br>\n  <select [id]=\"question.key\" *ngSwitchCase=\"'dropdown'\" [formControlName]=\"question.key\">\n      <option *ngFor=\"let opt of question.options\" [value]=\"opt.key\">\n        {{opt.value}}\n      </option>\n  </select>\n  </div> \n  <br> \n  <div class=\"errorMessage\" *ngIf=\"!isValid\">\n    {{question.label}} is required\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-form-question/dynamic-form-question.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var question_base_1 = __webpack_require__("./src/app/question-base.ts");
var DynamicFormQuestionComponent = /** @class */ (function () {
    function DynamicFormQuestionComponent() {
    }
    DynamicFormQuestionComponent.prototype.isValid = function () { return this.form.controls[this.question.key].valid; };
    DynamicFormQuestionComponent.prototype.ngOnInit = function () {
        console.log("form", this.form);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", question_base_1.QuestionBase)
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-question',
            template: __webpack_require__("./src/app/dynamic-form-question/dynamic-form-question.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form-question/dynamic-form-question.component.css")]
        })
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;


/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" align=\"center\">\n\n    <div *ngFor=\"let question of questions\">\n      <app-question [question]=\"question\" [form]=\"form\"></app-question>\n    </div>\n    <div>\n      <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n    </div>\n  </form>\n  <br>\n  <div *ngIf=\"payLoad\">\n    <strong>Saved the following values</strong><br>{{payLoad}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_control_service_1 = __webpack_require__("./src/app/question-control.service.ts");
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'app-dynamic-form',
            template: __webpack_require__("./src/app/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/dynamic-form.component.css")],
            providers: [question_control_service_1.QuestionControlService]
        }),
        __metadata("design:paramtypes", [question_control_service_1.QuestionControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;


/***/ }),

/***/ "./src/app/form/form.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-style: italic\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<h1> <u>Dynamic Example 2 !!</u></h1>\n<form> \n  <div>\n    <form [formGroup]=\"dform\" (ngSubmit)=\"submit(dform.value)\">\n      <label formGroupName=\"name\">\n      Enter first name \n      <input type=\"text\" formControlName=\"firstname\" required> \n      <br><br>     \n      Eenter second name\n      <input type=\"text\" formControlName=\"lastname\" required>\n      </label>\n      <br><br>\n      <input type=\"submit\" value=\"click here \" [disabled]=\"!dform.valid\">\n      <h4>\n          {{dform.value | json }}\n      </h4> \n      <h5>The values are :<br>{{message}}</h5>\n    </form>\n  </div>\n\n  <hr>\n  <h2> <u>Adding an Item example using array</u> </h2>\n  <div *ngFor=\"let item of toDos;let index = index;trackBy:trackByIndex;\">\n      <input [(ngModel)]=\"toDos[index]\" placeholder=\"item\" name=\"word{{index}}\">\n   </div>\n    <button (click)=\"addItem()\" type=\"button\">\n      Add an Item\n    </button>\n   <div *ngFor=\"let item of toDos\">\n     <label>{{item}}</label>\n   </div>\n<hr>\n<h2><u>\n  Deleting an Item example using array\n</u></h2>\n<div *ngFor=\"let item of toDos;let index = index;trackBy:trackByIndex;\">\n    <input [(ngModel)]=\"toDos[index]\" placeholder=\"item\" name=\"word{{index}}\">\n </div>\n  <button (click)=\"delItem()\" type=\"button\">\n    Delete an Item\n  </button>\n <div *ngFor=\"let item of toDos\">\n   <label>{{item}}</label>\n </div>\n <hr>\n <h3> array list using angular 4</h3> \n  <div>\n   *ngFor is a directive name nd is used to loop over some collections\n    <div *ngFor=\"let data of datafile\"><br>\n        name : {{data.name.firstname}} {{data.name.lastname}}\n  </div>\n  </div>\n<hr>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var data_control_service_1 = __webpack_require__("./src/app/data-control.service.ts");
var jsonfile_1 = __webpack_require__("./src/app/data/jsonfile.ts");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var FormComponent = /** @class */ (function () {
    function FormComponent(data_control, input_data) {
        this.data_control = data_control;
        //json data member 
        this.datafile = jsonfile_1.datafile;
        // This is a array example.
        this.toDos = ["Item 1", "Item 2"];
        this.dataformat_input = [];
        //for displaying the elements of the form using json 
        this.submit = function (value) {
            this.message = JSON.stringify(this.dform.value);
            console.log(value);
        };
        //adding an element in the array
        this.trackByIndex = function (index, obj) {
            return index;
        };
        this.addItem = function () {
            this.toDos.push('0');
        };
        //deleting an item
        this.delItem = function () {
            this.toDos.pop('0');
        };
        input_data.getdata();
    }
    FormComponent.prototype.ngOnInit = function () {
        // this.form=this.data_control.checkFormParameters(this.dataformat_input);  
        this.dform = new forms_1.FormGroup({
            name: new forms_1.FormGroup({
                firstname: new forms_2.FormControl("", forms_2.Validators.required),
                lastname: new forms_2.FormControl("", forms_2.Validators.required)
            })
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FormComponent.prototype, "dataformat_input", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.css")],
            providers: [data_control_service_1.DataControlService]
        }),
        __metadata("design:paramtypes", [data_control_service_1.DataControlService, data_service_1.DataService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;


/***/ }),

/***/ "./src/app/question-base.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;


/***/ }),

/***/ "./src/app/question-control.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var QuestionControlService = /** @class */ (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ?
                new forms_1.FormControl(question.value || '', forms_1.Validators.required)
                : new forms_1.FormControl(question.value || '');
        });
        return new forms_1.FormGroup(group);
    };
    QuestionControlService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;


/***/ }),

/***/ "./src/app/question-dropdown.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var question_base_1 = __webpack_require__("./src/app/question-base.ts");
var DropdownQuestion = /** @class */ (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return DropdownQuestion;
}(question_base_1.QuestionBase));
exports.DropdownQuestion = DropdownQuestion;


/***/ }),

/***/ "./src/app/question-textbox.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var question_base_1 = __webpack_require__("./src/app/question-base.ts");
var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(question_base_1.QuestionBase));
exports.TextboxQuestion = TextboxQuestion;


/***/ }),

/***/ "./src/app/question.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_dropdown_1 = __webpack_require__("./src/app/question-dropdown.ts");
var question_textbox_1 = __webpack_require__("./src/app/question-textbox.ts");
var QuestionService = /** @class */ (function () {
    function QuestionService() {
    }
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new question_dropdown_1.DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                required: true,
                value: '',
                order: 1
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                required: true,
                type: 'email',
                order: 2
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map