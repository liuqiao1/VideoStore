class Movie{

    // es6不允许这样写，为什么？ES7有一个静态属性的提案，目前Babel转码器支持。
    // es6的写法node 可以默认支持一部分
    // https://node.green/
    // https://yq.aliyun.com/articles/665147
    // static CHILDRENS = 2;

    constructor(movieId, title){
        this.movieId = movieId;
        this.title = title;
    }

    amountFor(days) {
        // let result = 0;

        // switch (this.type) {
        //     case Movie.REGULAR:
        //         result += 2;
        //         if (days > 2)
        //             result += (days - 2) * 1.5;
        //         break;
        //     case Movie.NEW_RELEASE:
        //         result += days * 3;
        //         break;
        //     case Movie.CHILDRENS:
        //         result += 1.5;
        //         if (days > 3)
        //             result += (days - 3) * 1.5;
        //         break;
        // }
        // return result;
    }

    getFrequentPoints(days) {
        // if (this.type == Movie.NEW_RELEASE && days > 1)return 2;
        // return 1;
    }
}

Movie.CHILDRENS = 2;
Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;

class Regular extends Movie{
    constructor(movieId, title, type){super(movieId, title);this.type=type}
    amountFor(days){
        let result = 0;
        result += 2;
        if (days > 2)result += (days - 2) * 1.5;
        return result;
    }
    getFrequentPoints(){
        return 1;
    }
}

class New extends Movie{
    constructor(movieId, title, type){super(movieId, title);this.type=type}
    amountFor(days){
        let result = 0;
        result += 1.5;
        if (days > 3)result += (days - 3) * 1.5;
        return result;
    }
    getFrequentPoints(days){
        if(days>1)return 2;
        return 1;
    }
}

class Chidren extends Movie{
    constructor(movieId, title, type){super(movieId, title);this.type=type}
    amountFor(days){
        return days*3;
    }
    getFrequentPoints(days){
        if(days>1)return 2;
        return 1;
    }
}

module.exports = {
    Movie, Regular, New, Chidren
};

// exports = module.exports
// exports.a = a  导出的是一个包含a属性的对象 {a}
// module.exports = a 导出的直接是a

