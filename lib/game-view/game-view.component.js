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
var toolbar_component_1 = require("../commons/toolbar/toolbar.component");
var game_status_service_1 = require("../services/game-status.service");
var game_control_1 = require("../services/game-control");
var icon_1 = require('@angular/material');
var GameViewComponent = (function () {
    function GameViewComponent(gameStatus, gameControl, appRef, mdIconRegistry) {
        this.gameStatus = gameStatus;
        this.gameControl = gameControl;
        this.appRef = appRef;
        this.mdIconRegistry = mdIconRegistry;
        this.title = 'game-mates';
        this.viewStatus = ViewStatus.NOT_STARTED_GAME;
        this.gameDisplay = "block";
        mdIconRegistry
            .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }
    ;
    GameViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolbarConfig = new toolbar_component_1.ToolbarConfig();
        // this.gameInstance = this.gameControl.getGameInstance()
        this.gameControl
            .onGameInstanceChange()
            .subscribe(function (gameInstance) {
            console.log('game-view onGameInstanceChange', gameInstance.gameId);
            _this.gameInstance = gameInstance;
        });
        this.gameControl
            .onStart()
            .subscribe(function (isStarted) {
            console.log('game-view onStart', isStarted);
            _this.loadingLevel();
        });
        this.gameStatus.subjectLevel.subscribe(function (level) {
            _this.loadingLevel();
        });
        this.gameStatus.subjectGameOver.subscribe(function (gameOverType) { return _this.gameOver(gameOverType); });
    };
    /***************/
    GameViewComponent.prototype.loadingLevel = function () {
        this.viewStatus = ViewStatus.LOADING_LEVEL;
        this.gameStatus.pauseGame();
        this.gameDisplay = "none";
    };
    GameViewComponent.prototype.playLevel = function () {
        this.viewStatus = ViewStatus.PLAY_LEVEL;
        this.gameStatus.resumeGame();
        this.gameDisplay = "block";
    };
    GameViewComponent.prototype.gameOver = function (gameOver) {
        this.gameOverType = gameOver;
        this.viewStatus = ViewStatus.GAME_OVER;
        this.gameDisplay = "none";
        this.appRef.tick();
    };
    GameViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game-view',
            templateUrl: 'game-view.component.html',
            styleUrls: ['game-view.component.css'],
            viewProviders: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [game_status_service_1.GameStatusService, game_control_1.GameControl, core_1.ApplicationRef, icon_1.MdIconRegistry])
    ], GameViewComponent);
    return GameViewComponent;
}());
exports.GameViewComponent = GameViewComponent;
(function (ViewStatus) {
    ViewStatus[ViewStatus["NOT_SELECTED_GAME"] = 0] = "NOT_SELECTED_GAME";
    ViewStatus[ViewStatus["NOT_STARTED_GAME"] = 1] = "NOT_STARTED_GAME";
    ViewStatus[ViewStatus["LOADING_LEVEL"] = 2] = "LOADING_LEVEL";
    ViewStatus[ViewStatus["PLAY_LEVEL"] = 3] = "PLAY_LEVEL";
    ViewStatus[ViewStatus["GAME_OVER"] = 4] = "GAME_OVER";
})(exports.ViewStatus || (exports.ViewStatus = {}));
var ViewStatus = exports.ViewStatus;
//# sourceMappingURL=game-view.component.js.map