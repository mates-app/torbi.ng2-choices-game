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
/**
 * Created by josecullen on 30/08/16.
 */
/**
 * Created by josecullen on 30/08/16.
 */
var core_1 = require('@angular/core');
var TbtComments = (function () {
    function TbtComments() {
        this.comments = [];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TbtComments.prototype, "comments", void 0);
    TbtComments = __decorate([
        core_1.Component({
            selector: 'tbt-comments',
            template: "\n        <div *ngFor=\"let comment of comments\">\n            <h3>{{comment.title}}</h3>\n            <h6>{{comment.author}} {{comment.date}}</h6>\n            <h5>{{comment.content}}</h5>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TbtComments);
    return TbtComments;
}());
exports.TbtComments = TbtComments;
//# sourceMappingURL=comments.component.js.map