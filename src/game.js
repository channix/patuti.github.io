alien.init();

alien.assetPaths.images = 'assets/images/';

var start = new Date().getTime(),
    score = '0.1';

window.setInterval(function() {
    var time = new Date().getTime() - start;
    score = Math.floor(time / 1000) ;
    if(Math.round(score) == score) 
        { score }
}, 100);

alien.loadAssets('background.png', 'bullet.png', 'player.png').then(
  function(){
    var background = alien.sprite({
      x: 0,
      y: 0,
      image: alien.images.background
      
    });

    var player = alien.sprite({
      x: 120,
      y: 240,
      image: alien.images.player
    });

    var bullets = [
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.1
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.2
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.3
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.4
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.5
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.6
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.7
      }),
      alien.sprite({
        x: Math.random() * 240,
        y: 0,
        image: alien.images.bullet,
        dy: 1.8
      })
      
    ];

    var loop = alien.gameLoop({
      update: function() {
        
        //left and right
        if(alien.keys.pressed('left')) {
          player.x -= 1.5;
        }
        if(alien.keys.pressed('right')) {
          player.x += 1.5;
        }

        if(player.x < 0 ){
          player.x = 0;
        }

        if(player.x > 244) {
          player.x = 244;
        }

        //up and down
        if(alien.keys.pressed('up')) {
          player.y -= 1.5;
        }
        if(alien.keys.pressed('down')) {
          player.y += 1.5;
        }

        if(player.y < 0 ){
          player.y = 0;
        }

        if(player.y > 244) {
          player.y = 244;
        }


        
        player.update();

        //bullet bouncing
        bullets.forEach(function(bullet){
          if(bullet.y > 256) {
            bullet.y = 0;
            bullet.x = Math.random() * 240

          }

          bullet.update();


          //check for collision
          if(bullet.collidesWith(player)) {
            loop.stop();
            if(score>1){
              alert ("You survived : " + score + " seconds ")
            }
            else if(score<=1){
              alert ("You survived : " + score + " second ")
            }
            window.location = '';
          }
        });

        background.update();
        

      },
      render: function() {
        background.render();
        player.render();
        bullets.forEach(function(bullet){
          bullet.render();
        });
      }
    });

    loop.start();
  }


);
