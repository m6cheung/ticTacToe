$(document).ready(function() {
  var $reset = $('.reset');
  var $result = $('.result');
  var $one = $('.one');
  var $two = $('.two');
  var $three = $('.three');
  var $four = $('.four');
  var $five = $('.five');
  var $six = $('.six');
  var $seven = $('.seven');
  var $eight = $('.eight');
  var $nine = $('.nine');
  var playerWin = [];
  var clicked = [
    {
      on: true,
      box: $one,
      num: '1'
    },
    {
      on: true,
      box: $two,
      num: '2'
    },
    {
      on: true,
      box: $three,
      num: '3'
    },
    {
      on: true,
      box: $four,
      num: '4'
    },
    {
      on: true,
      box: $five,
      num: '5'
    },
    {
      on: true,
      box: $six,
      num: '6'
    },
    {
      on: true,
      box: $seven,
      num: '7'
    },
    {
      on: true,
      box: $eight,
      num: '8'
    },
    {
      on: true,
      box: $nine,
      num: '9'
    }];
  var win = ['123', '456', '789', '147', '369', '258', '159', '357'];
  var player = '';
  var cpu = '';
  
  $result.hide();
  $reset.hide();
  
  function perm(str, arr) {
    if(typeof str === 'string') {
      str = str.split('');
    }
    if(str.length === 0) {
      playerWin.push(arr.join(''));
    }
    for(var i = 0; i < str.length; i++) {
      var int = str.splice(i,1);
      arr.push(int);
      perm(str, arr);
      arr.pop();
      str.splice(i,0,int);
    }
  }
  
  function easy(arr) {
    var trueCount = arr.length;
    var randomize = Math.floor(Math.random() * trueCount);
    if(arr[randomize].on === true) {
      arr[randomize].on = false;
      arr[randomize].box.html('O');
      cpu += arr[randomize].num.toString();
    } else if((cpu.length < 4 && player.length < 5) || (cpu.length < 5 && player.length < 4)) {
      cpuPicks();
    } 
  }
  
  function impossible(arr) {
    
  }
  
  function cpuPicks() {
    easy(clicked);
    if(cpu.length >= 3) {
      perm(cpu, []);
      for(var j = 0; j < playerWin.length; j++) {
        if(win.indexOf(playerWin[j].substring(0,3)) !== -1) {
          clicked.forEach(function(obj) {obj.on = false;});
          $result.html('CPU Wins!');
          $result.show();
          $reset.show();
        }
      }
    }
    playerWin = [];
  }
  
  function checkWin(strH, strC) {
    if(strH.length >= 3) {
      perm(strH, []);
      for(var i = 0; i < playerWin.length; i++) {
        if(win.indexOf(playerWin[i].substring(0,3)) !== -1) {
          clicked.forEach(function(obj) {obj.on = false;});
          $result.html('You Win!');
          $result.show();
          $reset.show();
          return;
        }
      }
      if((strH.length === 5 && strC.length === 4) || (strH.length === 4 && strC.length === 5)) {
        clicked.forEach(function(obj) {obj.on = false;});
        $result.html('Tie Game!');
        $result.show();
        $reset.show();
        return;
      }
    }
    playerWin = [];
    cpuPicks();
  }
  
  $reset.on('click', function() {
    clicked.forEach(function(obj) {return obj.on = true;});
    $one.html('');
    $two.html('');
    $three.html('');
    $four.html('');
    $five.html('');
    $six.html('');
    $seven.html('');
    $eight.html('');
    $nine.html('');
    $result.hide();
    $reset.hide();
    player = '';
    cpu = '';
    playerWin = [];
  })
  
  $one.on('click', function() {
    if(clicked[0].on) {
      clicked[0].on = false;
      $one.html('X');
      player += '1';
      checkWin(player, cpu);
    }
  });
  
  $two.on('click', function() {
    if(clicked[1].on) {
      clicked[1].on = false;
      $two.html('X');
      player += '2';
      checkWin(player, cpu);
    }
  });
  
  $three.on('click', function() {
    if(clicked[2].on) {
      clicked[2].on = false;
      $three.html('X');
      player += '3';
      checkWin(player, cpu);
    }
  });
  
  $four.on('click', function() {
    if(clicked[3].on) {
      clicked[3].on = false;
      $four.html('X');
      player += '4';
      checkWin(player, cpu);
    }
  });
  
  $five.on('click', function() {
    if(clicked[4].on) {
      clicked[4].on = false;
      $five.html('X');
      player += '5';
      checkWin(player, cpu);
    }
  });
  
  $six.on('click', function() {
    if(clicked[5].on) {
      clicked[5].on = false;
      $six.html('X');
      player += '6';
      checkWin(player, cpu);
    }
  });
  
  $seven.on('click', function() {
    if(clicked[6].on) {
      clicked[6].on = false;
      $seven.html('X');
      player += '7';
      checkWin(player, cpu);
    }
  });
  
  $eight.on('click', function() {
    if(clicked[7].on) {
      clicked[7].on = false;
      $eight.html('X');
      player += '8';
      checkWin(player, cpu);
    }
  });
  
  $nine.on('click', function() {
    if(clicked[8].on) {
      clicked[8].on = false;
      player += '9';
      $nine.html('X');
      checkWin(player, cpu);
    }
  });
});