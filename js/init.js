(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var options = [
    	{selector: '.it1', offset: 400, callback: 'Materialize.fadeInImage(".it1")' },
    	{selector: '#cont', offset: 400, callback: '$("#cont").slideDown(1000)' },
    	{selector: '.it', offset: 400, callback: 'Materialize.fadeInImage(".it")' },
      {selector: '.comment-list', offset: 800, callback: '$(".comment-list").slideDown(2000)' }
  	];
  	Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space