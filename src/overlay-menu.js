'use strict';

/**
 * Overlay menu (general purpose directive)
 */
angular.module('g1b.overlay-menu', []).
directive('overlayMenu', ['$document', '$timeout', function ($document, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './overlay-menu.html',
    scope: {
      items: '=',
      onSelect: '&',
    },
    compile: function () {
      return {
        pre: function () {},
        post: function (scope, element) {
          scope.select = function (item) {
            scope.selected = item;
            if ( !scope.selected.items ) {
              scope.active = false;
              scope.onSelect({item: scope.selected});
            }
          }
          $document.on('mousedown', function (e) {
            if ( !scope.active && e.button === 0 ) {
              scope.timeoutId = $timeout(function () {
                scope.$apply(function () {
                  scope.active = true;
                });
              }, 500);
            }
          });
          $document.on('mouseup', function (e) {
            $timeout.cancel(scope.timeoutId);
          });
          $document.on('keyup', function (e) {
            if ( e.keyCode === 27 ) {
              scope.$apply(function () {
                scope.active = !scope.active;
              });
            }
          });
        }
      };
    }
  };
}]);
