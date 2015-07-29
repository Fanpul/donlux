(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var options = [
    	{selector: '.it1', offset: 400, callback: 'Materialize.fadeInImage(".it1")' },
    	{selector: '#cont', offset: 400, callback: '$("#cont").slideDown(1000)' },
    	{selector: '.it', offset: 400, callback: 'Materialize.fadeInImage(".it")' }
  	];
  	Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space