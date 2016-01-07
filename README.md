# Betot angular-stoptype
Simple angular directive to detect finished typing with a callback

#Usage (javascript)
This is your module and controller should be
```
<script type="text/javascript">
    var ang = angular.module('testApp', ['betotStoptype']);
    
    ang.controller('testCtrl', function($scope){
      $scope.myCallback = function(typed) {
      
        //do something here like..
        console.log("you've type : " + typed);
        
      }
    });
  </script>
```

#html markup
```
<input type="text" betot-delaydone finishfunction="myCallback(delayedInput)" data-ng-model="delayedInput">
```

#Issues
We know nothing right now..
