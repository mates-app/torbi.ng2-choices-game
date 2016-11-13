/**
 * Created by josecullen on 10/09/16.
 */
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
var core_1 = require("@angular/core");
var game_status_service_1 = require("../../services/game-status.service");
var Rx_1 = require("rxjs/Rx");
var game_control_1 = require("../../services/game-control");
var EffectivityCircle = (function () {
    function EffectivityCircle(gameStatus, gameControl) {
        this.gameStatus = gameStatus;
        this.gameControl = gameControl;
        this.wholeGame = false;
        this.isGameOver = false;
        this.effectivity = 0;
    }
    EffectivityCircle.prototype.ngOnInit = function () {
        // console.log('this.wholeGame',this.wholeGame)
        this.replay();
    };
    EffectivityCircle.prototype.replay = function () {
        var _this = this;
        this.runEffectivity().subscribe(function (value) {
            _this.effectivity = value;
        });
    };
    EffectivityCircle.prototype.runEffectivity = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var count = 0;
            var effectivity = _this.calculateEffectivity(_this.wholeGame);
            var interval = setInterval(function () {
                if (count >= effectivity) {
                    observer.next(parseInt('' + effectivity, 10));
                    observer.complete();
                    return clearInterval(interval);
                }
                else {
                    observer.next(count++);
                }
            }, 50);
        });
    };
    EffectivityCircle.prototype.calculateEffectivity = function (wholeGame) {
        console.log('wholeGame', wholeGame, this.gameControl.getGameInstance().levels.length, this.gameStatus.level + 1);
        var levelCount = wholeGame ? this.gameControl.getGameInstance().levels.length : this.gameStatus.level;
        var effectivity = 0;
        var bestEffectivity = 0;
        if (this.isGameOver && !wholeGame) {
            levelCount++;
        }
        if (this.gameStatus.score != 0) {
            for (var i = 0; i < levelCount; i++) {
                var level = this.gameControl.getGameInstance().levels[i];
                var bestScorePerProblem = level.scoreConfig.baseScore + level.scoreConfig.extras[0].extraScore;
                bestEffectivity += bestScorePerProblem * level.gameProblems.length;
            }
            // console.log('score', this.gameStatus.score, 'bestEffectivity', bestEffectivity, 'effectivity', effectivity)
            effectivity = this.gameStatus.score * 100 / bestEffectivity;
        }
        // console.log('effectivity',effectivity)
        return effectivity;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EffectivityCircle.prototype, "wholeGame", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EffectivityCircle.prototype, "isGameOver", void 0);
    EffectivityCircle = __decorate([
        core_1.Component({
            selector: 'effectivity-circle',
            template: "\n      <button class=\"progress-button\" md-mini-fab color=\"accent\">\n        <p><strong>{{effectivity}}</strong></p>\n        <md-progress-circle  class=\"inner-button-progress\" mode=\"determinate\" [value]=\"effectivity\" ></md-progress-circle> \n      </button>\n\n",
            styles: ["\n        md-progress-circle.inner-button-progress{\n          position: inherit;\n          z-index: 10;\n          transform: translateY(-70%) translateX(-28%);\n        }\n        \n        button.progress-button{\n          margin: 45px\n        }\n        button.progress-button p{\n          margin: 2px\n        }\n      "
            ]
        }), 
        __metadata('design:paramtypes', [game_status_service_1.GameStatusService, game_control_1.GameControl])
    ], EffectivityCircle);
    return EffectivityCircle;
}());
exports.EffectivityCircle = EffectivityCircle;
//# sourceMappingURL=effectivity-circle.component.js.map