/**
 * Created by Tush on 01/03/18.
 */
angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
            $scope.add = function() {
                $scope.resultText =  $scope.a + $scope.b;
            };

            $scope.sub = function() {
                $scope.resultText =  $scope.a - $scope.b;
            };

            $scope.mul = function() {
                $scope.resultText =  $scope.a * $scope.b;
            };

            $scope.div = function() {
                $scope.resultText =  $scope.a / $scope.b;
            };
    });
