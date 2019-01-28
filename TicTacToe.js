
var player = 1;
function startGame(event) {
 
    // I need to check it the cell is empty or not
     if ($(event.target).text() === '') { 
        if(player%2 === 1){
            $(event.target).text('X');
            $(event.target).css({"color":"white", "font-size":"110px"});
            $('.whosNext').text('Next move by O');
            $("<audio></audio>").attr({
                'src':'sound.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");

         }
        else { 
            $(event.target).text('O');
            $(event.target).css({"color":"white", "font-size":"110px"});
            $('.whosNext').text('Next move by X');
            $("<audio></audio>").attr({
                'src':'sound.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
            player++;
            theWinner()
    }}

$('.grid').on('click', startGame);

function theWinner() {

var box1 = $('#gridOne').text();
var box2 = $('#gridTwo').text();
var box3 = $('#gridThree').text();
var box4 = $('#gridFour').text();
var box5 = $('#gridFive').text();
var box6 = $('#gridSix').text();
var box7 = $('#gridSeven').text();
var box8 = $('#gridEight').text();
var box9 = $('#gridNine').text();



// check for rows //
if((box1 === box2 ) && (box2 === box3) && (box2 !== '')){
 
    swal("The winner is " + box3);
    resetField()
}
else if ((box4 === box5) && (box5 === box6) && (box5 !== "")) {
    swal("The winner is " + box6);
    resetField()
}
else if ((box7 === box8) && (box8 === box9) && (box8 !== "")){
    swal("The winner is " + box9);
    resetField()
}
// check for col //
else if ((box1 === box4) && (box4 === box7) && (box4 !== "")){
    swal("The winner is " + box7);
    resetField()
}
else if ((box2 === box5) && (box5 === box8) && (box5 !== "")) {
    swal("The winner is " + box8);
    resetField()
}
else if ((box3 === box6) && (box6 === box9) && (box6 !== "")) {
    swal("The winner is " + box9);
    resetField()
}
// check for Diagonqle //
else if ((box1 === box5) && (box5 === box9) && (box5 !== "")){
    swal("The winner is " + box9);
    resetField()
}

else if ((box3 === box5) && (box5 === box7) && (box5 !== "")) {
    swal("The winner is " + box7);
    resetField()

} else if((box1 !== '') && (box2 !== '') && (box3 !== '') && (box4 !== '') && (box5 !== '') && (box6 !== '') && (box7 !== '') && (box8 !== '') && (box9 !== '')) {
    swal("No Winner !!! ");
    resetField()
}
}

function resetField(){
    player = 1;
    $('#gridOne').text('');
    $('#gridTwo').text('');
    $('#gridThree').text('');
    $('#gridFour').text('');
    $('#gridFive').text('');
    $('#gridSix').text('');
    $('#gridSeven').text('');
    $('#gridEight').text('');
    $('#gridNine').text('');
    $('.whosNext').text('');
}
$('#reset').on('click',resetField);




