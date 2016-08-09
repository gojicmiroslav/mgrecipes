mgrecipes = angular.module('mgrecipes', ['templates', 'ngRoute', 'controllers']);

mgrecipes.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: "index.html",
			controller: "RecipesController"
		});

}]);


//controllers module - a dependency.
controllers = angular.module('controllers', []);

controllers.controller('RecipesController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){

	//re-routes to ourself with the keywords in the query string, 
	//and the controller's body does a simple substring lookup of our canned data 

	$scope.search = function(keywords){
		$location.path("/").search("keywords", keywords);
	};

 	if($routeParams.keywords){
 		keywords = $routeParams.keywords.toLowerCase();
 		$scope.recipes = recipes.filter(function(recipe){
 			return recipe.name.toLowerCase().indexOf(keywords) != -1;
 		});
 	} else {
 		$scope.recipes = recipes;
 	}

}]);

recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  },
  {
    id: 2,
    name: 'Garlic Mashed Potatoes',
  },
  {
    id: 3,
    name: 'Potatoes Au Gratin',
  },
  {
    id: 4,
    name: 'Baked Brussel Sprouts',
  },
];



