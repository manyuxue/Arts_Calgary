		var oneApp = angular.module('oneApp', []);
		
		oneApp.controller('oilpaintingCtrl', function($scope, $http) {
			$http.get("oilpainting.json")
			.then(function(response) {
				$scope.picdataoilpainting = response.data;
				$scope.ngclick = function(id,type){
				picClick(id,type);	
				};				
			});
		});				
				
/*--------------
		var oneApp = angular.module('oneApp', ['ngRoute', 'angular.filter']);

			oneApp.config(function ($routeProvider){
			return $routeProvider.
				when('/', {
				templateUrl: 'arttype-list.html',
				controller: 'arthomeCtrl'
				}).
				when('/:type',{
				templateUrl: 'oilpainting-1.html',
				controller: 'oilpaintingCtrl'
				}).
				otherwise({
				redirectTo: '/'
				});
		});

		
		oneApp.controller('arthomeCtrl', function($scope, $http) {
			$http.get('oilpainting.json')
			.then(function(response) {
				$scope.pics = response.data;
				});
			});
		oneApp.controller('oilpaintingCtrl', function($scope, $http, $routeParams){
			$scope.type = $routeParams.type;
			
			$http.get('oilpainting.json')
			.then(function(response) {
				var data = response.data;
				$scope.pics = data.filter(function(entry){
					return entry.type === $scope.type;
				});
			});			
		});*/

/*-------------*/				
				
		/*app.controller('watercolorCtrl', function($scope, $http) {
			$http.get("watercolor.json")
			.then(function(response) {
				$scope.picdatawatercolor = response.data;	*/			
				
				  //$scope.f = {};
			 
				  /*$scope.filter_by = function(field) {
					if ($scope.f[field] === '') {
						 delete $scope.f['__' + field];
						 return;
					}
					$scope.f['__' + field] = true;
					$scope.picdata.forEach(function(v) { 
					v['__' + field] 
					= (v[field].indexOf($scope.f[field]) >= 0; 
					})
				  };	
				  
				$scope.picdata = members.map(function(member) { 
											  return { 
												id:member.id,
												name: member.name, 
												author: member.author,
												type:member.type
											  }});				  

				$scope.ngclick = function(id,type){
				picClick(id,type);
				
				};
			});
		});*/
		
		oneApp.controller('watercolorCtrl', function($scope, $http) {
			$http.get("watercolor.json")
			.then(function(response) {
				$scope.picdatawatercolor = response.data;			
				$scope.ngclick = function(id,type){
				picClick(id,type);
				};
			});
		});		
		
		oneApp.controller('drawingCtrl', function($scope, $http) {
			$http.get("drawing.json")
			.then(function(response) {
				$scope.picdatadrawing = response.data;			
				$scope.ngclick = function(id,type){
				picClick(id,type);
				};
			});
		});			
		
				function picClick(id,type){
				var url = "url(Images/" + id + ") no-repeat";
				$("#largeversion").css('background', url);
				$("#imgdescription").text(type);
				var name = "Images/" + id;
				$("#smallversion").attr('src',name);
				$("#smallversion").attr('width','100%');
				setTimeout(updatePopup,1);
				$("#pop_background").fadeIn();
				$("#pop_box").fadeIn();
				$("#topnav").hide();
				return false;	
				
				};
		
		function updatePopup(){
			
		var $popupContent = $("#pop_box");
		var $largeversion = $("#largeversion");

		var top = ($(window).height() - $popupContent.outerHeight()) / 2;
		var left = ($(window).width() - $popupContent.outerWidth()) / 2;
		$popupContent.css({
			'top': top,
			'left': left
		});
		
		}	
		
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip({
		      animated: 'fade',
		  placement: 'top'});
		})
	
