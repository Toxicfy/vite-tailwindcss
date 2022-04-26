import _ from 'lodash';
import createImage from './image.js';
const getUserInfo = require('./commonjs')
import createButton from './style-button/button';
import './common.scss'
import './font/iconfont.css'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const createComponent = text => {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}

const createImageBackground = () => {
    const div = document.createElement('div');
    div.className = 'css-background-css'
    return div
}

const createFontIcon = () => {
    const span = document.createElement('span');
    span.className = 'icon iconfont icon-bofangqi-bofang'
    return span;
}

const imgDiv = createImage()

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is a test promise')
    }, 1000)
})

promise.then(data => {
    console.log(data)
})

const info = _.join([JSON.stringify(getUserInfo()), '', 'this is commonjs module'], '&nbsp;&nbsp;');
document.body.appendChild(createComponent(info))
document.body.appendChild(createButton())
document.body.appendChild(createComponent('背景色修改是由scss文件编写'))

document.body.appendChild(createComponent('</br>'))
document.body.appendChild(createComponent('通过 require 加载图片'))
document.body.appendChild(imgDiv)

document.body.appendChild(createComponent('</br>'))
document.body.appendChild(createComponent('通过 background = url 加载图片'))
document.body.appendChild(createImageBackground())

document.body.appendChild(createComponent('</br>'))
document.body.appendChild(createComponent('通过 background = url 加载图片'))
document.body.appendChild(createFontIcon())
