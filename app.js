var app = angular.module('courseApp', []);

app.controller('CourseController', function($scope, $http){

const baseUrl = "http://localhost:3000/api/courses";

$scope.course = {};
$scope.courses = [];

$scope.loadCourses = function(){

$http.get(baseUrl).then(function(response){
$scope.courses = response.data;
});

};

$scope.saveCourse = function(){

if($scope.course.id){

$http.put(baseUrl+"/"+$scope.course.id,$scope.course)
.then(function(){
$scope.loadCourses();
$scope.course={};
});

}
else{

$http.post(baseUrl,$scope.course)
.then(function(){
$scope.loadCourses();
$scope.course={};
});

}

};

$scope.editCourse = function(c){

$scope.course = angular.copy(c);

};

$scope.deleteCourse = function(id){

$http.delete(baseUrl+"/"+id)
.then(function(){
$scope.loadCourses();
});

};

$scope.loadCourses();

});