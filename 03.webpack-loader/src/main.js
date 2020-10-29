//1.使用commonjs的模块化规范
import * as util from './js/mianUtils.js';

console.log('main.js');
console.log(util.add(10, 15));

//2.使用es6的模块化规范
import {name,age} from './js/info'

console.log(name);
console.log(age);


//3.依赖css文件
require('./css/normail.css');

//4.依赖less文件
require('./css/special.less');
document.writeln('你好，李银河');

