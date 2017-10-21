var Myclass = /** @class */ (function () {
    function Myclass(strval, val) {
        this.str = strval;
        this.value = val;
    }
    Myclass.prototype.message = function () {
        return this.str + '`' + this.value;
    };
    return Myclass;
}());
var obj = new Myclass('random', 12);
console.log(obj.message());
