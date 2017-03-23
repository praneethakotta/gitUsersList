
'use strict';

var app=angular.module('gitUsers')
      
       app.service('gitUsersList',function(){
    
            this.getUsers = function($http,scb,ecb,userName) {
                return $http.get('https://api.github.com/users/' + userName)
                .then(function(res) {
                    scb(res.data);
                },function(err){
                    ecb(err.data);
                })
              }
        })
 
;