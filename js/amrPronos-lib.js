/*!
* amr-lib (e.g. filter.client.js)
* This file contains the code for the Filter controls.
*
* @project   AMR Pronos
* @date      2019-09-13
* @author    Olympe Kassa, Olympe Kassa Consulting <me@olympekassa.fr>
* @licensor  AMR Pronos
* @site      AMR-Pronis
*
*/
(function (window, $) {
    //example namespace, in this case an object literal


    AMRPronos = {
        //object properties
    };

    //exposes the object to global scope.
    window.AMRPronos = AMRPronos;

    // Init when document is ready
    $(document).ready(function () {
        // Custom JS & jQuery here

    });

    $(".slider").slider({
        indicators:false,
        height:500,
        transaction:500,
        interval:5000
    });

    $(document).ready(function(){
        $('.modal').modal();
    });

}(window, jQuery));