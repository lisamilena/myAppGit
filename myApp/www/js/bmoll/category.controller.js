'use strict';

angular.module('starter')
    .controller('CategoryListCtrl', function($location, $scope, Category, Items) {
        Category.query(function(data){
            $scope.categories = data;
        });
    $scope.insert = function(currentCategory) {
        //console.log(currentCategory);
        Category.add({}, currentCategory);
        $location.path('/home');
    };
    $scope.insertItem = function(currentItem) {
        //console.log(currentItem);
        Items.add({}, currentItem);
        $location.path('/home');
    };
/*
    $scope.remove = function (currentCategory) {
        Category.remove({id: id}, {}, function (data) {
            $location.path('/');
        });
    };
*/
    })

.controller('ItemListCtrl', function($scope, $stateParams, Items) {
  var iteD = [];
        Items.query(function(data){
		  for (var i = 0; i < data.length; i++) {
		    if(data[i].category_id == $stateParams.categoryTitle){
		      iteD.push(data[i]);
		    }
		  };
  		$scope.items = iteD;
  		$scope.categoryTitle = $stateParams.categoryTitle;
        });
})
    
.controller('ImagesListCtrl', function($scope, Images) {
  var imgD = [];
        Images.query(function(data){
        //$scope.images = data;
		console.log($scope.item.id);
		  for (var i = 0; i < data.length; i++) {
		    if(data[i].item_id == $scope.item.id){
		      imgD.push(data[i]);
		      console.log(imgD[i]);
		    }
		  };
  		$scope.images = imgD;
        });
});;
