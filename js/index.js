var app = angular.module('dynamicFormApp', []);
app.controller('mainController', ['$scope', function ($scope) {

	$scope.keys = function (obj) {
		if (!obj) {
			return [];
		}
		return Object.keys(obj);
	};

	$scope.addToList = function () {
		$scope.displayData.data.push(angular.copy($scope.tentativeFormData));
		console.log($scope.displayData.data);
		emptyTentativeData();
	};

	$scope.displayData = {
		"header": [{
			"headerName": "Nom"
		}, {
			"headerName": "Prenom"
		}, {
			"headerName": "email"
		}],
		"data": [{
			"Nom": "G'bamy",
			"Prenom": "Nathanaël",
			"email": "nathanael.gbamy@gmail.com"
		}, {
			"Nom": "Kim",
			"Prenom": "Kardashian",
			"email": "Kim@gmail.com"
		}, {
			"Nom": "Le Blanc",
			"Prenom": "Jean",
			"email": "Jean@gmail.com"
		}]
	};

	$scope.tentativeFormData = angular.copy($scope.displayData.data[0]);

	var emptyTentativeData = function () {
		angular.forEach($scope.tentativeFormData, function (val, key) {
			$scope.tentativeFormData[key] = "";
		});
		console.log($scope.tentativeFormData);
	};

	emptyTentativeData();
}]);