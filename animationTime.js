var animationTime = 500;

$(function(){
  
  init();
  
  var that = this;
  $('.search-input').on('keydown', function(e) {
    var val = $(this).val();
    if (e.keyCode == 13) {
      e.preventDefault(); 
      if(!val) {
      	return;
    	}
      
      hideResults();
      
      // Do some AJAX call here to get results
      getSearchResults(val).then(function(results){
        // Do something with results here before calling showResults
        //
        //
        showResults();
      });
    }
  });
    
  function init() {
    var searchButton = $('.search-button');
    searchButton.on('click', function(e) {
      var panelContainer = $('.panel-container')
      if(!panelContainer.hasClass('show-search')) {
        panelContainer.addClass('show-search')
        setTimeout(function() {
          $('.search-input').focus();
        }, animationTime*3);
      }
    });
  };
    
  function getSearchResults(val) {
    return new Promise(function(resolve, reject) {
      var results = [];

      setTimeout(function(){
        resolve(results);
      }, 2000);
    });
  }
  
  function showResults() {
    var panelContainer = $('.panel-container');
    var results = $('.results');
    var searchIcon = $('.search-button i');
    
    panelContainer.addClass('show-search show-results');
    searchIcon.toggleClass('glyphicon-search glyphicon-refresh spinning');
    results.addClass('show');

    // After first run, change result.show class to have no transition animation delay
    if(!results.hasClass('no-wait')) {
      setTimeout(function(){
        results.addClass('no-wait');
      }, animationTime*2);
    }
  }
  
  function hideResults() {
    var panelContainer = $('.panel-container');
    var results = $('.results');
    var searchIcon = $('.search-button i');

    if(!panelContainer.hasClass('show-results')) {
      panelContainer.removeClass('show-search')
    }

    results.removeClass('show');
    searchIcon.toggleClass('glyphicon-search glyphicon-refresh spinning');
  }

});
