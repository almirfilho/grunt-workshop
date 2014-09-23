/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Virtutis, magnitudinis
animi, patientiae, fortitudinis fomentis dolor mitigari solet. Mihi enim erit
isdem istis fortasse iam utendum.
*/
(function(window){

  'use strict';

  var GruntWorkshopBigNamedClass = (function() {

    function GruntWorkshopBigNamedClass() {
      // enforces new
      if (!(this instanceof GruntWorkshopBigNamedClass)) {
        return new GruntWorkshopBigNamedClass();
      }
      // constructor body
      this.init();
    }

    GruntWorkshopBigNamedClass.prototype.init = function() {
      // method body
      var button = document.getElementById('grunt-button');
      var readmore = document.getElementById('grunt-read-more');

      button.addEventListener('click', function(){
          readmore.style.display = 'block';
      });
    };

    return GruntWorkshopBigNamedClass;

  }());

  window.GruntWorkshopBigNamedClass = GruntWorkshopBigNamedClass;

})(window);
