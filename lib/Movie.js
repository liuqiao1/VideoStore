"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function () {

    // es6不允许这样写，为什么？ES7有一个静态属性的提案，目前Babel转码器支持。
    // es6的写法node 可以默认支持一部分
    // https://node.green/
    // https://yq.aliyun.com/articles/665147
    // static CHILDRENS = 2;

    function Movie(movieId, title, type) {
        _classCallCheck(this, Movie);

        this.movieId = movieId;
        this.title = title;

        // this.type();
        this.type = type;
    }

    _createClass(Movie, [{
        key: "amountFor",
        value: function amountFor(days) {
            var result = 0;

            switch (this.type) {
                case Movie.REGULAR:
                    result += 2;
                    if (days > 2) result += (days - 2) * 1.5;
                    break;
                case Movie.NEW_RELEASE:
                    result += days * 3;
                    break;
                case Movie.CHILDRENS:
                    result += 1.5;
                    if (days > 3) result += (days - 3) * 1.5;
                    break;
            }
            return result;
        }
    }, {
        key: "getFrequentPoints",
        value: function getFrequentPoints(days) {
            if (this.type == Movie.NEW_RELEASE && days > 1) return 2;
            return 1;
        }
    }, {
        key: "_type",
        set: function set(type) {
            this.type = type;
        }
    }]);

    return Movie;
}();

Movie.CHILDRENS = 2;
Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;

module.exports = Movie;

// exports = module.exports
// exports.a = a  导出的是一个包含a属性的对象 {a}
// module.exports = a 导出的直接是a