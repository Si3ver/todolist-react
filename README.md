# React.js 入门

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## 组件

React组件就是网页上的一部分，大写字母开头。
它是一个JS类，继承自React.Component。
必须有一个render()函数，返回要渲染的内容。

ReactDOM.render()负责把组件渲染到HTML节点上。

## JSX语法

标签形式的语法结构。
在JSX里面写js表达式（只能写JS表达式，不能写JS语句），需要加大括号。

## 实现TodoList组件

- 增加任务
- 删除任务
- 样式优化

React思想，操作数据而非操作DOM，操作DOM让react来做。
state 存组件的数据，改变state用setState()函数。此时，state变换后，组件会自动刷新！！！  
循环展示每一项时，key值~

## 组件之间的通信

1. 父组件与子组件通信
    父组件通过属性，向子组件传递参数。子组件通过this.props接受参数。 （key不会传）
2. 子组件与父组件通信
    通过this.props, 子组件调用父组件传过来的函数。
