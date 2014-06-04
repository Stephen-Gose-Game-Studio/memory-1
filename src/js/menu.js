(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'Memory Game' );
      this.titleTxt.align = 'center';
      this.titleTxt.x = this.game.width / 2 - this.titleTxt.textWidth / 2;
      this.titleTxt.y = this.game.height / 2 - this.titleTxt.textHeight / 2;
    
      y = this.titleTxt.y + this.titleTxt.textHeight + 5 ;

      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', 'Click para empezar', 20);
      this.startTxt.align = 'center';
      this.startTxt.x = this.game.width / 2 - this.startTxt.textWidth / 2;
      //this.startTxt.size = 20;

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['memory'] = window['memory'] || {};
  window['memory'].Menu = Menu;

}());
