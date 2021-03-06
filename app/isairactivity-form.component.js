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
var core_1 = require('@angular/core');
var activity_1 = require('./activity');
var IsairActivityFormComponent = (function () {
    function IsairActivityFormComponent() {
        this.model = new activity_1.Activity(1, 'Title1', 'Price1');
        this.submitted = false;
    }
    IsairActivityFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(IsairActivityFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    IsairActivityFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity-form',
            templateUrl: 'activity-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], IsairActivityFormComponent);
    return IsairActivityFormComponent;
}());
exports.IsairActivityFormComponent = IsairActivityFormComponent;
//# sourceMappingURL=isairactivity-form.component.js.map