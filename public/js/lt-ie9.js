$().ready(function(){
    $('[class*="column"] + [class*="column"]:last-child').addClass('last-child');
    $('.button-group .button:last-child, .button-group button:last-child').addClass('last-child');
    $('table tr:nth-of-type(even)').addClass('even');

    // Because IE8 doesn't support bind
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }

            var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function () {}, fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };

            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();

            return fBound;
        };
    }
});