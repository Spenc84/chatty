'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService, dateFilter ) {

    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          for (var i = 0; i < response.data.length; i++) {
            response.data[i].time = dateFilter(response.data[i].time, 'M/d/yy h:mm a');
          }
          $scope.messages = response.data;
        });

        console.log($scope.newMessage);
        $scope.newMessage = "";
        console.log($scope.newMessage);

      }
    };



    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
