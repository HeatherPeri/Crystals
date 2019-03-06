
var randomresult = 0;
var win = 0;
var lost = 0;
var previous = 0;

var ResetstartGame = function(){

  $(".crystals").empty();
  
  var images = ["https://i.pinimg.com/236x/1d/e6/92/1de692ac8dc11b976acd924c1dd90a3d--crystal-drawing-google-search.jpg", 
  "https://i.pinimg.com/originals/5e/4a/6f/5e4a6ff52e7a5e2e4923d4dbeebe9a4a.jpg", 
  "https://i.pinimg.com/736x/fb/f3/33/fbf3333d4a0d906fe34fa0c46994c235--crystal-drawing-crystal-tattoo.jpg", 
  "https://designformankind.com/images/2010/08/gem-drawing-412x563.jpg"];

  randomresult = Math.floor(Math.random() * 90 ) + 30;

  $("#result").html('Random Number: ' + randomresult);

  for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 18 ) + 1;

    var crystal = $("<div>");
        crystal.attr({
          "class": 'crystal',
          "data-random": random
        });

        crystal.css({
          "background-image":"url('" + images[i] + ""')",
          "background-size": "cover"
        });

      $(".crystals").append(crystal);

  }

$("#previous").html("Total Score: " + previous);

      ResetstartGame();

      var reset = function () {

      }
  $(document).on('click', ".crystal", function () { 

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    if(previous > randomresult){
      lost++;
      $("$lost").html("lost!" + lost);
      previous = 0;
      
      ResetstartGame();
    }
    
    else(previous === randomresult){
      win++;
      $("$win").html("win!" + win);
      previous = 0;
      
      ResetstartGame();
    }
  });

//     if(first > randomresult){
//       lost++;
      
//       first = 0;

//       $("$win").html(lost);
//       ResetstartGame();
//     }

//     else(first === randomresult) {
//       win++;


//       first = 0;

