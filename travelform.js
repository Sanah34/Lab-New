var travelform=angular.module("travelform",[]);

var customizedpackages=function($scope){
	$scope.customizedpackages=[{src:'images/pachmarhi.jpg',name:'Pachmarhi',price:5000,nightcount:'4'},
								{src:'images/munnar.jpg',name:'Munnar',price:7000,nightcount:'5'},
								{src:'images/srinagar.jpg',name:'Srinagar',price:10000,nightcount:'3'}
							  ];
	$scope.showMe = false;
  	$scope.viewpacks = function() {
    	$scope.showMe = !$scope.showMe;
  	}
}
var travelformvalidation=function($scope) { 
      $scope.reset = function() {
         $scope.name = "";
         $scope.email = "";
         $scope.phoneno = "";
         $scope.destination = "";
         $scope.daycount = "";
         $scope.pricerange = "";

      }   
      $scope.pricevalues = ["Select Price Range","25,000 and above", "15,000-25,000", "9,000-14,000","9,000 and below"];
 		$scope.pricerange= $scope.pricevalues[0];
  }
travelform.controller("customizedpackages",customizedpackages);
travelform.controller("travelformvalidation",travelformvalidation);