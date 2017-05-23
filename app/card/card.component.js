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
var task_1 = require('../model/task');
var CardComponent = (function () {
    function CardComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], CardComponent.prototype, "task", void 0);
    CardComponent = __decorate([
        core_1.Component({
            //using commonJS, helps with relative path of files
            moduleId: module.id,
            selector: 'app-card',
            // any templates with more than 3 lines, separate into another template file
            //angular by default, finds file from project directory, NOT current file
            templateUrl: 'card.component.html',
            //styles component needs to be an array, b/c you can have multiple sheets per component
            styleUrls: ['card.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map