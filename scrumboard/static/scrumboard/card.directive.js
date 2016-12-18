/**
 * Created by masterp on 18/12/2016.
 */
(function () {
    'use strict';

    angular.module('scrumboard.demo')
        .directive('scrumboardCard', cardDirective);

    function cardDirective() {
        return {
            templateUrl: '/static/scrumboard/card.html',
            restrict: 'E', // 'E' for element 'A' for attribute
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(
                        url,
                        $scope.card
                    );
                };
                $scope.delete = function () {
                  $http.delete(url).then(
                      function(){
                          var cards = $scope.list.cards;
                          cards.splice(
                              cards.indexOf($scope.card),
                              1
                          );
                      }
                  )
                };
                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        }
    }
})();