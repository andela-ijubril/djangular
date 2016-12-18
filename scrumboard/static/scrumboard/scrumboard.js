/**
* Created by masterp on 18/12/2016.
*/
(function(){
        'use strict';
        angular.module('scrumboard.demo', [])
                .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

        function ScrumboardController($scope, $http) {
            $scope.add = function (list, title) {
              var card = {
                  list: list.id,
                  title: title
              };
                $http.post('/scrumboard/cards/', card)
                    .then(function(response){
                        console.log(response);
                        list.cards.push(response.data);
                    },
                    function(){
                        alert('could not create card');
                    });

            };
            $scope.person = {
                name: 'Jubril',
                age: 24
            };
            $scope.data = [];
            $http.get('/scrumboard/lists/').then(function(response){
                $scope.data = response.data;
            });
        }

    }());
