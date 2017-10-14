$('document').ready(function(){

  var pause = 2;
  var work = 1;
  var loop = 1;
  var looprb = 1;
  var oldwork, oldpause;
/*
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
console.log(time);

var date = new Date(new Date().valueOf();
console.log(date);


*/

  $(".display").click(function() {
      if (loop ===1){
        loop = 0;
        $(".fa").css({'color' : 'green',
        "cursor": "wait",
        "pointer-events": "none"
        });
          if(oldwork !== work || oldpause !== pause){
           runwork();
            /*
              var date = new Date(new Date().valueOf() + work * 60 * 1000);
              console.log(date);
              $('.counter').countdown(date, function(event) {
              $(this).html(event.strftime('%M:%S'));
            });

            do {
              if (looprb === 1){


              }
              else if (looprb === 0){

              }
            } while (loop === 1); */
          }
          else{
              $('.counter').countdown('resume');
      }
      }
      else{
        loop = 1;
        $(".fa").css({'color' : 'black',
        "cursor": "pointer",
        "pointer-events": "auto",
      });
      oldwork = work;
      oldpause = pause;
      $('.counter').countdown('pause');
      }
      console.log(loop);
    });


    if (loop === 1){

      $(".pauseup").click(function(){
        pause = pause+1;
        $(".setpause").html(pause);

      });

      $(".pausedown").click(function(){
        if (pause > 1) {pause = pause-1;
        $(".setpause").html(pause);}
      });

      $(".workup").click(function(){
        work = work+1;
        $(".setwork").html(work);

      });

      $(".workdown").click(function(){
        if (work > 1) { work = work-1;
        $(".setwork").html(work);}
      });
    }
    else{

    }


function runwork(){
  console.log('work' + work);
  var date = new Date(new Date().valueOf() + work * 5 * 1000);
  console.log(date);
  $('.counter').countdown(date, function(event) {
    $(this).html(event.strftime('%M:%S'))
    .on('finish.countdown', function(event){

      $(".clock").css({'borderColor' : 'green'});
       runpause();
    });
  });
}

function runpause(){
  console.log('pause' +pause);
  var date = new Date(new Date().valueOf() + pause * 5 * 1000);
  console.log(date);
  $('.counter').countdown(date, function(event) {
    $(this).html(event.strftime('%M:%S'))
    .on('finish.countdown', function(event){

      $(".clock").css({'borderColor' : 'red'});
      runwork();
    });
  });
}

/*
  console.log(work);
  var date = new Date(new Date().valueOf() + work * 60 * 1000);
  console.log(date);
  $('.counter').countdown(date, function(event) {
    $(this).html(event.strftime('%M:%S'));
  });

  console.log(pause);
  var date = new Date(new Date().valueOf() + pause * 60 * 1000);
  console.log(date);
  $('.counter').countdown(date, function(event) {
    $(this).html(event.strftime('%M:%S'));
  });
} while (loop ===1);

*/

});
