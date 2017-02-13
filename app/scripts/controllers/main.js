'use strict';

/**
 * @ngdoc function
 * @name dilexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dilexApp
 */
angular.module('dilexApp')
.controller('MainCtrl', function ($scope, $location) {
  
	
	$scope.loc = "nothing";
	
	$scope.getClass = function (path) {
		
		$scope.loc = $location.path() ;
		
		  return ($location.path().substr(0, path.length) === path) ? 'active' : '';
		};
		
	$scope.subbing = false ;
	$scope.sub = function() {
	       $scope.name = this.name ;
	       $scope.ville = this.ville; 
	       $scope.email = this.email; 
	       $scope.message = this.message ; 
	       //this.name = null ; 
	       //this.ville = null; 
	       //this.email = null ; 
	       
	      
	       if  ($scope.name != null && $scope.ville!=null && scope.email!=null && scope.message!=null )
	    	   {$scope.subbing = true ; }
	       return true ; 
	 };
	 
	$scope.list_villes = [ 'ADRAR','AIN DEFLA','AIN TEMOUCHENT','AL TARF','ALGER','ANNABA','B.B.ARRERIDJ','BATNA', 'BECHAR','BEJAIA','BISKRA','BLIDA', 'BOUIRA','BOUMERDES','CHLEF', 'CONSTANTINE', 'DJELFA','EL BAYADH','EL OUED','GHARDAIA', 'GUELMA','ILLIZI','JIJEL','KHENCHELA','LAGHOUAT','MASCARA','MEDEA','MILA','MOSTAGANEM','MSILA','NAAMA','ORAN', 'OUARGLA','OUM ELBOUAGHI','RELIZANE','SAIDA','SETIF','SIDI BEL ABBES','SKIKDA','SOUKAHRAS','TAMANGHASSET','TEBESSA','TIARET','TINDOUF','TIPAZA','TISSEMSILT','TIZI.OUZOU','TLEMCEN' ];

	
	
  });





