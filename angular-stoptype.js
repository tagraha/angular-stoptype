/*global window: true, console: true, clearTimeout: true, setTimeout: true;*/
;(function( window, angular, undefined){  
  /*jshint globalstrict:true*/
  'use strict';
  var betotStoptype = angular.module('betotStoptype', []);
  
  betotStoptype.directive('betotDelaydone', function() {
    
    var typingTimer;
    var doneTypingInterval = 700;
    
    return {
      restrict: 'A',
      scope: {
        finishfunction: '&'
      },
      link: function(scope, elements, attributes){
        
        function Delay(){}
        Delay.prototype._init = function() {

          clearTimeout(typingTimer);
          typingTimer = setTimeout(function(){

              scope.finishfunction();
              scope.$apply();

          }, doneTypingInterval);
          
        };
        
        var doneTypingDelay = new Delay();
        
        elements.bind("keyup", function(event) {          
          var keyCode = event.which || event.keyCode;
          if (keyCode === 13 || keyCode === 9 || keyCode === 16) {
            //16 for tab key
            //13 for enter key
            //9 for shift key
            event.preventDefault();
          } else{
            doneTypingDelay._init();
          }
        });
      }
    };
  });    
})(window, window.angular);