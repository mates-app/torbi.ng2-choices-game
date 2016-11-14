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
 * Created by josecullen on 10/09/16.
 */
var core_1 = require('@angular/core');
var models_1 = require("../models");
var GameOverComponent = (function () {
    function GameOverComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GameOverComponent.prototype, "gameOverType", void 0);
    GameOverComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game-over',
            template: "\n<div class=\"flex-container\">\n\n  <header>\n    <h1>Game Over</h1>    \n  </header>\n\n  <br>\n\n  <section class=\"content\">\n    <div class=\"sub-content\">\n      <ng-content select=\"game-over-body\"></ng-content>\n    </div>\n  </section>\n\n  <br>\n\n  <footer>\n  </footer>\n  </div>  \n\n\n  ",
            styleUrls: ['game-over.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GameOverComponent);
    return GameOverComponent;
}());
exports.GameOverComponent = GameOverComponent;
var GameOverBody = (function () {
    function GameOverBody() {
    }
    GameOverBody = __decorate([
        core_1.Directive({
            selector: 'game-over-body'
        }), 
        __metadata('design:paramtypes', [])
    ], GameOverBody);
    return GameOverBody;
}());
exports.GameOverBody = GameOverBody;
//# sourceMappingURL=game-over.component.js.map