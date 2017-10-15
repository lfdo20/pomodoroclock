$('document').ready(function(){

  var pause = 1;
  var work = 1;
  var loop = 1;
  var looprb = 1;
  var oldwork=0;
  var oldpause=0;
  var timer =0;


// notification setup
  var nw = new Audio('served.mp3');
  var np = new Audio('newmessage.mp3');

  Notification.requestPermission();

  function notificationWork(theBody, theTitle) {
    var options = { body: theBody, }
    var nw = new Notification(theTitle, options);
  setTimeout(nw.close.bind(nw), 6000);
}

function notificationPause(theBody, theTitle) {
  var options = { body: theBody, }
  var np = new Notification(theTitle, options);
setTimeout(np.close.bind(np), 6000);
}


// click selection
  $(".display").click(function() {
      if (loop ===1){
        loop=0;
        $(".fa-2x").css({'color' : '#d28521',
        "cursor": "wait",
        "pointer-events": "none"
        });
          if(oldwork !== work || oldpause !== pause){
            looprb=1;
            $(".clock").css({'borderColor' : '#35550F'});
            runwork();
          }
          else{
              timer.start();
      }
      }
      else{
        $(".fa-2x").css({'color' : '#d8dccd;',
        "cursor": "pointer",
        "pointer-events": "auto",
      });
      oldwork = work;
      oldpause = pause;
      timer.pause();
      loop = 1;
      }
      console.log(loop);
    });

// time setting
    if (loop === 1){

      $(".pauseup").click(function(){
        pause = pause+1;
        $(".setpause").html(pause);

      });

      $(".pausedown").click(function(){
        if (pause > 2) {pause = pause-1;
        $(".setpause").html(pause);}
      });

      $(".workup").click(function(){
        work = work+1;
        $(".setwork").html(work);

      });

      $(".workdown").click(function(){
        if (work > 10) { work = work-1;
        $(".setwork").html(work);}
      });
    }
    else{

    }

// work function
function runwork(){
  timer = new Timer();
  var spin=0;
  timer.start({countdown: true, startValues: {seconds: (work*60)}});
  $('.counter').html(timer.getTimeValues().toString(['minutes', 'seconds']));
    console.log('work' + work);
    timer.addEventListener('secondsUpdated', function (e) {
      $('.counter').html(timer.getTimeValues().toString(['minutes', 'seconds']));
      spin = spin+ ((360/(work*60)));
      console.log(spin);
      $(".arrow2").css({
          '-moz-transform':'rotate('+spin+'deg)',
          '-webkit-transform':'rotate('+spin+'deg)',
          '-o-transform':'rotate('+spin+'deg)',
          '-ms-transform':'rotate('+spin+'deg)',
          'transform': 'rotate('+spin+'deg)'
     });
    });
    timer.addEventListener('targetAchieved', function (e) {
        $(".clock").css({'borderColor' : '#ad2a47'});
        looprb = 0;
        console.log('Fim trabalho'+looprb);
        notificationPause('Ok, finally relax!', 'Pomodoro Clock');
        np.play();
        timer.stop();
        timer =0;
        runpause();
    });
  };

//pause function
function runpause(){
  timer = new Timer();
  var spin=0;
  timer.start({countdown: true, startValues: {seconds: (pause*60)}});
  $('.counter').html(timer.getTimeValues().toString(['minutes', 'seconds']));
    console.log('pause' + pause);
    timer.addEventListener('secondsUpdated', function (e) {
      $('.counter').html(timer.getTimeValues().toString(['minutes', 'seconds']));
      spin = spin+ ((360/(pause*60)));
      console.log(spin);
      $(".arrow2").css({
          '-moz-transform':'rotate('+spin+'deg)',
          '-webkit-transform':'rotate('+spin+'deg)',
          '-o-transform':'rotate('+spin+'deg)',
          '-ms-transform':'rotate('+spin+'deg)',
          'transform': 'rotate('+spin+'deg)'
     });
    });
    timer.addEventListener('targetAchieved', function (e) {
        $(".clock").css({'borderColor' : 'green'});
        looprb = 1;
        console.log('Fim descanso'+looprb);
        notificationWork('Get back to work man!', 'Pomodoro Clock');
        nw.play();
        timer.stop();
        timer=0;
        runwork();
    });
  };
});
