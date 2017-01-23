angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	$scope.estudiantes={};
	$scope.mensaje="";
	$scope.getAllEstudiantes = function(){
		testRequest.estudiantes().then(function (data){
      console.log("...");
      console.log(data.data);
			$scope.estudiantes=data.data; // Asignaremos los datos de todos los posts
			$scope.estudiantes.exist=1;
		});
	}
	$scope.getEstudiante = function(){
		$scope.unEstudiante={};
		testRequest.estudiantes($scope.estudiante_id).then(function (data){
			$scope.unEstudiante=data.data; // Asignaremos los datos del post
			$scope.unEstudiante.exist=1;
			$scope.estudiantes.exist=0;
		});
	}
  $scope.crear = function(){
    datos = {'nombre': $scope.a.nombre, 'cedula': $scope.a.cedula}
		testRequest.add_estudiante(datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

}
