(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController );

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.dishes = "";
  $scope.lunchCheckOutput;
  $scope.checkIfTooMuch = function(){
    var array = $scope.dishes.split(',');
    array = array.filter(function(n){ return n != "" });
    var count = array.length;
    console.log(count);
    if(count <= 3 && count >0){ $scope.lunchCheckOutput = "Enjoy!";}
    else if (count > 3) {$scope.lunchCheckOutput = "Too much!";}
    else if(count == 0){$scope.lunchCheckOutput = "Please enter data first";}
  };
};


})();
