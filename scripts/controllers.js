'use strict';
var myapp=angular.module('gitUsers',['ui.router'])
        myapp.controller('listController', function($scope,$http,gitUsersList) {
            var usersArr=[];
            $scope.filtText="";
            $scope.upArrow1=false;
            $scope.downArrow1=false;
            $scope.upArrow2=false;
            $scope.downArrow2=false;
            $scope.upArrow3=false;
            $scope.downArrow3=false;
            $scope.val1=1;
            $scope.val2=2;
            $scope.val3=3;
            $scope.usersDetails=usersArr;         
            
            $scope.deleteUser = function ($id) {
                for (var i = 0; i < $scope.usersDetails.length; i++) {
                        if ($id == $scope.usersDetails[i]["id"]) {
                            $scope.usersDetails.splice(i,1);
                            break;
                        }
                  }
                      
            }
            
            $scope.checkUser = function(){
                if($scope.usersDetails.length>0){
                    
                    for (var i = 0; i < $scope.usersDetails.length; i++) {
                        var name = $scope.usersDetails[i]["name"];
                        if(name!=null)
                            name = name.substring(0,name.indexOf("."));
                        if (name && name == $scope.userName) {
                            alert("user already added");
                            break;
                        }
                  }
                    if(i==$scope.usersDetails.length)
                        $scope.addUser();
                }
                else{
                    $scope.addUser();
                }
                $scope.userName = "";
            }
            
            $scope.addUser = function() {
              gitUsersList.getUsers($http,scb,ecb,$scope.userName);
              function scb(message) {
                    $scope.usersDetails.push(message);
              } 
              function ecb(message){
                  alert("User not found");
              }
            }
            
            $scope.select = function(setTab) {
                if (setTab === 1) {
                    $scope.filtText = "name";
                    $scope.val1=-1;
                    $scope.upArrow1=true;
                    $scope.downArrow1=false;
                    $scope.upArrow2=false;
                    $scope.downArrow2=false;
                    $scope.upArrow3=false;
                    $scope.downArrow3=false;
                }
                else if (setTab === 2) {
                    $scope.filtText = "location";
                    $scope.val2=-2;
                    $scope.upArrow2=true;
                    $scope.downArrow2=false;
                    $scope.upArrow1=false;
                    $scope.downArrow1=false;
                    $scope.upArrow3=false;
                    $scope.downArrow3=false;
                }
                else if (setTab === 3) {
                    $scope.filtText = "followers";
                    $scope.val3=-3;
                    $scope.upArrow3=true;
                    $scope.downArrow3=false;
                    $scope.upArrow2=false;
                    $scope.downArrow2=false;
                    $scope.upArrow1=false;
                    $scope.downArrow1=false;
                }
                else if (setTab === -1) {
                    $scope.filtText = "-name";
                    $scope.val1=1;
                    $scope.upArrow1=false;
                    $scope.downArrow1=true;
                    $scope.upArrow2=false;
                    $scope.downArrow2=false;
                    $scope.upArrow3=false;
                    $scope.downArrow3=false;
                }
                else if (setTab === -2) {
                    $scope.filtText = "-location";
                    $scope.val2=2;
                    $scope.upArrow2=false;
                    $scope.downArrow2=true;
                    $scope.upArrow1=false;
                    $scope.downArrow1=false;
                    $scope.upArrow3=false;
                    $scope.downArrow3=false;
                }
                else if (setTab === -3) {
                    $scope.filtText = "-followers";
                    $scope.val3=3;
                    $scope.upArrow3=false;
                    $scope.downArrow3=true;
                    $scope.upArrow2=false;
                    $scope.downArrow2=false;
                    $scope.upArrow1=false;
                    $scope.downArrow1=false;
                }
                else {
                    $scope.filtText = "";
                }
            };
            
        })
;

  myapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    
    $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/', {
                url:'/',
                templateUrl : 'views/card.html',
                controller : 'listController'
                    }
            );
    });