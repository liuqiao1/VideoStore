Chapter 1
1. 负责计算的statement函数过长，做了本该让别的类干的事；遍历每个rental, 根据类型+天数计算totalAccount和积分；
2. 如果需要增加一种输出结果的形式，要复制粘贴改些地方，代码冗余；
3. 如果计算的规则发生变化，则要同时改掉所有用到这些规则的地方；
4. 如果要增减type,又要改许多个涉及type的地方。

整体来说，耦合性太强，需要进行拆分。
- 函数拆分
1. 找逻辑泥团：可以单独拿出来的一块逻辑
2. 找泥团中用到的变量，依赖于外部的变量，是否修改了他们，来确定入参，返回值;
VS code 选中需要提取的代码，右键，refactor, exact method...可以快速达到目标；

- 函数移动
1. 函数与当前它所在的类交流多吗？联系紧密吗？如果不是，它正确的地方应该是哪里？
2. 在那些类里面调用了？

- 使用查询代替临时变量
1. 使用const来测验某个变量是否只被赋值一次
2. =后边内容提到一个独立的查询函数
3. 使用查询函数调用换掉临时变量引用

- node 对于es6语法的支持 node.green
- es6 class setter&getter

Chapter 6 重新组织函数
1. 过长得函数带来什么问题？
- 难理解
- 难修改
- 我自己也写过很长很长的函数，原因是这个函数干了一件相对较大得事情，我觉得可以做成一个函数；但是这个大事情又分了很多小事，这些小事可能时独立的，也有可能是必须依赖上下文的。我往往会加一些注释说明接下来的这段代码是干一件什么事儿。这确实印证了书中关于分解函数的原则：
> 每当感觉需要注释来说明点什么的时候，我们就把需要说明的东西写进一个独立函数中，并以其用途命名。

取个好名字也是个技术活，好的名字可以让阅读程序的人产生正确的联想，猜测出代码意图而不用关系函数细节。

- 找长函数（不仅仅是长，更是变量多，职责多且混乱）
- 看这个函数干了些什么事儿，目的是什么
- 去掉所有可以去掉的临时变量，比如用查询代替，降低临时变量数量；直接用表达式代替等，如果某个临时变量被多次赋值使用，需要使用Split Tempporary Variable进行拆分，遇到更复杂的，使用Replace Method With Method Object。
- 抽取可以独立出来的代码段
- 找代码段里的变量，包括两种：外部的，内部的
- 对于内部的，声明为小函数的临时变量，如果外部需要使用结果则返回
- 对于外部的，仅仅只是读取了，当作参数传入即可，不要修改参数，新开一个变量拷贝

- 找过度提炼，使用本体替换调用，删除多余函数
- 找过于复杂的表达式，拆到变量里或者提到新的小函数里，一步一步走
- 看这个函数的实现方式是否不合理，有没有一种更加简洁合理的实现方式，如果有，直接按照更好的算法重写


1. 基础三剑客
- HTML
    * W3C走一遍[w3c](http://www.w3school.com/)
- CSS
    * 《CSS权威指南》（不建议一开始就通篇系统性地看看完；建议了解完基本套路，仿写几个页面，哪里不会查哪里）
- JAVASCRIPT
    * 《Javascript权威指南》（强推，堪称经典，建议仔细看完，把书上的例子敲完）
- HTTP
    * 《图解HTTP》

2. 进阶
- HTML5&CSS3
    * 权威指南（同上CSS权威指南建议）
    * 张鑫旭 https://www.zhangxinxu.com/
- JS黑科技
    * 《你不知道的Jabascript》（上中下共三卷）
- ES新款
    * 《阮一峰ES6入门》（最经典，写的相当好）
- 模式
    * 基本的面向对象设计模式 https://blog.csdn.net/lovelion
    * 《Javascript设计模式开发与实践》
    * React模式（可用来面试装逼）
- 重构
    * 《重构--改善代码既有设计》（面试应该不会问，但是对于工作很有用，是师兄强推给我的）

3. 框架
- React
    * 官网 https://reactjs.org/
    React生态，比如Redux，React－router等，可直接上官网看
- Node相关（一般公司会要求懂一门后台语言，JAVA之类的也可以，不过会NODE会很加分）
    * 官网 https://nodejs.org/en/
    * EGG https://eggjs.org/zh-cn/
    《深入浅出NodeJS 》

4. 工程化
- 模块化编程（上网找博客看，理解模块化编程的思想，以及模块规范）
- NPM
- Git
- Webpack等类似打包工具（会用，知道一点工作原理）

6. 资讯与手册
- Mozzila，非常强推，标准手册
- 掘金
- 知乎
- 谷歌web developer
- Twitter，平常遇到的一些书的作者，社区活跃的人，follow他们
- 你所学技术的官方网站社区
- GitHub
－　牛客网，找面试题

7. 资料分享
以上提到的资料资料包里不一定有，上网找一般都有免费下载的。
    链接：https://pan.baidu.com/s/1Xdla1otQF10fFS783TT5kA 
提取码：lz5y 
复制这段内容后打开百度网盘手机App，操作更方便哦
    