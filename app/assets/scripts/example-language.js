// Generated by CoffeeScript 1.7.1
(function() {
  require(["$api/models", "/strings/main.lang"], function(models, mainStrings) {
    "use strict";
    var doHelloWorld, _;
    _ = SP.bind(mainStrings.get, mainStrings);
    doHelloWorld = function() {
      document.querySelector("h1").innerHTML = _("hello");
    };
    exports.doHelloWorld = doHelloWorld;
  });

}).call(this);