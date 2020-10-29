//1.使用commonjs的模块化规范
import * as util from './js/mianUtils.js';

console.log('main.js');
console.log(util.add(10, 15));

//2.使用es6的模块化规范
import {name,age} from './js/info'

console.log(name);
console.log(age);