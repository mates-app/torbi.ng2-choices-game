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
 * Created by josecullen on 11/09/16.
 */
var core_1 = require("@angular/core");
var effectivity_circle_component_1 = require("../effectivity-circle/effectivity-circle.component");
var game_control_1 = require("../../services/game-control");
var EffectivityContent = (function () {
    function EffectivityContent(gameControl) {
        this.gameControl = gameControl;
        this.isGameOver = false;
    }
    EffectivityContent.prototype.ngOnInit = function () {
        console.log('effectivity content init', this.isGameOver);
    };
    EffectivityContent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isGameOver
            ? this.gameControl
                .onGameOver()
                .subscribe(function (gameOver) {
                _this.gameProgress.replay();
                _this.effectivity.replay();
            })
            : this.gameControl
                .onLevelChange()
                .subscribe(function (level) {
                _this.gameProgress.replay();
                _this.effectivity.replay();
            });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EffectivityContent.prototype, "isGameOver", void 0);
    __decorate([
        core_1.ViewChild('gameProgress'), 
        __metadata('design:type', effectivity_circle_component_1.EffectivityCircle)
    ], EffectivityContent.prototype, "gameProgress", void 0);
    __decorate([
        core_1.ViewChild('effectivity'), 
        __metadata('design:type', effectivity_circle_component_1.EffectivityCircle)
    ], EffectivityContent.prototype, "effectivity", void 0);
    EffectivityContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'effectivity-content',
            styleUrls: ['effectivity-content.css'],
            template: "\n        <h2>Progreso del Juego</h2>\n        <effectivity-circle #gameProgress [wholeGame]=\"true\"></effectivity-circle>\n        <h2>Efectividad</h2>\n        <effectivity-circle #effectivity [wholeGame]=\"false\" [isGameOver]=\"isGameOver\"></effectivity-circle>\n\n"
        }), 
        __metadata('design:paramtypes', [game_control_1.GameControl])
    ], EffectivityContent);
    return EffectivityContent;
}());
exports.EffectivityContent = EffectivityContent;
//# sourceMappingURL=effectivity-content.js.map