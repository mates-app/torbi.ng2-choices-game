# torbi.ng2-choices-game
An Angular 2 game module to facilitate the creation of a multiple choices game. 

The module offers the posibilities of math questions (using latex) or plain text question (see the pictures below). 

<img src="https://github.com/mates-app/torbi.ng2-choices-game/blob/master/ng2-choices-module.png">

## Instalation
`npm install --save torbi.ng2-choices-game`

Then you need to configure it in your `systemjs.config.js` if you use it.

## Usage
The library was thinked to be really easy to use. You got two main components: `game-view` component and `GameControl` service. Additionally, you will need to use `models`: a collection of models classes.

### GameControl
The `GameControl` is your interface to control the whole game. You can call methods or attach to events. Next we show you the interface details:

#### Methods
```
setGameInstance(GameInstance) : Sets the instance of the game
getGameInstance() : Retrieve the game instance
start() : Starts the game
pause() : Pauses the game
resume() : Resumes the game
```

#### Events
```
onScoreChange() : called when the score changes, returns an observable of the Score to add. This method is really important to manage the user score
onStart() : called when the game is started.
onGameInstanceChange() : called when the game instance is changed.
onLevelChange(): called when a level is changed. Returns the number of the new level
onGameOver() : called when the game is over. Returns a GameOverType.
```

For library test purposes, this service offers a `gameMock`. You can use it to facilitate the library's first uses (keep in mind that the game model could be a big json file)


### Game View Component
This is the main selector of the library. This was thinked to work without anything else. Like this:
```html
<game-view></game-view>
```

But if you use it like above, the *Level Load Screen* and *Game Over Screen* will not show anything. To avoid this situation, you need to use a few more selectors. Below, we show you how:

```html
<game-view>
  <first-level-body>
    here you can put the html to show at the charge of the first level
    <p>Prepare to Plaaay!<p>
  </first-level-body>
  <level-load-body>
    here you can put the html to show at the charge of all non first level
  </level-load-body>
  <game-over-body>
    here you can put the html to show at the game over screen
  </game-over-body>
</game-view>
```

#### Effectivity content
Like we said above, the goal of this library it's to be easy to use. For that reason we added a selector called `<effectivity-content [isGameOver]='boolean'></effectivity-content>`, to use in the `level-load-body` and `game-over-body`. You can look the result of the use of this selector at the third and fourth images at the beginning of this readme. 

```html
<game-view>
  <first-level-body>
    <p>Prepare to Plaaay!<p>
  </first-level-body>
  <level-load-body>
   <effectivity-content [isGameOver]='false'></effectivity-content>
  </level-load-body>
  <game-over-body>
    <effectivity-content [isGameOver]='true'></effectivity-content>
  </game-over-body>
</game-view>
```








