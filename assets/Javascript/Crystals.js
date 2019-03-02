
var randomresult;
var win = 0;
var lose = 0;
var first = 0;

var ResetstartGame = function(){

  $(".crystals").empty();
  
randomresult = Math.floor(Math.random() * 90 ) + 30;

$("#result").html('Random Number: ' + randomresult);

for(var i = 0; i < 4; i++){

  var random = Math.floor(Math.random() * 18 ) + 1;

  var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });

    crystal.html(random);

    // $(".crystals").append(crystal);

  }
      }

      ResetstartGame();
  $(document).on('click', ".crystal", function (){

   

    var num = parseInt($(this).attr('data-random'));

    first += num;

    if(first > randomresult){
      lost++;
      
      first = 0;

      $("$win").html(lost);
      ResetstartGame();
    }

    else(first === randomresult){
      win++;

      $("$win").html(win);

      first = o;
      ResetstartGame();

    }

  });


{/* <button id="Crystal1"  value="1"><span>1</span></button>
<button id="Crystal2"  value="2"><span>2</span></button>
<button id="Crystal3"  value="3"><span>3</span></button>
<button id="Crystal4"  value="4"><span>4</span></button>


$(document).ready(function() {
    
    var Cry1 = 1-19;
    var Cry2 = 1-19;
    var Cry3 = 1-19;
    var Cry4 = 1-19;

$("Cry1").on("click", function() {

  for (var i = 19; i < 120; i++) {

  var randomnum = Math.floor(Math.random() * 120);

      }
      
$("Cry2").on("click", function()

for (var i = 19; i < 120; i++) {

  var randomnum = Math.floor(Math.random() * 120);

}

$("Cry3").on("click", function()

for (var i = 19; i < 120; i++) {

  var randomnum = Math.floor(Math.random() * 120);

}

$("Cry4").on("click", function()

for (var i = 19; i < 120; i++) {

  var randomnum = Math.floor(Math.random() * 120);

} */}
