$(document).ready(function(){
  $(".addProdBtn").on('click', function(e) {
    $('.addProd').toggleClass('show');
  });
  // $(".addProd").on('click', function(e) {
  //   if(!$(e.target).closest('.addProd').length && !$(e.target).is('.addProd')) {
  //     $('.addProd').removeClass('show');
  //   }
  // });
});