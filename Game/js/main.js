// Get the button that opens the modal
var btn = document.querySelectorAll("a.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
    modal.classList.add('open');  
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') {
        modals[index].style.display = "none";    
        modals[index].classList.remove('open');  
      }
    }
  }
}


// disable a tag(modal btn) if clicked
$(document).on("click",".modal-button", function (e) {
  var clickedBtnID = $(this).attr('id');
  var wordLine = $('.modal.open').attr('data-lines');           // start of letter line
  var wordLength = wordLine.length;
  let letterLines = document.querySelector('.open #word-lines');
  
  for (let i = 0; i<wordLength; i++) {
    var div = document.createElement('div');
    letterLines.appendChild(div);
    div.classList.add('line');
  }                    

  $('#'+clickedBtnID).css('background-color','gray');
  $('#'+clickedBtnID).css('cursor','default');
  $('#'+clickedBtnID).prop( "disabled", true );

  // Store input tries
  $('.modal.open input').on("keypress", function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13') {                                                      //when 'enter' is pressed
      var substring = $(this).val().toLowerCase();
    
      for (i = -1; i <= wordLength; i++) {
        if (wordLine[i] == substring) {
          var a = i+1;
          $('.open #word-lines .line:nth-child('+a+')').text(substring);
        }
      }
      $(".modal.open .tries #try").append('<span>'+substring+'</span>'); //add Hint letter
      $(this).val("");                                                       //clear input

      var currentValue = parseInt($('.modal.open .point').text());            // points value
      var newValue = currentValue - 10;                                       // points value              
      $('.modal.open .point').text(newValue);                                 // points value      

      //Team select
      var team1Point = parseInt($('.modal.open .team1 span').text());
      var tot1Point = team1Point + newValue;

      var team2Point = parseInt($('.modal.open .team2 span').text());
      var tot2Point = team2Point + newValue;
      $(document).on('click','.team', function(e){
        if($(e.target).hasClass('team1')) {
          $(e.target).addClass('selected');
          $('.team .team2').removeClass('selected');
          
          $('.modal .team1 span').text(tot1Point);
        } else if($(e.target).hasClass('team2')) {
          $(e.target).addClass('selected');
          $('.team .team1').removeClass('selected');

          $('.modal .team2 span').text(tot2Point);

        }
      });
      if (newValue === 0) {
        $(this).prop( "disabled", true );

        $(document).one("click",".modal .innerContainer", function (e) {
          $(this).find('.answer').removeClass('hide');
        });
      }
    }
  }); 

  //for no hint
  $('.modal.open .show button').one('click', function() { 
    $('.modal.open input').prop( "disabled", true );
    $('.modal.open').find('.answer').removeClass('hide');

    var currentValue = parseInt($('.modal.open .point').text());
    var newValue = currentValue;
    $('.modal.open .point').text(newValue);

    //Team select
      var team1Point = parseInt($('.modal.open .team1 span').text());
      var tot1Point = team1Point + newValue;

      var team2Point = parseInt($('.modal.open .team2 span').text());
      var tot2Point = team2Point + newValue;
    $(document).on('click','.team', function(e){
      if($(e.target).hasClass('team1')) {
        $(e.target).addClass('selected');
        $('.team .team2').removeClass('selected');
        
        $('.modal .team1 span').text(tot1Point);

      } else if($(e.target).hasClass('team2')) {
        $(e.target).addClass('selected');
        $('.team .team1').removeClass('selected');
        
        $('.modal .team2 span').text(tot2Point);
      }
    });
  });
});