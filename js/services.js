'use strict';


angular.module('bilgisayfam.services', ["ngResource"]).
  factory("Entry", ["$resource", function($resource){
    return $resource("http://sozluk.bilgisayfam.com/?search=:keyword");
}]);
